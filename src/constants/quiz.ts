export enum QuestionGrade {
  EXCELLENT = 5,
  GOOD = 4,
  FAIR = 3,
  POOR = 2,
  VERY_POOR = 1,
}

export const gradeEmojiMap: Record<QuestionGrade, string> = {
  [QuestionGrade.EXCELLENT]: '🌟',
  [QuestionGrade.GOOD]: '😊',
  [QuestionGrade.FAIR]: '😐',
  [QuestionGrade.POOR]: '😬',
  [QuestionGrade.VERY_POOR]: '💀',
}
