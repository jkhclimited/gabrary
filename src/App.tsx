import './App.css';
import React, { Component, FC } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import FrontPage from './pages/FrontPage/FrontPage';
import SetPage from './pages/SetPage/SetPage';
import DOAAlterPage from './pages/DOAAlterPage/DOAAlterPage';
import ChampionsPage from './pages/ChampionsPage/ChampionsPage';
import NoPage from './pages/NoPage/NoPage';

const App: FC = () => {
  return <>
  <div className="app">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/home' element={<FrontPage />}/>
        <Route path='/sets' element={<SetPage />}/>
        <Route path='/sets/DOA-Alter' element={<DOAAlterPage />}/>
        <Route path='/sets/:id/champions' element={<ChampionsPage />}/>
        {/* <Route path='/:id/materials' element={<MaterialsPage />}/> */}
        <Route path="*" element={<NoPage />}/>
      </Routes>
    </BrowserRouter>
  </div>
  </>
}

export default App;