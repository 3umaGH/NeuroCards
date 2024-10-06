import clsx from 'clsx'
import arrowSvg from '../../assets/arrow.svg'
import { CommonProps } from '../../types/common'

type BackArrow = {
  onClick: () => void
} & CommonProps

export const BackArrow = ({ onClick, className }: BackArrow) => {
  return (
    <img
      src={arrowSvg}
      onClick={onClick}
      className={clsx(
        'w-8 h-8 md:w-12 md:h-12 invert opacity-50 hover:opacity-80 cursor-pointer transition-all',
        className
      )}
    />
  )
}
