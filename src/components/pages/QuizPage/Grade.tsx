import clsx from 'clsx'
import { QuestionGrade } from '../../../constants/quiz'

type GradeProps = {
  grade: QuestionGrade
}

const gradeClassname: Record<QuestionGrade, string> = {
  [QuestionGrade.EXCELLENT]: 'bg-[--primary]',
  [QuestionGrade.GOOD]: 'bg-green-500',
  [QuestionGrade.FAIR]: 'bg-amber-500',
  [QuestionGrade.POOR]: 'bg-red-500',
  [QuestionGrade.VERY_POOR]: 'bg-stone-800 px-3',
}

const gradeDescriptiors: Record<QuestionGrade, string> = {
  [QuestionGrade.EXCELLENT]: 'Excellent',
  [QuestionGrade.GOOD]: 'Good',
  [QuestionGrade.FAIR]: 'Fair',
  [QuestionGrade.POOR]: 'Poor',
  [QuestionGrade.VERY_POOR]: 'Very Poor',
}

export const Grade = ({ grade }: GradeProps) => {
  return (
    <span className={clsx('px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap text-white', gradeClassname[grade])}>
      {gradeDescriptiors[grade]}
    </span>
  )
}
