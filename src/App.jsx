import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { PrincipalContent } from './components/PrincipalContent/PrincipalContent'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
