import axios from 'axios'
import { FlashCardQuiz, FlashCardQuizDraft, QuizTableItem } from '../types/quiz'

const BASE_URL = 'http://localhost:3000/v1/quiz'

export const getRecentQuizzes = async (): Promise<QuizTableItem[]> => {
  return (await axios.get(`${BASE_URL}`)).data
}

export const getQuiz = async (id: number): Promise<FlashCardQuiz> => {
  return (await axios.get(`${BASE_URL}/${id}`)).data
}

export const createAIQuiz = async (text: string) => {
  return (await axios.post(`${BASE_URL}`, { text })).data
}

export const createManualQuiz = async (draft: FlashCardQuizDraft) => {
  return (await axios.post(`${BASE_URL}`, { draft })).data
}
