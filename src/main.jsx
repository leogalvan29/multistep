import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter , RouterProvider } from "react-router-dom"
import Layout from './components/Layout'
import './index.css'
import Step1 from './pages/Step1'
import OrdenProvider from './Context/DataContext'
import Step2 from './pages/Step2'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        index:true,
        element:<Step1/>
      },
      {
        path:'/step2/:id',
        element:<Step2/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OrdenProvider>
    <RouterProvider router={router}/>
    </OrdenProvider>
   
  </React.StrictMode>,
)
