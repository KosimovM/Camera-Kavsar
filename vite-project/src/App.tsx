import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import Login from './Components/Login/Login'
import Layout from './Components/Layout'
import Dashbord from './Components/Pages/Dahsbord'
import Centers from './Components/Pages/Centers'
import Class from './Components/Pages/Class'
import Strims from './Components/Pages/Strims'
import User from './Components/Pages/User'
import About from './Components/Pages/About'

const App = () => {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { index: true, element: <Login /> },
        { path: '/dashbord', element: <Dashbord /> },
        { path: '/center', element: <Centers /> },
        { path: '/class', element: <Class /> },
        { path: '/strims', element: <Strims /> },
        { path: '/about', element: <About /> },
        { path: '/user', element: <User /> },
      ],
    },
  ])

  return (
    <div className="no-copy no-drag">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
