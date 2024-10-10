import { Button } from '@/components/common/Button'
import { BiBook, BiUpload } from 'react-icons/bi'
import { BsRobot } from 'react-icons/bs'
import { PiCardsThreeDuotone } from 'react-icons/pi'
import { RiAiGenerate } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className='flex flex-col items-center mb-16'>
      <h1 className='mb-20 mt-2 lg:mt-1.5 text-xl font-medium text-white md:text-3xl lg:text-5xl'>
        Struggling to <b className='font-bold'>focus?</b>
      </h1>
      <div className='relative flex flex-col items-center w-full gap-12 md:gap-24'>
        <div className='flex flex-col items-center'>
          <h2 className='flex flex-col items-center gap-1 font-bold md:gap-4'>
            <span className='text-xl md:text-5xl '>Enchance your learning</span>
            <div className='flex items-center gap-1 md:gap-2'>
              <span className='text-xl md:text-5xl'>with</span>
              <div className='flex items-center gap-1 text-3xl md:gap-2 md:text-6xl'>
                <PiCardsThreeDuotone className='text-blue-500 -rotate-90 ' /> NeuroCards
              </div>
            </div>
          </h2>
        </div>

        <div className='flex flex-col items-center w-full p-6 bg-white drop-shadow-xl outline outline-gray-200 rounded-3xl'>
          <span className='flex items-center gap-1.5 font-medium flex-wrap text-center justify-center '>
            Generate your <span className='text-lg text-[--primary] '>NeuroCards</span> with an
            <span className='flex items-center gap-1 text-lg text-indigo-500'>
              <BsRobot className='w-6 h-6' />
              AI
            </span>
            in under a minute.
          </span>

          <div className='flex flex-col items-center'>
            <div className='flex flex-col gap-8 mt-8 text-xl text-center md:text-left'>
              <div className='flex flex-col items-center gap-2 font-bold md:flex-row'>
                <BiUpload className='w-8 h-8' />
                1. Upload your learning material
              </div>
              <div className='flex flex-col items-center gap-2 font-bold md:flex-row'>
                <RiAiGenerate className='w-8 h-8' />
                2. AI Generates personalized quiz
              </div>
              <div className='flex flex-col items-center gap-2 font-bold md:flex-row '>
                <BiBook className='w-8 h-8' />
                3. Let the learning unfold!
              </div>

              <div className='flex flex-col items-center mt-1.5'>
                <Link to='/quiz/new' className='w-full'>
                  <Button className='bg-indigo-500'>Try it out now!</Button>
                </Link>
                <span className='mt-2 text-sm font-bold text-gray-500'>No registration required!</span>
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  )
}
