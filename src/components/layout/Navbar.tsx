import { IoCreateOutline } from 'react-icons/io5'
import { LuLayoutList } from 'react-icons/lu'
import { RxHamburgerMenu } from 'react-icons/rx'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between gap-x-8 w-screen px-4 border border-gray-200 bg-[rgba(255,255,255,1)] drop-shadow-xl rounded-b-xl overflow-hidden backdrop-blur-2xl '>
      <img src='https://placeholderlogo.com/img/placeholder-logo-6.png' className='w-[150px]' />

      <div className='hidden gap-4 md:flex'>
        <div className='p-2 flex gap-1 items-center font-medium rounded-xl transition-all cursor-pointer hover:text-[--primary]'>
          <LuLayoutList />
          Browse Quizzes
        </div>

        <div className='p-2 flex gap-1 items-center font-medium rounded-xl transition-all cursor-pointer hover:text-[--primary]'>
          <IoCreateOutline />
          Create New Quiz
        </div>
      </div>

      <div className='block md:hidden'>
        <RxHamburgerMenu className='w-5 h-5 transition-all cursor-pointer hover:text-[--primary]' />
      </div>
    </div>
  )
}
