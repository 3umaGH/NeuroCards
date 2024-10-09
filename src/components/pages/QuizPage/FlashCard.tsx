import clsx from 'clsx'
import { memo, useEffect, useState } from 'react'
import { gradeEmojiMap, QuestionGrade } from '../../../constants/quiz'
import { FlashCardQuestion } from '../../../types/quiz'
import logo from '../../../assets/NeuroCard.svg'

type FlashCard = {
  question: FlashCardQuestion
  flipped: boolean
  onCardClick?: () => void
  onGradeClick: (grade: QuestionGrade) => void
}

const formatText = (text: string) => {
  const boldBrackets = ['b[', ']b']
  const splitWords = text.split(' ')

  let isBold = false
  const components: React.ReactNode[] = []

  splitWords.forEach((word, index) => {
    const cleanedWord = word.replaceAll(boldBrackets[0], '').replaceAll(boldBrackets[1], '')
    const key = `${word}_${index}`

    if (word.startsWith(boldBrackets[0])) {
      isBold = true
    }

    if (isBold) {
      components.push(
        <span key={key} className='italic font-bold'>
          {cleanedWord}
        </span>
      )
    } else {
      components.push(<span key={key}>{cleanedWord}</span>)
    }

    if (word.includes(boldBrackets[1])) {
      isBold = false
    }
  })

  return components
}

export const FlashCard = memo(({ question, flipped, onGradeClick, onCardClick }: FlashCard) => {
  const commonClassname =
    'outline outline-gray-200 bg-white p-4 text-center overflow-auto flex justify-center items-center rounded-3xl border-gray-400 drop-shadow-lg'
  const [gradingAnimationFinished, setGradingAnimationFinished] = useState(false)
  const formattedAnswer = formatText(question.answer)

  useEffect(() => {
    setGradingAnimationFinished(false)
  }, [question.id])

  return (
    <div
      className={clsx('card animate-fade-in relative w-full flex-1 select-none text-[#2c2b35]', {
        flipped: flipped,
      })}
      onClick={onCardClick}>
      <div className='w-full card-inner'>
        <div className={clsx('card-front text-xl lg:text-2xl font-bold relative', commonClassname)}>
          <div className='absolute bottom-[0%] left-[50%] z-[1] translate-x-[-50%] opacity-5 w-[100%] overflow-hidden brightness-0'>
            <img src={logo} alt='Logo' className='w-full h-full rotate-180' />
          </div>

          <div className='absolute top-[0%] left-[50%] z-[1] translate-x-[-50%] opacity-5 w-[100%] overflow-hidden brightness-0'>
            <img src={logo} alt='Logo' className='w-full h-full' />
          </div>

          <div className='z-[2]'> {question.question}</div>
        </div>
        <div className={clsx('card-back', commonClassname)}>
          <div className='w-full h-full bg-black opacity-[0.005] absolute top-0 left-0 z-[1]' />

          {flipped && (
            <div className='absolute z-[2] p-4 flex flex-col h-full justify-evenly gap-4'>
              <div className='text-base font-medium text-gray-500 lg:text-xl line-clamp-2'>{question.question}</div>
              <div className='flex flex-wrap justify-center gap-1 text-lg lg:text-xl'>{formattedAnswer}</div>

              <div
                className={clsx('flex flex-col items-center opacity-0', {
                  'animate-fade-in-slow': flipped,
                  'pointer-events-none': !gradingAnimationFinished,
                })}
                onAnimationEnd={() => setGradingAnimationFinished(true)}>
                <span className='md:text-lg'>Rate your answer to continue</span>

                <div className='flex justify-between mt-6 flex-wrap max-w-[300px] sm:max-w-[500px] w-full px-4'>
                  <span className='answer-grading-button' onClick={() => onGradeClick(QuestionGrade.EXCELLENT)}>
                    {gradeEmojiMap[QuestionGrade.EXCELLENT]}
                  </span>
                  <span className='answer-grading-button' onClick={() => onGradeClick(QuestionGrade.GOOD)}>
                    {gradeEmojiMap[QuestionGrade.GOOD]}
                  </span>
                  <span className='answer-grading-button' onClick={() => onGradeClick(QuestionGrade.FAIR)}>
                    {gradeEmojiMap[QuestionGrade.FAIR]}
                  </span>
                  <span className='answer-grading-button' onClick={() => onGradeClick(QuestionGrade.POOR)}>
                    {gradeEmojiMap[QuestionGrade.POOR]}
                  </span>
                  <span className='answer-grading-button' onClick={() => onGradeClick(QuestionGrade.VERY_POOR)}>
                    {gradeEmojiMap[QuestionGrade.VERY_POOR]}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
})
