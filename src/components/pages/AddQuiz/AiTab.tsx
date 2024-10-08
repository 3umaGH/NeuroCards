import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { FaFile } from 'react-icons/fa'
import { IoCloudUploadOutline } from 'react-icons/io5'
import pdfToText from 'react-pdftotext'
import { createAIQuiz } from '../../../api/api'
import { getErrorMessage } from '../../../util'
import { Button } from '../../common/Button'
import { useNavigate } from 'react-router-dom'

export const AiTab = () => {
  const [isSubmitting, setSubmitting] = useState(false)
  const [text, setText] = useState('')
  const navigate = useNavigate()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const maxLength = 10000

  const updateText = (text: string, origin: 'file' | 'user') => {
    if (text.length > maxLength) {
      setText(text.substring(0, maxLength))

      if (origin === 'file') toast.error(`Your input is too big. Only ${maxLength} characters were imported.`)
    } else {
      setText(text)

      if (origin === 'file') toast.success('File successfully parsed.')
    }
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateText(e.currentTarget.value, 'user')
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return
    }

    const file = e.target.files[0]

    if (file.name.endsWith('.txt')) {
      const reader = new FileReader()

      reader.onload = e => {
        updateText((e.target?.result as string) ?? '', 'file')
      }

      reader.onerror = () => {
        toast.error('Could not parse this file. Try copy/pasting text manually.')
      }

      reader.readAsText(file)
    } else {
      pdfToText(file)
        .then(text => {
          const formattedText = text.replaceAll('   ', ' ')

          updateText(formattedText, 'file')
        })
        .catch(() => toast.error('Could not parse this file. Try copy/pasting text manually.'))
        .finally(() => (fileInputRef.current ? (fileInputRef.current.value = '') : null))
    }
  }

  const handleImportClick = () => {
    if (fileInputRef.current) fileInputRef.current.click()
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSubmitting(true)

    toast
      .promise(createAIQuiz(text), {
        loading: 'Submitting...',
        success: 'Cards successfully generated!',
        error: e => getErrorMessage(e),
      })
      .then(result => {
        navigate(`/quiz/created/${result.id}`)
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  return (
    <form onSubmit={handleFormSubmit} className='flex flex-col flex-1 h-full gap-4 p-4 overflow-auto animate-fade-in'>
      <div className='flex flex-col items-center justify-center gap-2 my-8'>
        <IoCloudUploadOutline className='w-12 h-12 text-gray-400' />
        <span className='text-sm'>Upload (.pdf .docx .txt)</span>
        <span className='text-sm'>Max 5MB</span>

        <input ref={fileInputRef} type='file' onChange={handleFileChange} accept='.txt,.pdf' className='hidden' />

        <Button
          type='button'
          onClick={handleImportClick}
          className='px-2 py-1 mt-4 text-teal-800 bg-green-50 outline outline-teal-500 max-w-[120px] flex items-center gap-2 justify-center'>
          <FaFile />
          Import
        </Button>
      </div>

      <span className='py-1 text-xl text-center border-t-[1px] border-b-[1px] font-medium text-gray-600'>
        Or Paste Text
      </span>

      <div className='flex flex-col flex-1 gap-2'>
        <div className='flex flex-col flex-1 gap-2'>
          <label htmlFor='textarea' className='text-sm font-medium'>
            Study materials:
          </label>

          <textarea
            id='textarea'
            className='w-full p-2 bg-gray-50 rounded-xl min-h-[50px] h-full focus:outline-blue-200'
            onChange={handleTextChange}
            value={text}
          />
        </div>

        <span className='flex justify-between gap-2 text-xs text-gray-500 md:text-sm'>
          Flash cards will be generated from this text
          <span className={text.length === maxLength ? 'text-red-600' : ''}>
            {text.length}/{maxLength}
          </span>
        </span>
      </div>

      {/*} <div className='flex items-center gap-2'>
        <input type='checkbox' id='share' /> <label htmlFor='share'>Show in the public list</label>
      </div>*/}

      <Button disabled={text.length < 100 || isSubmitting} className='self-end w-min whitespace-nowrap'>
        Generate Cards
      </Button>
    </form>
  )
}
