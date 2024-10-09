import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { IconType } from 'react-icons'
import { CgClose } from 'react-icons/cg'
import { IoCreateOutline } from 'react-icons/io5'
import { LuLayoutList } from 'react-icons/lu'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link, useLocation } from 'react-router-dom'

type NavItem = {
  name: string
  path: string
  icon: IconType
}

const navItems: NavItem[] = [
  { name: 'Browse Quizzes', path: '/browse', icon: LuLayoutList },
  { name: 'Create New Quiz', path: '/quiz/new', icon: IoCreateOutline },
]

export const Navbar = () => {
  const location = useLocation()
  const [isExpanded, setExpanded] = useState(false)

  const handleSidebarToggle = () => {
    setExpanded(p => !p)
  }

  useEffect(() => {
    setExpanded(false)
  }, [location.pathname])

  return (
    <>
      <div
        className='fixed left-0 flex flex-col h-screen transition-all duration-500 max-w-fit min-w-0 bg-[rgba(255,255,255,0.975)] backdrop-blur-sm z-[100] overflow-y-auto overflow-x-hidden outline outline-gray-200 outline-[1px] drop-shadow-2xl'
        style={{ maxWidth: isExpanded ? '100%' : '0px', marginLeft: isExpanded ? '' : '-2px' }}>
        <div className='self-end m-4 mb-0'>
          <CgClose className='w-5 h-5 cursor-pointer hover:scale-110' onClick={handleSidebarToggle} />
        </div>

        <nav className='flex flex-col gap-3 p-4 pt-4 mr-4 overflow-hidden min-w-fit'>
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={clsx(
                'flex gap-1 items-center whitespace-nowrap font-medium transition-all cursor-pointer text-lg hover:text-[--primary]',
                { 'text-[--primary]': location.pathname === item.path }
              )}>
              <item.icon />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <nav className='flex fixed top-0 left-0 items-center justify-between gap-x-8 w-screen px-4 border border-gray-200 bg-[rgba(255,255,255,1)] drop-shadow-xl rounded-b-xl overflow-hidden backdrop-blur-2xl '>
        <Link to='/'>
          <img
            src='https://placeholderlogo.com/img/placeholder-logo-6.png'
            alt='Logo'
            aria-label='Homepage'
            className='w-[108px] h-[50px] md:w-[163px] md:h-[75px]'
          />
        </Link>

        <div className='hidden gap-4 md:flex'>
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={clsx(
                'p-2 flex gap-1 items-center font-medium transition-all cursor-pointer hover:text-[--primary]',
                { 'text-[--primary]': location.pathname === item.path }
              )}>
              <item.icon />
              {item.name}
            </Link>
          ))}
        </div>

        <div className='block md:hidden'>
          <RxHamburgerMenu
            onClick={handleSidebarToggle}
            className='w-5 h-5 transition-all cursor-pointer hover:text-[--primary] text-gray-600'
          />
        </div>
      </nav>
    </>
  )
}
