import { QuizTableItem as QuizTableItemType } from '@/types/quiz'
import { Link } from 'react-router-dom'

type QuizTableItemProps = { quiz: QuizTableItemType }

export const QuizTableItem = ({ quiz }: QuizTableItemProps) => {
  return (
    <>
      <Link
        to={`/quiz/${quiz.id}`}
        className='flex group flex-col p-4 md:p-8 items-center justify-between border-b-[1px] py-4 md:py-8 border-gray-300 gap-x-4 gap-y-2 md:flex-row cursor-pointer hover:bg-gray-50 transition-all'>
        <span className='font-bold text-[--primary] text-lg md:text-xl w-full group-hover:brightness-75 overflow-hidden text-ellipsis whitespace-nowrap'>
          {quiz.quiz_topic}
        </span>
        <span className='w-full font-bold text-left md:text-right md:w-min whitespace-nowrap'>
          {quiz.questions_amount} Cards
        </span>
      </Link>
    </>
  )
}
