import React from 'react'
import ReactDOM  from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Haqimizda from './Components/Page/Haqimizda/Haqimizda.tsx'
import Xizmatlar from './Components/Page/Xizmatlar/Xizmatlar.tsx'
import FAQ from './Components/Page/FAQ/FAQ.tsx'
import Asosiy from './Components/Asosiy/Asosiy.tsx'
import "./service/i18n/i18.ts"




const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/asosiy",
        element:<Asosiy/>
      },

      {
        path:"/haqimizda",
        element:<Haqimizda/>
      },
      {
        path:"/xizmatlar",
        element:<Xizmatlar/>
      },
      {
        path:"/faq",
        element:<FAQ/>
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
