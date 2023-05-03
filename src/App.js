import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Users from './pages/Users';

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/users' element={<Users />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App