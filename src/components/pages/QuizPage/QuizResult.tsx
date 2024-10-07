import { QuestionGrade } from '../../../constants/quiz'
import { FlashCardGrades, FlashCardQuestion } from '../../../types/quiz'
import { Button } from '../../common/Button'
import { Grade } from './Grade'

type QuizResult = {
  questions: FlashCardQuestion[]
  grades: FlashCardGrades

  onRetryClick: () => void
  onEndlessModeClick: () => void
  onBadGradeRetryClick: (ids: number[]) => void
}

const getPoorlyAnsweredQuestionIds = (grades: FlashCardGrades) => {
  const threshold = QuestionGrade.GOOD
  const badAnswerIds: number[] = []

  Object.keys(grades).forEach(key => {
    const value = grades[Number(key)]

    if (value.some(grade => grade < threshold)) {
      badAnswerIds.push(Number(key))
    }
  })

  return badAnswerIds
}

export const QuizResult = ({
  questions,
  grades,
  onBadGradeRetryClick,
  onEndlessModeClick,
  onRetryClick,
}: QuizResult) => {
  const poorAnswerIds = getPoorlyAnsweredQuestionIds(grades)
  const isRetryBadGradesDisabled = poorAnswerIds.length === 0 // Disabled if all questions passed bad grade filter

  const handleStartBadGradesGame = () => {
    onBadGradeRetryClick(poorAnswerIds)
  }

  const calculateAverageGrade = (grades: FlashCardGrades) => {
    let total = 0
    let totalGrades = 0

    Object.keys(grades).forEach(key => {
      const value = grades[Number(key)]

      value.forEach(grade => {
        total += grade
        totalGrades++
      })
    })

    return Math.ceil(total / totalGrades)
  }

  return (
    <div className='flex flex-col items-center w-full h-full p-4 py-4 overflow-auto bg-white animate-fade-in justify-evenly rounded-3xl'>
      <h1 className='my-2 text-3xl font-black uppercase md:my-8 md:text-5xl animate-bounce'>Complete!</h1>

      <div className='flex flex-col flex-1 w-full overflow-auto min-h-[150px] max-w-full border rounded-xl gap-2 p-2 md:p-4'>
        {Object.keys(grades).map((key, index) => {
          const question = questions.find(q => q.id === Number(key))?.question ?? 'Error'
          const questionGrades = grades[Number(key)]

          return (
            <div key={`${question}`} className='flex flex-col items-center'>
              <div className='flex w-full gap-1 min-h-fit'>
                <span className='text-sm font-bold min-w-[18px] flex-shrink-0'>{`${index + 1}.`}</span>
                <span className='pr-2 md:pr-4 whitespace-nowrap'>{question}</span>
              </div>

              <div className='flex items-center w-full gap-2 text-xs md:text-base'>
                <span className='ml-6 font-bold'>{questionGrades.length === 1 ? 'Grade' : 'Grades'}:</span>{' '}
                {questionGrades.map(grade => (
                  <Grade key={`${key}_${grade}`} grade={grade} className='text-xs md:text-sm' />
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className='flex items-center justify-center w-full gap-2 pt-2 pb-2 mt-4 border-t border-b'>
        <span className='italic font-bold'>Average grade:</span>
        <Grade grade={calculateAverageGrade(grades)} className='text-sm' />
      </div>

      <div className='w-full mt-4 md:mt-4'>
        <div className='flex gap-4'>
          <Button onClick={onRetryClick} className='px-1 py-2 md:p-4'>
            Try again
          </Button>

          <Button onClick={onEndlessModeClick} className='px-1 py-2 bg-red-500 md:p-4'>
            Endless Mode
          </Button>
        </div>

        <Button
          onClick={handleStartBadGradesGame}
          disabled={isRetryBadGradesDisabled}
          className='px-1 py-2 mt-4 bg-teal-500 md:p-4'>
          Retry wrong answers
        </Button>
      </div>
    </div>
  )
}
