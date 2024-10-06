import { QuizTable } from '../components/pages/BrowseQuiz/QuizTable/QuizTable'

export const BrowseQuiz = () => {
  return (
    <div className='flex flex-col flex-1 w-full h-full gap-8 max-w-[1000px] items-center'>
      <h3 className='w-full text-xl font-bold text-white md:text-4xl'>Explore Available Quizzes</h3>

      <QuizTable />
    </div>
  )
}
