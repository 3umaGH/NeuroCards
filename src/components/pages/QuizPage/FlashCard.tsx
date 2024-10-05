import clsx from 'clsx'
import { memo, useEffect, useState } from 'react'
import { gradeEmojiMap, QuestionGrade } from '../../../constants/quiz'
import { FlashCardQuestion } from '../../../types/quiz'

type FlashCard = {
  question: FlashCardQuestion
  flipped: boolean
  onCardClick?: () => void
  onGradeClick: (grade: QuestionGrade) => void
}

export const FlashCard = memo(({ question, flipped, onGradeClick, onCardClick }: FlashCard) => {
  const commonClassname =
    'outline outline-gray-200 bg-white p-4 text-center overflow-auto flex justify-center items-center rounded-3xl border-gray-400 drop-shadow-lg'

  const [gradingAnimationFinished, setGradingAnimationFinished] = useState(false)

  useEffect(() => {
    setGradingAnimationFinished(false)
  }, [question.id])

  return (
    <div
      className={clsx('card w-full flex-1 select-none text-[#2c2b35]', {
        flipped: flipped,
      })}
      onClick={onCardClick}>
      <div className='w-full card-inner'>
        <div className={clsx('card-front text-xl lg:text-2xl font-bold', commonClassname)}>{question.question}</div>
        <div className={clsx('card-back', commonClassname)}>
          <div className='w-full h-full bg-black opacity-[0.005] absolute top-0 left-0 z-[1]' />

          {flipped && (
            <div className='absolute z-[2] p-4 flex flex-col h-full justify-evenly gap-4'>
              <div className='text-xl font-medium text-gray-500 lg:text-base line-clamp-2'>{question.question}</div>
              <div className='text-lg font-medium lg:text-xl'>{question.answer}</div>

              <div
                className={clsx('flex flex-col items-center opacity-0', {
                  'animate-fade-in-slow': flipped,
                  'pointer-events-none': !gradingAnimationFinished,
                })}
                onAnimationEnd={() => setGradingAnimationFinished(true)}>
                <span>How close was your answer?</span>

                <div className='flex justify-between mt-6 flex-wrap max-w-[500px] w-full px-8'>
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
