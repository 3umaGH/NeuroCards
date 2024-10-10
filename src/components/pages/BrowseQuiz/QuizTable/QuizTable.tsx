import { Button } from '@/components/common/Button'
import { Loading } from '@/components/common/Loading'
import { CommonProps } from '@/types/common'
import { QuizTableItem as QuizTableItemType } from '@/types/quiz'
import clsx from 'clsx'
import { useState } from 'react'
import { MdClear } from 'react-icons/md'
import { QuizTableItem } from './QuizTableItem'

type QuizTable = { quizzes: QuizTableItemType[]; loading: boolean } & CommonProps

export const QuizTable = ({ quizzes, loading, className }: QuizTable) => {
  const [searchQuery, setSearchQuery] = useState<null | string>(null)

  const QUERY_FILTER = (quiz: QuizTableItemType) =>
    searchQuery === null ? true : new RegExp(searchQuery, 'i').test(quiz.quiz_topic)

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    if (value === '') {
      setSearchQuery(null)
    } else {
      setSearchQuery(value)
    }
  }

  return (
    <div
      className={clsx(
        'flex-1 flex flex-col w-full h-full overflow-hidden bg-white rounded-3xl drop-shadow-xl outline outline-gray-300',
        className
      )}>
      <div className='flex gap-4 p-2 border-b md:p-4'>
        <input
          onChange={handleQueryChange}
          value={searchQuery ?? ''}
          id='topic'
          placeholder='Search'
          className='w-full p-2 rounded-xl bg-gray-50 outline outline-gray-200 focus:outline-blue-200'
        />
        <Button onClick={() => setSearchQuery(null)} className='w-min' aria-label='Clear'>
          <MdClear />
        </Button>
      </div>

      {loading && (
        <div className='flex items-center justify-center w-full h-full'>
          <Loading />
        </div>
      )}

      <div className='flex flex-col h-full overflow-auto'>
        {quizzes.filter(QUERY_FILTER).map(quiz => (
          <QuizTableItem key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  )
}
