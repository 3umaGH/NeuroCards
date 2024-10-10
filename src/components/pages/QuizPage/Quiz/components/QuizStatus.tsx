import { Button } from '../../../../common/Button'
import { ProgressBar } from '../../../../common/ProgressBar'

type QuizStatus = {
  questionsLeft: number
  totalQuestions: number

  isEndlessMode: boolean
  isFinished: boolean
  buttonEnabled: boolean
  onFlipClick: () => void
  onStopEndlessModeClick: () => void
}

export const QuizStatus = ({
  questionsLeft,
  totalQuestions,
  buttonEnabled,
  isEndlessMode,
  isFinished,
  onFlipClick,
  onStopEndlessModeClick,
}: QuizStatus) => {
  return (
    <div className='flex flex-col items-center w-full gap-4 mt-4 text-xl'>
      <div className='flex flex-col items-start w-full'>
        {isEndlessMode ? (
          !isFinished && <h4 className='w-full text-xl font-bold text-center md:text-3xl'>ENDLESS MODE</h4>
        ) : (
          <>
            <ProgressBar className='w-full' value={totalQuestions - questionsLeft} maxValue={totalQuestions} />
            <span className='px-2 text-base font-bold'>
              {totalQuestions - questionsLeft} / {totalQuestions}
            </span>
          </>
        )}
      </div>

      {!isFinished && (
        <div className='flex w-full gap-4'>
          <Button onClick={onFlipClick} disabled={!buttonEnabled || isFinished}>
            {!buttonEnabled ? 'Please rate your answer' : 'Flip card'}
          </Button>

          {isEndlessMode && (
            <Button className='bg-red-500' onClick={onStopEndlessModeClick}>
              Stop
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
