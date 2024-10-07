import clsx from 'clsx'
import { CommonProps } from '../../types/common'

type Loading = CommonProps

export const Loading = ({ className }: Loading) => {
  return <div className={clsx('w-16 h-16 loader', className)} />
}
