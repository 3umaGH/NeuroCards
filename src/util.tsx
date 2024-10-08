import { AxiosError } from 'axios'

export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export const getErrorMessage = (err: unknown) => {
  if (err instanceof AxiosError) {
    if (
      typeof err !== 'string' &&
      err.response &&
      'data' in err.response &&
      typeof err.response.data === 'object' &&
      'message' in err.response.data
    ) {
      return `${err.response.data.name ? `${err.response.data.name} :` : ''} ${err.response.data.message}`
    } else {
      return err.message
    }
  }

  if (err instanceof Error) return err.message

  return 'Unknown Error'
}
