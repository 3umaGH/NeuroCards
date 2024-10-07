import clsx from 'clsx'
import { CommonProps } from '../../../../types/common'
import { QuizTableItem as QuizTableItemType } from '../../../../types/quiz'
import { QuizTableItem } from './QuizTableItem'
import { Loading } from '../../../common/Loading'

type QuizTable = { quizzes: QuizTableItemType[]; loading: boolean } & CommonProps

export const QuizTable = ({ quizzes, loading, className }: QuizTable) => {
  return (
    <div
      className={clsx(
        'flex-1 w-full h-full overflow-hidden bg-white rounded-3xl drop-shadow-xl outline outline-gray-300',
        className
      )}>
      {loading && (
        <div className='flex items-center justify-center w-full h-full'>
          <Loading />
        </div>
      )}
      <div className='flex flex-col h-full overflow-auto'>
        {quizzes.map(quiz => (
          <QuizTableItem key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  )
}
