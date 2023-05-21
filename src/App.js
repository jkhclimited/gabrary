import './App.css';
import React, { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import FrontPage from './pages/FrontPage/FrontPage';
import SetPage from './pages/SetPage/SetPage';

class App extends Component {
  render() {
    return (
      <main>
        <div className="app">
          <NavBar />
          <Routes>
            <Route path='/home' element={<FrontPage />}/>
            <Route path='/sets' element={<SetPage />}/>
            <Route path="*" element={<Navigate to='/home' replace />}/>
          </Routes>
        </div>
      </main>
    )
  }
}

export default App;