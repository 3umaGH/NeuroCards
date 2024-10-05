import { useEffect, useState } from 'react'
import { QuestionGrade } from '../../../constants/quiz'
import { FlashCardQuestion } from '../../../types/quiz'
import { QuizLayout } from '../../layout/QuizLayout'
import { FlashCard } from './FlashCard'
import { QuizStatus } from './QuizStatus'
import { QuizResult } from './QuizResult'

type Quiz = {
  initialQuestions: FlashCardQuestion[]
}

export const Quiz = ({ initialQuestions }: Quiz) => {
  const [questions, setQuestions] = useState<FlashCardQuestion[]>([...initialQuestions]) // Unanswered questions;
  const [isFlipped, setFlipped] = useState(false)
  const isQuizFinished = questions.length === 0

  if (isQuizFinished) {
    // todo show result
  }

  const handleGradeQuestion = (grade: QuestionGrade) => {
    setQuestions(prev => prev.slice(1))
  }

  useEffect(() => {
    setFlipped(false)
  }, [questions])

  return (
    <QuizLayout>
      <h3 className='w-full my-4 text-2xl font-bold text-left text-white'>Learning the whatever</h3>
      {!isQuizFinished ? (
        <FlashCard question={questions[0]} flipped={isFlipped} onGradeClick={handleGradeQuestion} />
      ) : (
        <QuizResult />
      )}
      <QuizStatus
        totalQuestions={initialQuestions.length}
        questionsLeft={questions.length}
        buttonEnabled={!isFlipped}
        isFinished={isQuizFinished}
        onFlipClick={() => setFlipped(true)}
      />
    </QuizLayout>
  )
}
