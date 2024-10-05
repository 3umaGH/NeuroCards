import React from 'react'

export const QuizLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-[#EEEEF5] flex items-center justify-center w-screen h-screen p-2 md:p-4 px-8 overflow-hidden font-karla relative'>
      <div className='w-[130%] xl:w-[120%] bg-[--primary] h-[750px] rounded-full fixed top-[-530px] md:top-[-550px] shadow-innerDecoration right-[-30px] md:right-[10%] box-sh z-[0] ' />
      <div className='flex flex-col items-center justify-center w-full h-full gap-4 max-w-[700px] z-[1]'>
        {children}
      </div>
    </div>
  )
}
