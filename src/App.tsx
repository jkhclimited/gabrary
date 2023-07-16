import './App.css';
import React, { FC, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate, } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
// import ToggleDarkMode from './components/ToggleDarkMode/ToggleDarkMode';

import FrontPage from './pages/FrontPage/FrontPage';
import SetPage from './pages/SetPage/SetPage';
import ChampionsPage from './pages/ChampionsPage/ChampionsPage';
import MaterialsPage from './pages/MaterialsPage/MaterialsPage';
import DomainsPage from './pages/DomainsPage/DomainsPage';
import NullsPage from './pages/NullsPage/NullsPage';
import FiresPage from './pages/FiresPage/FiresPage';
import WatersPage from './pages/WatersPage/WatersPage';
import WindsPage from './pages/WindsPage/WindsPage';
import LuxemsPage from './pages/LuxemsPage/LuxemsPage';
import CruxsPage from './pages/CruxsPage/CruxsPage';
import ArcanesPage from './pages/ArcanesPage/ArcanesPage';
import TerasPage from './pages/TerasPage/TerasPage';
import NoPage from './pages/NoPage/NoPage';
import AllCardsPage from './pages/AllCardsPage/AllCardsPage';
import AltArtsPage from './pages/AltArtsPage/AltArtsPage';
import ContentCreatorsPage from './pages/ContentCreatorsPage/ContentCreatorsPage';


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
      window.scrollY > 300 ? setAppState({ ...appState, showButton: true}) : setAppState({ ...appState, showButton: false});
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
          <button className='scrollTopButton' onClick={scrollToTop}>⮙</button>
        </div>
      )}
      {/* <p className="toggleDarkMode">Light Mode <ToggleDarkMode name='Toggle Dark Mode' handleTextToggle={handleToggle}/></p>  */}
      <Routes>
        <Route path='/' element={<FrontPage />}/>
        <Route path='/sets' element={<SetPage />}/>
        <Route path='/sets/:id' element={<AllCardsPage />}/>
        <Route path='/sets/:id/champions' element={<ChampionsPage />}/>
        <Route path='/sets/:id/regalias' element={<MaterialsPage />}/>
        <Route path='/sets/:id/domains' element={<DomainsPage />}/>
        <Route path='/sets/:id/nulls' element={<NullsPage />}/>
        <Route path='/sets/:id/fires' element={<FiresPage />}/>
        <Route path='/sets/:id/waters' element={<WatersPage />}/>
        <Route path='/sets/:id/winds' element={<WindsPage />}/>
        <Route path='/sets/:id/luxems' element={<LuxemsPage />}/>
        <Route path='/sets/:id/cruxs' element={<CruxsPage />}/>
        <Route path='/sets/:id/arcanes' element={<ArcanesPage />}/>
        <Route path='/sets/:id/teras' element={<TerasPage />}/>
        <Route path='/sets/:id/alt-arts' element={<AltArtsPage />}/>
        <Route path='/creators' element={<ContentCreatorsPage />}/>
        <Route path="*" element={<NoPage />}/>
      </Routes>
    </BrowserRouter>
  </div>
  </>
}

export default App;