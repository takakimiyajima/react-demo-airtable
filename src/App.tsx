import React from 'react';
import '@/styles/globals.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import TopContainer from '@/containers/TopContainer';
import ErrorContainer from '@/containers/ErrorContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TopContainer />} />
        <Route path='/error' element={<ErrorContainer />} />
        <Route path='*' element={<ErrorContainer />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
