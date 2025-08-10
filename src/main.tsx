import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'
import { Layout } from './app/Layout'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Products } from './pages/Products'
import { WorkWithUs } from './pages/WorkWithUs'
import { ReachUs } from './pages/ReachUs'
import { Careers } from './pages/Careers'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'products', element: <Products /> },
      { path: 'work-with-us', element: <WorkWithUs /> },
      { path: 'reach-us', element: <ReachUs /> },
      { path: 'careers', element: <Careers /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
