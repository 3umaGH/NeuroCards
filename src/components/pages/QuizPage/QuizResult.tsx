import { gradeEmojiMap, QuestionGrade } from '../../../constants/quiz'
import { FlashCardAnsweredQuestion } from '../../../types/quiz'
import { Button } from '../../common/Button'

type QuizResult = {
  answeredQuestions: FlashCardAnsweredQuestion[]

  onRetryClick: () => void
  onEndlessModeClick: () => void
  onBadGradeRetryClick: (ids: number[]) => void
}

const BAD_GRADE_FILTER = (question: FlashCardAnsweredQuestion) => QuestionGrade.EXCELLENT !== question.grade

export const QuizResult = ({
  answeredQuestions,
  onBadGradeRetryClick,
  onEndlessModeClick,
  onRetryClick,
}: QuizResult) => {
  const isRetryBadGradesDisabled = answeredQuestions.every(question => !BAD_GRADE_FILTER(question)) // Disabled if all questions passed bad grade filter

  const handleStartBadGradesGame = () => {
    onBadGradeRetryClick(answeredQuestions.filter(BAD_GRADE_FILTER).map(question => question.id))
  }

  return (
    <div className='flex flex-col items-center w-full h-full p-4 py-4 overflow-auto bg-white justify-evenly rounded-3xl'>
      <h1 className='my-8 text-3xl font-black uppercase md:my-16 md:text-5xl animate-bounce'>Complete!</h1>

      <div className='flex flex-col flex-1 w-full overflow-auto min-h-[150px] max-w-full border rounded-xl gap-2 p-2 md:p-4'>
        {answeredQuestions.map((question, index) => (
          <div
            key={`${question.id}_${question.answered_at}`}
            className='flex items-center w-full gap-2 min-h-fit whitespace-nowrap'>
            <span className='text-sm font-bold text-right w-[25px]'>{`${index + 1})`}</span>
            <span className=''>
              {gradeEmojiMap[question.grade]} {question.question}
            </span>
          </div>
        ))}
      </div>

      <div className='w-full mt-8 md:mt-16'>
        <div className='flex gap-4'>
          <Button onClick={onRetryClick}>Try again</Button>

          <Button onClick={onEndlessModeClick} className='bg-red-500'>
            Endless Mode
          </Button>
        </div>

        <Button onClick={handleStartBadGradesGame} disabled={isRetryBadGradesDisabled} className='mt-4 bg-teal-500'>
          Rety bad grades
        </Button>
      </div>
    </div>
  )
}
