import { Layout } from '@/components/layout/Layout'
import { AddQuizPage } from '@/pages/AddQuizPage'
import { BrowseQuiz } from '@/pages/BrowseQuiz'
import { HomePage } from '@/pages/HomePage'
import { QuizCreatedPage } from '@/pages/QuizCreatedPage'
import { QuizPage } from '@/pages/QuizPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollRestoration />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/',
        index: true,
        element: (
          <Layout>
            <HomePage />
          </Layout>
        ),
      },
      {
        path: '/browse',
        element: (
          <Layout>
            <BrowseQuiz />
          </Layout>
        ),
      },
      {
        path: 'quiz/:id',
        element: <QuizPage />,
      },
      {
        path: 'quiz/new',
        element: (
          <Layout>
            <AddQuizPage />
          </Layout>
        ),
      },
      {
        path: 'quiz/created/:id',
        element: (
          <Layout>
            <QuizCreatedPage />
          </Layout>
        ),
      },
    ],
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster position='bottom-right' reverseOrder={false} gutter={8} />
    </QueryClientProvider>
  )
}

export default App
