import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Suspense } from 'react'
import Layout from './components/Layout'

function App() {

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}></Route>

      </Routes>
    </Suspense>
  )
}

export default App
