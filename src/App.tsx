import React from 'react'
import '@/styles/globals.css'
// import '@/styles/destyle.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import SignInContainer from '@/containers/SignInContainer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signIn' element={<SignInContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
