import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeContextProvider } from './context/ThemeContext.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    path:'/'
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </StrictMode>,
)
