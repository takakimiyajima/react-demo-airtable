import React from 'react'
import '@/styles/globals.css'
// import '@/styles/destyle.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import TopContainer from '@/containers/TopContainer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TopContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
