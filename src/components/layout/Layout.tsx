import React from 'react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex justify-center font-karla'>
      <div className='w-[130%] xl:w-[120%] bg-[--primary] h-[750px] rounded-full fixed top-[-530px] md:top-[-550px] shadow-innerDecoration right-[-30px] md:right-[10%] z-[0] ' />
      <div className='max-w-[1440px] z-[1] flex-1 h-[100svh] p-4 md:p-8 w-full flex justify-center overflow-auto'>{children}</div>
    </div>
  )
}
