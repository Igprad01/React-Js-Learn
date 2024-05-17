import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import FormLogin from './components/Layouts/FormInput.jsx'
import FormOutput from './components/Layouts/Output.jsx'


const route = createBrowserRouter ([
  {
    path: "/",
    element : <FormLogin />
  },

  {
    path: "/output",
    element: <FormOutput />    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
