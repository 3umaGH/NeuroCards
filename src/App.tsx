import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { QuizPage } from './pages/QuizPage'
import { HomePage } from './pages/HomePage'
import { AddQuizPage } from './pages/AddQuizPage'
import { BrowseQuiz } from './pages/BrowseQuiz'

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
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
