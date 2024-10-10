import { AddQuizForm } from '@/components/pages/AddQuiz/AddQuizForm/AddQuizForm'

export const AddQuizPage = () => {
  return (
    <div className='flex flex-col flex-1 w-full h-full gap-4 md:gap-8 max-w-[1000px] items-center'>
      <h3 className='w-full text-xl font-bold text-white md:text-4xl'>Add New Quiz</h3>

      <AddQuizForm />
    </div>
  )
}
