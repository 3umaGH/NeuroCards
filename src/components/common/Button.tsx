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
        'bg-[--primary] disabled:opacity-50 text-white rounded-xl text-base font-bold p-4 uppercase hover:brightness-90 transition-all w-full',
        { 'active:scale-95': !disabled },
        className
      )}>
      {children}
    </button>
  )
}
