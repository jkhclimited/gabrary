import './App.css';
import React, { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import FrontPage from './pages/FrontPage/FrontPage';
import SetPage from './pages/SetPage/SetPage';
import ChampionsPage from './pages/ChampionsPage/ChampionsPage';
import NoPage from './pages/NoPage/NoPage';

class App extends Component {
  render() {
    return (
      <main>
        <div className="app">
          <NavBar />
          <Routes>
            <Route path='/home' element={<FrontPage />}/>
            <Route path='/:id' element={<SetPage />}/>
            <Route path='/:id/champions' element={<ChampionsPage />}/>
            <Route path="*" element={<NoPage />}/>
          </Routes>
        </div>
      </main>
    )
  }
}

export default App;