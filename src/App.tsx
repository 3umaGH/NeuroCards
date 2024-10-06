import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom'
import { QuizPage } from './pages/QuizPage'

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
        path: 'quiz/:id',
        index: true,
        element: <QuizPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
