import arrowSvg from '@/assets/arrow.svg'
import { CommonProps } from '@/types/common'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

type BackArrow = CommonProps

export const BackArrow = ({ className }: BackArrow) => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <img
      src={arrowSvg}
      onClick={handleBackClick}
      alt='Back'
      aria-label='Back'
      className={clsx(
        'w-8 h-8 md:w-12 md:h-12 invert opacity-50 hover:opacity-80 cursor-pointer transition-all',
        className
      )}
    />
  )
}
