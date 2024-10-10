import { createManualQuiz } from '@/api/api'
import { Button } from '@/components/common/Button'
import { ConfigDTO } from '@/types/config'
import { FlashCardQuestionDraft, FlashCardQuizDraft } from '@/types/quiz'
import { getErrorMessage } from '@/util'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { EditQuestionModal } from './EditQuestionModal'

export const ManualTab = ({ config }: { config: ConfigDTO }) => {
  const [isSubmitting, setSubmitting] = useState(false)
  const [questionModalVisible, setQuestionModalVisible] = useState(false)
  const [draft, setDraft] = useState<FlashCardQuizDraft>({ quiz_topic: '', questions: [] })
  const [editingQuestionIndex, setEditingQuestionIndex] = useState<null | number>(null)
  const navigate = useNavigate()

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (draft.quiz_topic.length < config.MIN_QUIZ_TITLE_LENGTH) {
      toast.error(`Quiz name should be at least ${config.MIN_QUIZ_TITLE_LENGTH} characters long!`)
      return
    }

    if (draft.questions.length < config.MIN_QUESTIONS_IN_QUIZ) {
      toast.error(`Please create a quiz with at least ${config.MIN_QUESTIONS_IN_QUIZ} questions.`)
      return
    }

    if (!confirm(`Are you sure you want to submit this quiz?`)) {
      return
    }

    setSubmitting(true)

    toast
      .promise(createManualQuiz(draft), {
        loading: 'Submitting...',
        success: 'Success!',
        error: e => getErrorMessage(e),
      })
      .then(quiz => {
        navigate(`/quiz/created/${quiz.id}`)
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
    if (draft.questions.length >= config.MAX_QUESTIONS_IN_QUIZ) {
      toast.error(`Maximum of ${config.MAX_QUESTIONS_IN_QUIZ} questions is allowed.`)
      return
    }

    setQuestionModalVisible(true)
  }

  return (
    <>
      {questionModalVisible && (
        <EditQuestionModal
          config={config}
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
              maxLength={config.MAX_QUIZ_TITLE_LENGTH}
              id='topic'
              placeholder='The Biology Quiz'
              className='w-full p-2 rounded-md bg-gray-50 outline outline-gray-200 focus:outline-blue-200'
            />
          </div>

          <div className='flex flex-col flex-1 h-full gap-4 p-4 overflow-auto min-h-[200px] outline rounded-xl outline-gray-200'>
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

          <span className='text-xs text-gray-500 md:text-sm'>
            Note: Manually created quizzes won't be listed in 'Browse Quizzes' section.
          </span>

          <div className='flex justify-between gap-4'>
            <Button disabled={isSubmitting} className='whitespace-nowrap max-w-[150px]'>
              Submit
            </Button>

            <Button type='button' className='bg-green-500 max-w-[150px]' onClick={handleAddQuestion}>
              Add Question
            </Button>
          </div>
        </div>
      </form>
    </>
  )
}
