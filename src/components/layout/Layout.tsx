import React from 'react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex justify-center font-lato'>
      <div className='max-w-[1440px]'>{children}</div>
    </div>
  )
}
