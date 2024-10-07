import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import arrowSvg from '../../assets/arrow.svg'
import { CommonProps } from '../../types/common'

type BackArrow = CommonProps

export const BackArrow = ({ className }: BackArrow) => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    const referrer = document.referrer

    // Do not navigate back to the external source if user arrived to the page from it. (navigate to homepage instead)
    if (referrer && referrer.includes(window.location.origin)) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  return (
    <img
      src={arrowSvg}
      onClick={handleBackClick}
      className={clsx(
        'w-8 h-8 md:w-12 md:h-12 invert opacity-50 hover:opacity-80 cursor-pointer transition-all',
        className
      )}
    />
  )
}
