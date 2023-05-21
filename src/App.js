import './App.css';
import React, { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import FrontPage from './pages/FrontPage/FrontPage'

class App extends Component {
  render() {
    return (
      <main>
        <div className="app">
          <NavBar />
          <Routes>
            <Route path='/home' element={<FrontPage />}/>
          </Routes>
        </div>
      </main>
    )
  }
}

export default App;