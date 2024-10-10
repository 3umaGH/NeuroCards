import { QuestionGrade } from '@/constants/quiz'
import { CommonProps } from '@/types/common'
import clsx from 'clsx'

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

export const Grade = ({ grade, className }: GradeProps & CommonProps) => {
  return (
    <span
      className={clsx(
        'px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap text-center text-white',
        gradeClassname[grade],
        className
      )}>
      {gradeDescriptiors[grade]}
    </span>
  )
}
