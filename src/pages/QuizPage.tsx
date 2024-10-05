import { Quiz } from '../components/pages/QuizPage/Quiz'
import { mockQuestions } from '../constants/quiz'

export const QuizPage = () => {
  return <Quiz topic='Test Topic' initialQuestions={mockQuestions} />
}
