import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import UpdateQuotation from './pages/UpdateQuotation';

import 'normalize.css';
import './App.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/update" element={<UpdateQuotation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
