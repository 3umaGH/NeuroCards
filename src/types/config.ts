export type Config = {
  OPEN_AI_KEY: string
  MAX_AI_INPUT: number
  MIN_AI_INPUT: number

  MIN_QUIZ_TITLE_LENGTH: number
  MAX_QUIZ_TITLE_LENGTH: number

  MIN_QUESTIONS_IN_QUIZ: number
  MAX_QUESTIONS_IN_QUIZ: number

  MIN_QUESTION_LENGTH: number
  MAX_QUESTION_LENGTH: number

  MIN_ANSWER_LENGTH: number
  MAX_ANSWER_LENGTH: number
}

export type ConfigDTO = Omit<Config, 'OPEN_AI_KEY'>
