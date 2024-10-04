import React from 'react'

export const QuizLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className='flex flex-col justify-center items-center font-lato overflow-hidden h-screen w-screen'>{children}</div>
}
