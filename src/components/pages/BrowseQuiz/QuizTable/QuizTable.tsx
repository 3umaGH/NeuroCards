import clsx from 'clsx'
import { CommonProps } from '../../../../types/common'
import { QuizTableItem } from './QuizTableItem'
import { mockQuiz } from '../../../../constants/quiz'

type QuizTable = CommonProps

export const QuizTable = ({ className }: QuizTable) => {
  return (
    <div
      className={clsx(
        'flex-1 w-full h-full overflow-hidden bg-white rounded-3xl drop-shadow-xl outline outline-gray-300',
        className
      )}>
      <div className='flex flex-col h-full overflow-auto'>
        {new Array(20).fill(0).map(() => (
          <QuizTableItem quiz={mockQuiz} />
        ))}
      </div>
    </div>
  )
}
