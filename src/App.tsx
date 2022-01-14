import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import { SignIn } from '@/pages/signIn'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signIn' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App