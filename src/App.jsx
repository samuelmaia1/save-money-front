import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { ChartHomePage } from './components/ChartHomePage/ChartHomePage'
import { PrincipalContent } from './components/PrincipalContent/PrincipalContent'

function App() {

  return (
    <>
      <Header />
      <PrincipalContent />
    </>
  )
}

export default App
