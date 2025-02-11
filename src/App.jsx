
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Layout from './Component/Layout'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import { Toaster } from 'react-hot-toast'

function App() {
  const routes = createBrowserRouter([
    {path:"",element:<Layout/>,children:[
      {path:"",element:<Home/>},
     {path:"/About",element:<About/>},
     {path:"/Projects",element:<Projects/>},
     {path:"/Contact",element:<Contact/>},

    ]}
  ])
  

  return (
   <>
    <Toaster/>
    <RouterProvider router={routes} />
   </>
  )
}

export default App
