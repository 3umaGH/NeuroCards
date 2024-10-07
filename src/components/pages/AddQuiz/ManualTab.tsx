import { useState } from 'react'
import toast from 'react-hot-toast'
import { createAIQuiz } from '../../../api/api'
import { Button } from '../../common/Button'
import { AddQuestionModal } from './AddQuestionModal'

export const ManualTab = () => {
  const [isSubmitting, setSubmitting] = useState(false)
  const [questionModalVisible, setQuestionModalVisible] = useState(false)

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSubmitting(true)

    toast
      .promise(createAIQuiz(''), {
        loading: 'Submitting...',
        success: 'Success!',
        error: e => `Failed to generate cards: ${e.message}`,
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  const handleModalClose = () => {
    setQuestionModalVisible(false)
  }

  return (
    <>
      {questionModalVisible && <AddQuestionModal onClose={handleModalClose} />}

      <form onSubmit={handleFormSubmit} className={'flex-1 w-full h-full overflow-hidden bg-white outline-gray-300'}>
        <div className='flex flex-col flex-1 h-full gap-4 p-4 overflow-auto'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='topic' className='text-sm font-medium'>
              Quiz Name:
            </label>

            <input
              id='topic'
              placeholder='The Biology Quiz'
              className='w-full p-2 rounded-md bg-gray-50 outline outline-gray-200 focus:outline-blue-200'
            />
          </div>

          <div className='flex flex-col flex-1 h-full gap-4 p-4 overflow-auto min-h-[250px] outline rounded-xl outline-gray-200'>
            {new Array(415).fill(0).map(() => (
              <div className='flex items-center justify-between gap-2'>
                <span className='overflow-hidden font-bold text-md md:text-lg whitespace-nowrap text-ellipsis'>
                  What is chlorophyll and why is it important?
                </span>

                <div className='flex gap-2 w-[100px] md:w-[140px]'>
                  <Button type='button' className='p-1'>
                    Edit
                  </Button>
                  <Button type='button' className='p-1 py-1.5 bg-red-500 '>
                    X
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className='flex justify-between gap-4'>
            <Button disabled={isSubmitting} className='whitespace-nowrap max-w-[150px]'>
              Submit
            </Button>

            <Button type='button' className='bg-green-500 max-w-fit' onClick={() => setQuestionModalVisible(true)}>
              Add Question
            </Button>
          </div>
        </div>
      </form>
    </>
  )
}
