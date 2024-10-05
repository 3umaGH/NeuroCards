import { useEffect, useState } from 'react'
import { QuestionGrade } from '../../../constants/quiz'
import { FlashCardQuestion } from '../../../types/quiz'
import { QuizLayout } from '../../layout/QuizLayout'
import { FlashCard } from './FlashCard'
import { QuizStatus } from './QuizStatus'

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
      {!isQuizFinished && (
        <FlashCard
          question={questions[0]}
          flipped={isFlipped}
          onCardClick={() => setFlipped(true)}
          onGradeClick={handleGradeQuestion}
        />
      )}
      <QuizStatus
        totalQuestions={initialQuestions.length}
        questionsLeft={questions.length}
        onSkipClick={() => handleGradeQuestion(QuestionGrade.SKIPPED)}
      />
    </QuizLayout>
  )
}
