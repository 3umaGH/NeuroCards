import { FlashCardQuiz } from '../../../../types/quiz'

type QuizTableItem = { quiz: FlashCardQuiz }

export const QuizTableItem = ({ quiz }: QuizTableItem) => {
  return (
    <>
      <div className='flex group flex-col p-4 md:p-8 items-center justify-between border-b-[1px] py-4 md:py-8 border-gray-300 gap-x-4 gap-y-2 md:flex-row cursor-pointer hover:bg-gray-50 transition-all'>
        <span className='font-bold text-[--primary] text-xl w-full group-hover:brightness-75'>{quiz.quiz_topic}</span>
        <span className='w-full font-bold text-left md:text-right '>{quiz.questions.length} Cards</span>
      </div>
    </>
  )
}
