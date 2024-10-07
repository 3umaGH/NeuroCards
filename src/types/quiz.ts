import { QuestionGrade } from '../constants/quiz'

export type FlashCardQuestion = {
  id: number
  question: string
  answer: string
}

export type FlashCardGrades = Record<number, QuestionGrade[]> // id, grades

/*{
  grade: QuestionGrade
  answered_at: number 
} */

export type FlashCardQuiz = {
  id: number
  quiz_topic: string
  questions: FlashCardQuestion[]
}

export type QuizTableItem = {
  id: number
  quiz_topic: string
  questions_amount: number
}
