import React from "react";
import "@/styles/globals.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { TopPage } from "@/pages/index";
import { ErrorPage } from "@/pages/error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TopPage />} />
        <Route path='/error' element={<ErrorPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
