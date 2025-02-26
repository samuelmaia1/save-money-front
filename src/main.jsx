import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import { LoginContextProvider } from './context/LoginContext.jsx'
import { Login } from './routes/Login.jsx'
import { Home } from './routes/Home.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    children: [
      {
        element: <Home />,
        path: '/'
      },
      {
        element: <Login />,
        path: '/login'
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginContextProvider>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </LoginContextProvider>
  </StrictMode>,
)
