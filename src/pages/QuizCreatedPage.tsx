import { Button } from '@/components/common/Button'
import toast from 'react-hot-toast'
import { FaRegCopy } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'

export const QuizCreatedPage = () => {
  const { id } = useParams()
  const quizURL = `${window.location.origin}/quiz/${id}`

  const handleCopyURL = () => {
    navigator.clipboard
      .writeText(quizURL)
      .then(() => {
        toast.success('Quiz URL Copied.')
      })
      .catch(() => {
        toast.error('Could not copy Quiz URL.')
      })
  }

  return (
    <div className='flex flex-col flex-1 w-full h-full gap-4 md:gap-8 max-w-[1000px] items-center'>
      <h3 className='w-full text-xl font-bold text-white md:text-4xl'>Quiz Created</h3>

      <div className='flex flex-col w-full gap-4 p-4 overflow-hidden bg-white rounded-3xl drop-shadow-xl outline outline-gray-300'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='quiz_url' className='text-sm font-medium'>
            Quiz URL:
          </label>

          <div className='flex gap-4 '>
            <input
              readOnly
              id='quiz_url'
              value={quizURL}
              className='w-full p-2 rounded-md bg-gray-50 outline outline-gray-200 focus:outline-blue-200'
            />

            <Button onClick={handleCopyURL} className='flex justify-center max-w-fit'>
              <FaRegCopy />
            </Button>
          </div>
        </div>
        <span className='text-xs text-gray-500 md:text-sm'>
          You can share this link with your friends to share this quiz.
        </span>
        <Link to={quizURL}>
          <Button className='bg-green-500'>Take Quiz</Button>
        </Link>
      </div>
    </div>
  )
}
