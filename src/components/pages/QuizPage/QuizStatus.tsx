import { Button } from '../../common/Button'
import { ProgressBar } from '../../common/ProgressBar'

type QuizStatus = {
  questionsLeft: number
  totalQuestions: number

  isFinished: boolean
  buttonEnabled: boolean
  onFlipClick: () => void
}

export const QuizStatus = ({ questionsLeft, totalQuestions, buttonEnabled, isFinished, onFlipClick }: QuizStatus) => {
  return (
    <div className='flex flex-col items-center w-full gap-4 mt-4 text-xl'>
      <div className='flex flex-col items-start w-full'>
        <ProgressBar className='w-full' value={totalQuestions - questionsLeft} maxValue={totalQuestions} />
        <span className='px-2 text-base font-bold'>
          {questionsLeft} / {totalQuestions}
        </span>
      </div>

      {!isFinished && (
        <Button onClick={onFlipClick} disabled={!buttonEnabled || isFinished}>
          {!buttonEnabled ? 'Please rate your answer' : 'Flip card'}
        </Button>
      )}
    </div>
  )
}
