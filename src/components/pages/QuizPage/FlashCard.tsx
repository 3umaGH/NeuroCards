import clsx from 'clsx'
import { useState } from 'react'
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

export const FlashCard = () => {
  const [isFlipped, setFlipped] = useState(false)
  const cardClassname = CARD_STYLES[randomIntFromInterval(0, CARD_STYLES.length - 1)]
  const commonClassname =
    'border-4 outline outline-gray-500 p-4 text-center flex justify-center items-center rounded-md border-gray-400 drop-shadow-lg'

  const question = `What is the key difference between arrow functions and regular functions regarding 'this'?`
  const answer = `Arrow functions do not have their own 'this'; they inherit it from their surrounding lexical context. Regular functions have dynamic 'this', which can change depending on how they are called.`

  const handleCardFlip = () => {
    setFlipped(true)
  }

  return (
    <div
      className={clsx('card max-w-[1440px] w-screen flex-1 select-none', {
        flipped: isFlipped,
        'cursor-pointer': !isFlipped,
      })}
      onClick={handleCardFlip}>
      <div className='card-inner w-full'>
        <div className={clsx('card-front text-xl lg:text-2xl font-medium', commonClassname, cardClassname)}>
          {question}
        </div>
        <div className={clsx('card-back', commonClassname, cardClassname)}>
          <div className='w-full h-full bg-black opacity-50 absolute top-0 left-0 z-[1]' />

          <div className='absolute z-[2] p-4 flex flex-col h-full justify-evenly'>
            <div className='text-xl lg:text-2xl font-medium'>{question}</div>

            <div className='text-lg lg:text-xl font-medium'>{answer}</div>

            <div className={clsx('flex flex-col items-center opacity-0', { 'animate-fade-in-slow': isFlipped })}>
              <span>How close was your answer?</span>

              <div className='flex justify-between mt-6 flex-wrap max-w-[500px] w-full px-8'>
                <span className='answer-grading-button'>🌟</span>
                <span className='answer-grading-button'>😊</span>
                <span className='answer-grading-button'>😐</span>
                <span className='answer-grading-button'>😬</span>
                <span className='answer-grading-button'>💀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
