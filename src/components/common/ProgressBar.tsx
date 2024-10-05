import clsx from 'clsx'
import { CommonProps } from '../../types/common'

type ProgressBar = {
  value: number
  maxValue: number
} & CommonProps

export const ProgressBar = ({ value, maxValue, className }: ProgressBar) => {
  const filledPercent = maxValue === 0 ? 0 : (value / maxValue) * 100

  return (
    <div className={clsx('relative w-full overflow-hidden h-[30px] bg-gray-300 rounded-xl', className)}>
      <div className='absolute top-0 left-0 bg-[--primary] h-full' style={{ minWidth: `${filledPercent}%` }}></div>
    </div>
  )
}
