import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import Dashboard from './Dashboard/Dashboard';
import './App.css';

function App() {
  return <>
    <Routes>
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/register' element={<RegisterPage />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route path='/*' element={<LoginPage />}>
        </Route>
    </Routes>
  </>;
}

export default App;
