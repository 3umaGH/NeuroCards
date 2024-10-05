import { gradeEmojiMap, mockQuestions, QuestionGrade } from '../../../constants/quiz'
import { Button } from '../../common/Button'

export const QuizResult = () => {
  return (
    <div className='flex flex-col items-center w-full h-full p-4 py-4 overflow-auto bg-white justify-evenly rounded-3xl'>
      <h1 className='my-8 text-3xl font-black uppercase md:my-16 md:text-5xl animate-bounce'>Complete!</h1>

      <div className='flex flex-col flex-1 overflow-auto min-h-[150px] border rounded-xl gap-2 p-2 md:p-4'>
        {mockQuestions.map((question, index) => (
          <div className='flex items-center gap-2 min-h-fit'>
            <span className='w-full text-right max-w-[20px] text-sm font-bold'>{`${index})`}</span>{' '}
            <span className='line-clamp-1'>
              {gradeEmojiMap[QuestionGrade.EXCELLENT]} {question.question}
            </span>
          </div>
        ))}
      </div>

      <div className='w-full mt-8 md:mt-16'>
        <div className='flex gap-4'>
          <Button>Try again</Button>

          <Button className='bg-red-500'>Endless Mode</Button>
        </div>

        <Button className='mt-4 bg-teal-500'>Rety bad grades</Button>
      </div>
    </div>
  )
}
