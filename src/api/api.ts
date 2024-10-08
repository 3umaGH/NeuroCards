import { mockQuiz, mockQuizListItems } from '../constants/quiz'
import { FlashCardQuizDraft } from '../types/quiz'

// Used for mocking
const delayedPromise = <T>(result: T): Promise<T> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(result)
    }, Math.max(500, Math.random() * 3000))
  })
}

export const getRecentQuizzes = () => {
  return delayedPromise(mockQuizListItems)
}

export const getQuiz = (id: number) => {
  return delayedPromise(mockQuiz)
}

export const createAIQuiz = (text: string) => {
  return delayedPromise(null)
}

export const createManualQuiz = (draft: FlashCardQuizDraft) => {
  return delayedPromise(null)
}
