import { useState } from 'react'
import ReactDOM from 'react-dom'
import toast from 'react-hot-toast'
import { CgClose } from 'react-icons/cg'
import { ConfigDTO } from '../../../../../types/config'
import { FlashCardQuestionDraft } from '../../../../../types/quiz'
import { Button } from '../../../../common/Button'

type EditQuestionModal = {
  config: ConfigDTO
  editing: FlashCardQuestionDraft | null
  onClose: () => void
  onSubmit: (question: FlashCardQuestionDraft) => void
}

export const EditQuestionModal = ({ config, editing, onClose, onSubmit }: EditQuestionModal) => {
  const [formData, setFormData] = useState<FlashCardQuestionDraft>(
    editing !== null ? editing : { question: '', answer: '' }
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(p => ({ ...p, [e.target.id]: e.target.value }))
  }

  const handleSubmit = () => {
    if (formData.question.length < config.MIN_QUESTION_LENGTH) {
      toast.error(`Question should be at least ${config.MIN_QUESTION_LENGTH} characters long!`)
      return
    }

    if (formData.answer.length < config.MIN_ANSWER_LENGTH) {
      toast.error(`Answer should be at least ${config.MIN_ANSWER_LENGTH} characters long!`)
      return
    }

    onSubmit(formData)
  }

  return ReactDOM.createPortal(
    <div className='fixed top-0 left-0 w-screen h-screen z-[100] animate-fade-in'>
      <div className='w-screen h-screen bg-black opacity-20 z-[1]' onClick={onClose} />

      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[750px] w-full z-[100] flex flex-col gap-4 p-4 outline outline-gray-200 rounded-xl bg-white'>
        <div className='absolute text-gray-500 right-2 top-2'>
          <CgClose onClick={onClose} className='w-5 h-5 cursor-pointer hover:scale-110 active:scale-100' />
        </div>

        <div className='flex flex-col gap-2 mt-4 justify-self-end'>
          <label htmlFor='question' className='text-sm font-medium'>
            Question:
          </label>

          <input
            value={formData.question}
            onChange={handleChange}
            maxLength={config.MAX_QUESTION_LENGTH}
            id='question'
            placeholder='What is chlorophyll and why is it important?'
            className='w-full p-2 rounded-md bg-gray-50 outline outline-gray-200 focus:outline-blue-200'
          />
        </div>
        <div className='flex flex-col gap-2 justify-self-end'>
          <label htmlFor='answer' className='text-sm font-medium'>
            Answer:
          </label>

          <input
            value={formData.answer}
            onChange={handleChange}
            maxLength={config.MAX_ANSWER_LENGTH}
            id='answer'
            placeholder='Chlorophyll is a...'
            className='w-full p-2 rounded-md bg-gray-50 outline outline-gray-200 focus:outline-blue-200'
          />
        </div>

        <Button onClick={handleSubmit} type='button' className='self-end bg-green-500 whitespace-nowrap w-min'>
          {editing !== null ? 'Edit' : 'Add'} Question
        </Button>
      </div>
    </div>,

    document.body
  )
}
