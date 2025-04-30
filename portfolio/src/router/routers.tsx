import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import HomePage from '@/components/HomePage'
import Swapi from '@/components/SWAPI'
import Todo from '@/components/Todo'
import NotFoundPage from '@/components/NotFoundPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'swapi',
                element: <Swapi />
            },
            {
                path: 'todo',
                element: <Todo />
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ]
    }
])