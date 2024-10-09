import React from 'react'
import { Navbar } from './Navbar'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col items-center font-karla h-[100svh] overflow-auto'>
      <div className='z-[100]'>
        <Navbar />
      </div>
      <div className='w-[130%] xl:w-[120%] bg-[--primary] h-[750px] rounded-full fixed top-[-580px] md:top-[-550px] shadow-innerDecoration right-[-30px] md:right-[10%] z-[0] ' />
      <div className=' mt-[52px] md:mt-[78px] max-w-[1440px] z-[1] md:h-[calc(100svh-78px)] h-[calc(100svh-52px)] p-4 md:p-8 w-full flex justify-center'>
        {children}
      </div>
    </div>
  )
}
