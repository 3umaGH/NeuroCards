import { useState } from 'react'
import { IconType } from 'react-icons'
import { CgClose } from 'react-icons/cg'
import { IoCreateOutline } from 'react-icons/io5'
import { LuLayoutList } from 'react-icons/lu'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'

type NavItem = {
  name: string
  path: string
  icon: IconType
}

const navItems: NavItem[] = [
  { name: 'Browse Quizzes', path: '/a', icon: LuLayoutList },
  { name: 'Create New Quiz', path: '/b', icon: IoCreateOutline },
]

export const Navbar = () => {
  const [isExpanded, setExpanded] = useState(false)

  return (
    <>
      <div
        className='fixed flex flex-col h-screen transition-all duration-500 max-w-fit min-w-0 bg-[rgba(245,245,245,0.975)] backdrop-blur-sm z-[100] overflow-y-auto overflow-x-hidden outline outline-gray-200 outline-[2px] drop-shadow-xl'
        style={{ maxWidth: isExpanded ? '100%' : '0px', marginLeft: isExpanded ? '' : '-2px' }}>
        <div className='self-end m-4 mb-0'>
          <CgClose className='w-5 h-5 cursor-pointer hover:scale-110' onClick={() => setExpanded(false)} />
        </div>

        <nav className='flex flex-col gap-3 p-4 pt-4 mr-4 overflow-hidden min-w-fit'>
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className='flex gap-1 items-center whitespace-nowrap font-medium transition-all cursor-pointer text-lg hover:text-[--primary]'>
              <item.icon />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <nav className='flex  items-center justify-between gap-x-8 w-screen px-4 border border-gray-200 bg-[rgba(255,255,255,1)] drop-shadow-xl rounded-b-xl overflow-hidden backdrop-blur-2xl '>
        <img
          src='https://placeholderlogo.com/img/placeholder-logo-6.png'
          className='w-[108px] h-[50px] md:w-[163px] md:h-[75px]'
        />

        <div className='hidden gap-4 md:flex'>
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className='p-2 flex gap-1 items-center font-medium transition-all cursor-pointer hover:text-[--primary]'>
              <item.icon />
              {item.name}
            </Link>
          ))}
        </div>

        <div className='block md:hidden'>
          <RxHamburgerMenu
            onClick={() => setExpanded(true)}
            className='w-5 h-5 transition-all cursor-pointer hover:text-[--primary] text-gray-600'
          />
        </div>
      </nav>
    </>
  )
}
