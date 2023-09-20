import './App.css';
import React, { FC, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import CardSearch from './components/CardSearch/CardSearch';
import Footer from './components/Footer/Footer';
// import ToggleDarkMode from './components/ToggleDarkMode/ToggleDarkMode';

import FrontPage from './pages/FrontPage/FrontPage';
import SetPage from './pages/SetPage/SetPage';
import ChampionsPage from './pages/CardsPages/ChampionsPage/ChampionsPage';
import MaterialsPage from './pages/CardsPages/MaterialsPage/MaterialsPage';
import DomainsPage from './pages/CardsPages/DomainsPage/DomainsPage';
import NullsPage from './pages/CardsPages/NullsPage/NullsPage';
import FiresPage from './pages/CardsPages/FiresPage/FiresPage';
import WatersPage from './pages/CardsPages/WatersPage/WatersPage';
import WindsPage from './pages/CardsPages/WindsPage/WindsPage';
import LuxemsPage from './pages/CardsPages/LuxemsPage/LuxemsPage';
import CruxsPage from './pages/CardsPages/CruxsPage/CruxsPage';
import ArcanesPage from './pages/CardsPages/ArcanesPage/ArcanesPage';
import TerasPage from './pages/CardsPages/TerasPage/TerasPage';
import NoPage from './pages/NoPage/NoPage';
import AllCardsPage from './pages/CardsPages/AllCardsPage/AllCardsPage';
import AltArtsPage from './pages/CardsPages/AltArtsPage/AltArtsPage';
import SpoilersPage from './pages/SpoilersPage/SpoilersPage';

import ContentCreatorsPage from './pages/ContentCreatorsPage/ContentCreatorsPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import ArticleIndivPage from './pages/ArticleIndivPage/ArticleIndivPage';
import TournamentReportPage from './pages/TournamentReportsPage/TournamentReports';
import SearchPage from './pages/SearchPage/SearchPage';


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
      {/* <CardSearch /> */}
      {/* <p className="toggleDarkMode">Light Mode <ToggleDarkMode name='Toggle Dark Mode' handleTextToggle={handleToggle}/></p>  */}
      <Routes>
        <Route path='/' element={<FrontPage />}/>

        <Route path='/sets' element={<SetPage />}/>
        <Route path='/sets/spoilers' element={<SpoilersPage />}/>
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
        
        <Route path='/articles' element={<ArticlePage />}/>
        <Route path='/articles/:id' element={<ArticleIndivPage />}/>
        <Route path='/creators' element={<ContentCreatorsPage />}/>
        <Route path='/reports' element={<TournamentReportPage />}/>
        <Route path='/searchindex' element={<SearchPage />}/>
        <Route path="*" element={<NoPage />}/>
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
  </>
}

export default App;