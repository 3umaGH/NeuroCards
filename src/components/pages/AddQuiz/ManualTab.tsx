import { useState } from 'react'
import toast from 'react-hot-toast'
import { createManualQuiz } from '../../../api/api'
import { FlashCardQuestionDraft, FlashCardQuizDraft } from '../../../types/quiz'
import { Button } from '../../common/Button'
import { EditQuestionModal } from './EditQuestionModal'

export const ManualTab = () => {
  const [isSubmitting, setSubmitting] = useState(false)
  const [questionModalVisible, setQuestionModalVisible] = useState(false)
  const [draft, setDraft] = useState<FlashCardQuizDraft>({ quiz_topic: '', questions: [] })
  const [editingQuestionIndex, setEditingQuestionIndex] = useState<null | number>(null)

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (draft.quiz_topic.length < 3) {
      toast.error('Quiz name should be at least 3 characters long!')
      return
    }

    if (draft.questions.length < 2) {
      toast.error('Please create a quiz with at least 2 questions.')
      return
    }

    setSubmitting(true)

    toast
      .promise(createManualQuiz(draft), {
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

  const handleStartEditQuestion = (index: number) => {
    setEditingQuestionIndex(index)
    setQuestionModalVisible(true)
  }

  const handleDeleteQuestion = (index: number) => {
    if (!confirm(`Are you sure you want to delete ${draft.questions[index].question}?`)) {
      return
    }

    setDraft(p => {
      return { ...p, questions: p.questions.filter((_, i) => i !== index) }
    })
  }

  const handleCreateUpdateQuestion = (question: FlashCardQuestionDraft) => {
    if (editingQuestionIndex !== null) {
      // Update
      setDraft(p => ({
        ...p,
        questions: p.questions.map((item, index) => (index === editingQuestionIndex ? question : item)),
      }))

      setEditingQuestionIndex(null)
    } else {
      // Create
      setDraft(p => ({ ...p, questions: [...p.questions, question] }))
    }

    setQuestionModalVisible(false)
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDraft(p => ({ ...p, quiz_topic: e.target.value }))
  }

  const handleAddQuestion = () => {
    if (draft.questions.length >= 3) {
      toast.error('Maximum of 30 questions is allowed.')
      return
    }

    setQuestionModalVisible(true)
  }

  return (
    <>
      {questionModalVisible && (
        <EditQuestionModal
          onClose={handleModalClose}
          onSubmit={handleCreateUpdateQuestion}
          editing={editingQuestionIndex !== null ? draft.questions[editingQuestionIndex] : null}
        />
      )}

      <form onSubmit={handleFormSubmit} className={'flex-1 w-full h-full overflow-hidden bg-white outline-gray-300'}>
        <div className='flex flex-col flex-1 h-full gap-4 p-4 overflow-auto'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='topic' className='text-sm font-medium'>
              Quiz Name:
            </label>

            <input
              value={draft.quiz_topic}
              onChange={handleNameChange}
              maxLength={50}
              id='topic'
              placeholder='The Biology Quiz'
              className='w-full p-2 rounded-md bg-gray-50 outline outline-gray-200 focus:outline-blue-200'
            />
          </div>

          <div className='flex flex-col flex-1 h-full gap-4 p-4 overflow-auto min-h-[250px] outline rounded-xl outline-gray-200'>
            {draft.questions.map((question, index) => (
              <div key={index} className='flex items-center justify-between gap-2'>
                <span className='overflow-hidden font-bold text-md md:text-lg whitespace-nowrap text-ellipsis'>
                  {question.question}
                </span>

                <div className='flex gap-2 w-[100px] md:w-[140px]'>
                  <Button onClick={() => handleStartEditQuestion(index)} type='button' className='p-1'>
                    Edit
                  </Button>
                  <Button onClick={() => handleDeleteQuestion(index)} type='button' className='p-1 py-1.5 bg-red-500 '>
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

            <Button type='button' className='bg-green-500 max-w-fit' onClick={handleAddQuestion}>
              Add Question
            </Button>
          </div>
        </div>
      </form>
    </>
  )
}
