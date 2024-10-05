import { Quiz } from '../components/pages/QuizPage/Quiz'
import { mockQuiz } from '../constants/quiz'

export const QuizPage = () => {
  return <Quiz topic={mockQuiz.quiz_topic} initialQuestions={mockQuiz.questions} />
}
