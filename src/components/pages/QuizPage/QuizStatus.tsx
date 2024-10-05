import skipSvg from '../../../assets/skip.svg'

type QuizStatus = {
  questionsLeft: number
  totalQuestions: number

  onSkipClick: () => void
}

export const QuizStatus = ({ questionsLeft, totalQuestions, onSkipClick }: QuizStatus) => {
  return (
    <div className='rounded-md items-center border-[rgb(134,134,134)] drop-shadow-lg outline outline-gray-500 flex justify-between w-full p-4 text-xl font-bold bg-[#C6C6C6] border-4 max-w-[1440px]'>
      <span>
        Questions: {questionsLeft} / {totalQuestions}
      </span>
      <button onClick={onSkipClick}>
        <img src={skipSvg} className='w-8 h-8' />
      </button>
    </div>
  )
}
