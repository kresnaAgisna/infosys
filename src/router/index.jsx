import { createBrowserRouter } from 'react-router-dom'
import Login from "../pages/Login"
import HomePage from '../pages/HomePage'
import App from '../App'

const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>
    }
])

export default router