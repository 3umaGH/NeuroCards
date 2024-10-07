import clsx from 'clsx'
import React from 'react'
import { CommonProps } from '../../types/common'

type Button = { children: React.ReactNode; disabled?: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement> &
  CommonProps

export const Button = ({ className, children, disabled, ...props }: Button) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={clsx(
        'bg-[--primary] select-none disabled:opacity-50 text-xs md:text-base text-white rounded-xl font-bold p-4 uppercase transition-all w-full',
        { 'active:scale-95 hover:brightness-90': !disabled },
        className
      )}>
      {children}
    </button>
  )
}
