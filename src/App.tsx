import './App.css';
import React, { FC, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import CardSearch from './components/CardSearch/CardSearch';
import Footer from './components/Footer/Footer';
// import ToggleDarkMode from './components/ToggleDarkMode/ToggleDarkMode';

import FrontPage from './pages/FrontPage/FrontPage';
import SetPage from './pages/SetPage/SetPage';
import AllCardsPage from './pages/CardsPages/AllCardsPage/AllCardsPage';
import NoPage from './pages/NoPage/NoPage';
import SpoilersPage from './pages/SpoilersPage/SpoilersPage';

import ContentCreatorsPage from './pages/ContentCreatorsPage/ContentCreatorsPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import ArticleIndivPage from './pages/ArticleIndivPage/ArticleIndivPage';
import TournamentReportPage from './pages/TournamentReportsPage/TournamentReports';
import SearchPage from './pages/SearchPage/SearchPage';
import CalendarPage from './pages/CalendarPage/CalendarPage';


interface AppOverallState {
  darkmode: boolean,
  showButton: boolean,
}

const initState: AppOverallState = {
  darkmode: true,
  showButton: false,
}

const App: FC = () => {
  const [appState, setAppState] = useState(initState);
  
  // const handleToggle = () => {
  //   const darkmode = appState.darkmode;
  //   setAppState({ ...appState, darkmode: !darkmode });
  // }

  // Scroll To Top Button Section
  useEffect(() => {
    const scrollButtonVisible = () => {
      window.scrollY > 500 ? setAppState({ ...appState, showButton: true}) : setAppState({ ...appState, showButton: false});
    };

    window.addEventListener('scroll', scrollButtonVisible);

    return () => {
      window.removeEventListener('scroll', scrollButtonVisible);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  };

  // Render Section
  return <>
  <div className={`App darkModeIs${appState.darkmode}`}>
    <BrowserRouter>
      <NavBar />
      {appState.showButton && (
        <div className='scrollTopDiv'>
          <button className='scrollTopButton' onClick={scrollToTop}>⬆</button>
        </div>
      )}
      
      <Routes>
        <Route path='/' element={<FrontPage />}/>

        <Route path='/sets' element={<SetPage />}/>
        <Route path='/sets/:id/' element={<AllCardsPage />}/>
        <Route path='/sets/:id/:typing' element={<AllCardsPage />}/>
        
        <Route path='/articles' element={<ArticlePage />}/>
        <Route path='/articles/:id' element={<ArticleIndivPage />}/>
        <Route path='/creators' element={<ContentCreatorsPage />}/>
        <Route path='/reports' element={<TournamentReportPage />}/>
        <Route path='/searchindex' element={<SearchPage />}/>
        <Route path='/calendar' element={<CalendarPage />}/>
        <Route path="*" element={<NoPage />}/>
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
  </>
}

export default App;