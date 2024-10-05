import { QuestionGrade } from '../constants/quiz'

export type FlashCardQuestion = {
  id: number
  question: string
  answer: string
}

export type FlashCardAnsweredQuestion = {
  grade: QuestionGrade
  answered_at: number // Used as a key to prevent key collisions during endless mode.
} & FlashCardQuestion

export type FlashCardQuiz = {
  quiz_topic: string
  questions: FlashCardQuestion[]
}
