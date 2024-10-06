import clsx from 'clsx'
import { mockQuizListItems } from '../../../../constants/quiz'
import { CommonProps } from '../../../../types/common'
import { QuizTableItem } from './QuizTableItem'

type QuizTable = CommonProps

export const QuizTable = ({ className }: QuizTable) => {
  const availableQuizzes = mockQuizListItems

  return (
    <div
      className={clsx(
        'flex-1 w-full h-full overflow-hidden bg-white rounded-3xl drop-shadow-xl outline outline-gray-300',
        className
      )}>
      <div className='flex flex-col h-full overflow-auto'>
        {availableQuizzes.map(quiz => (
          <QuizTableItem key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  )
}
