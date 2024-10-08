import { useQuery } from '@tanstack/react-query'
import { getRecentQuizzes } from '../api/api'
import { QuizTable } from '../components/pages/BrowseQuiz/QuizTable/QuizTable'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import { getErrorMessage } from '../util'

export const BrowseQuiz = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['recent_quizzes'],
    queryFn: getRecentQuizzes,
  })

  useEffect(() => {
    if (error) toast.error(getErrorMessage(error))
  }, [error])

  return (
    <div className='flex flex-col flex-1 w-full h-full gap-4 md:gap-8 max-w-[1000px] items-center'>
      <h3 className='w-full text-xl font-bold text-white md:text-4xl'>Explore Available Quizzes</h3>

      <QuizTable quizzes={data ?? []} loading={isPending} />
    </div>
  )
}
