import { QuizLayout } from '../components/layout/QuizLayout'
import { Quiz } from '../components/pages/QuizPage/Quiz'
import { mockQuiz } from '../constants/quiz'

export const QuizPage = () => {
  return (
    <QuizLayout>
      <Quiz topic={mockQuiz.quiz_topic} initialQuestions={mockQuiz.questions} />
    </QuizLayout>
  )
}
