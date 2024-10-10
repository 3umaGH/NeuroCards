import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { BiEdit } from 'react-icons/bi'
import { BsRobot } from 'react-icons/bs'
import { getConfig } from '../../../../api/api'
import { CommonProps } from '../../../../types/common'
import { getErrorMessage } from '../../../../util'
import { Button } from '../../../common/Button'
import { Loading } from '../../../common/Loading'
import { AiTab } from './components/AiTab'
import { ManualTab } from './components/ManualTab'

type AddQuizForm = CommonProps

export const AddQuizForm = ({ className }: AddQuizForm) => {
  const [mode, setMode] = useState<'ai' | 'manual'>('ai')

  const { isPending, error, data, refetch } = useQuery({
    queryKey: [`config`],
    queryFn: () => getConfig(),
  })

  useEffect(() => {
    if (error) {
      toast.error(getErrorMessage(error))
    }
  }, [error])

  return (
    <div
      className={clsx(
        'flex-1 flex flex-col w-full h-full overflow-hidden bg-white rounded-3xl drop-shadow-xl outline outline-gray-300',
        className
      )}>
      <div className='flex text-sm font-medium bg-white whitespace-nowrap md:text-base'>
        <div
          className={clsx('flex transition-all items-center flex-1 gap-2 p-4 border-b-2 cursor-pointer rounded-br-md', {
            'text-[--primary] border-[--primary] border-r-[2px]': mode === 'ai',
          })}
          onClick={() => setMode('ai')}>
          <BsRobot className='min-w-7 min-h-7' />
          Use AI
        </div>

        <div
          className={clsx('flex transition-all items-center flex-1 gap-2 p-4 border-b-2 cursor-pointer rounded-bl-md', {
            'text-[--primary] border-[--primary] border-l-[2px]': mode === 'manual',
          })}
          onClick={() => setMode('manual')}>
          <BiEdit className='min-w-7 min-h-7' />
          Manual
        </div>
      </div>

      {isPending ? (
        <div className='flex items-center justify-center w-full h-full'>
          <Loading />
        </div>
      ) : (
        <>
          {error && !isPending ? (
            <div className='flex flex-col items-center justify-center w-full h-full gap-2 p-4'>
              <span className='text-lg'>{getErrorMessage(error)}</span>
              <Button onClick={() => refetch()} className='max-w-[200px]'>
                Retry
              </Button>
            </div>
          ) : (
            <>
              {mode === 'ai' && <AiTab config={data} />}
              {mode === 'manual' && <ManualTab config={data} />}
            </>
          )}
        </>
      )}
    </div>
  )
}
