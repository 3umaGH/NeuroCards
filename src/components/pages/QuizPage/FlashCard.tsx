import clsx from 'clsx'
import { useMemo } from 'react'
import { QuestionGrade } from '../../../constants/quiz'
import { randomIntFromInterval } from '../../../util'

const CARD_STYLES = [
  'bg-teal-600 text-white',
  'bg-lime-600 text-white',
  'bg-indigo-700 text-white',
  'bg-zinc-700 text-white',
  'bg-stone-700 text-white',
  'bg-rose-700 text-white',
  'bg-emerald-600 text-white',
  'bg-blue-700 text-white',
  'bg-orange-500 text-white',
  'bg-yellow-500 text-white',
  'bg-green-500 text-white',
  'bg-blue-700 text-white',
  'bg-blue-500 text-white',
]

type FlashCard = {
  question: string
  answer: string
  flipped: boolean
  onCardClick: () => void
  onGradeClick: (grade: QuestionGrade) => void
}

export const FlashCard = ({ question, answer, flipped, onGradeClick, onCardClick }: FlashCard) => {
  const cardClassname = useMemo(() => CARD_STYLES[randomIntFromInterval(0, CARD_STYLES.length - 1)], [])
  const commonClassname =
    'border-4 outline outline-gray-500 p-4 text-center flex justify-center items-center rounded-md border-gray-400 drop-shadow-lg'

  return (
    <div
      className={clsx('card max-w-[1440px] w-screen flex-1 select-none', {
        flipped: flipped,
        'cursor-pointer': !flipped,
      })}
      onClick={onCardClick}>
      <div className='w-full card-inner'>
        <div className={clsx('card-front text-xl lg:text-2xl font-medium', commonClassname, cardClassname)}>
          {question}
        </div>
        <div className={clsx('card-back', commonClassname, cardClassname)}>
          <div className='w-full h-full bg-black opacity-20 absolute top-0 left-0 z-[1]' />

          {flipped &&  <div className='absolute z-[2] p-4 flex flex-col h-full justify-evenly'>
            <div className='text-xl font-medium lg:text-2xl'>{question}</div>
           <div className='text-lg font-medium lg:text-xl'>{answer}</div>

            <div className={clsx('flex flex-col items-center opacity-0', { 'animate-fade-in-slow': flipped })}>
              <span>How close was your answer?</span>

              <div className='flex justify-between mt-6 flex-wrap max-w-[500px] w-full px-8'>
                <span className='answer-grading-button' onClick={() => onGradeClick(QuestionGrade.EXCELLENT)}>
                  🌟
                </span>
                <span className='answer-grading-button' onClick={() => onGradeClick(QuestionGrade.GOOD)}>
                  😊
                </span>
                <span className='answer-grading-button' onClick={() => onGradeClick(QuestionGrade.FAIR)}>
                  😐
                </span>
                <span className='answer-grading-button' onClick={() => onGradeClick(QuestionGrade.POOR)}>
                  😬
                </span>
                <span className='answer-grading-button' onClick={() => onGradeClick(QuestionGrade.VERY_POOR)}>
                  💀
                </span>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}
