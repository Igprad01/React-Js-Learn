import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import FormLogin from './components/Layouts/FormInput.jsx'

// buat SPA untuk template nya menyusul + sekalian belajar react 

const route = createBrowserRouter ([
  {
    path: "/",
    element : <FormLogin />
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
