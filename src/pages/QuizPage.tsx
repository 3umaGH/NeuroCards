import { Quiz } from '../components/pages/QuizPage/Quiz'
import { mockQuestions } from '../constants/quiz'

export const QuizPage = () => {
  return <Quiz initialQuestions={mockQuestions} />
}
