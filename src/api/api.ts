import axios from 'axios'
import { FlashCardQuiz, FlashCardQuizDraft, QuizTableItem } from '../types/quiz'
import { ConfigDTO } from '../types/config'

const BASE_URL = import.meta.env.VITE_APP_API_URL

export const getConfig = async (): Promise<ConfigDTO> => {
  return (await axios.get(`${BASE_URL}/config`)).data
}

export const getRecentQuizzes = async (): Promise<QuizTableItem[]> => {
  return (await axios.get(`${BASE_URL}/quiz`)).data
}

export const getQuiz = async (id: number): Promise<FlashCardQuiz> => {
  return (await axios.get(`${BASE_URL}/quiz/${id}`)).data
}

export const createAIQuiz = async (text: string, showInList: boolean) => {
  return (await axios.post(`${BASE_URL}/quiz`, { text, showInList: showInList })).data
}

export const createManualQuiz = async (draft: FlashCardQuizDraft) => {
  return (await axios.post(`${BASE_URL}/quiz`, { draft })).data
}
