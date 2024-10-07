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

      <form onSubmit={handleFormSubmit} className='flex flex-col h-full gap-4 p-4 animate-fade-in'>
        <div className='flex flex-col flex-1 h-full gap-4'>
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

          <div className='flex flex-col flex-1 h-full gap-4 p-4 overflow-auto outline rounded-xl outline-gray-200'>
            {new Array(105).fill(0).map(() => (
              <div className='flex items-center justify-between gap-2'>
                <span className='overflow-hidden font-bold text-md md:text-lg whitespace-nowrap text-ellipsis'>
                  What is chlorophyll and why is it important?
                </span>

                <div className='flex gap-2'>
                  <Button type='button' className='w-[60px] md:w-[75px] p-1.5'>
                    Edit
                  </Button>
                  <Button type='button' className='w-[40px] p-1.5 bg-red-500'>
                    X
                  </Button>
                </div>
              </div>
            ))}

            <div className='flex items-end flex-1 h-full'>
              <Button className='bg-green-500'>Add Question</Button>
            </div>
          </div>
        </div>

        <Button disabled={isSubmitting} className='self-end w-min whitespace-nowrap'>
          Submit
        </Button>
      </form>
    </>
  )
}
