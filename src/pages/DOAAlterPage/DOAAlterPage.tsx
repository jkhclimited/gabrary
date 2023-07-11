import React from "react";
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import ChampionsPage from "../ChampionsPage/ChampionsPage";
import MaterialsPage from "../MaterialsPage/MaterialsPage";
import DomainsPage from "../DomainsPage/DomainsPage";
import NullsPage from "../NullsPage/NullsPage";
import FiresPage from "../FiresPage/FiresPage";
import WatersPage from "../WatersPage/WatersPage";
import WindsPage from "../WindsPage/WindsPage";
import LuxemsPage from "../LuxemsPage/LuxemsPage";
import CruxsPage from "../CruxsPage/CruxsPage";
import ArcanesPage from "../ArcanesPage/ArcanesPage";
import TerasPage from "../TerasPage/TerasPage";
import './DOAAlterPage.css';
import AllCardsPage from "../AllCardsPage/AllCardsPage";

class DOAAlterPage extends React.Component {
    state = {
        sets: [],
    };

    render() {
        return (
            <div className='center-div'>
                <Routes>
                    <Route path='/allcards' element={<AllCardsPage />}/>
                    <Route path='/champions' element={<ChampionsPage />}/>
                    <Route path='/materials' element={<MaterialsPage />}/>
                    <Route path='/domains' element={<DomainsPage />}/>
                    <Route path='/nulls' element={<NullsPage />}/>
                    <Route path='/fires' element={<FiresPage />}/>
                    <Route path='/waters' element={<WatersPage />}/>
                    <Route path='/winds' element={<WindsPage />}/>
                    <Route path='/luxems' element={<LuxemsPage />}/>
                    <Route path='/cruxs' element={<CruxsPage />}/>
                    <Route path='/arcanes' element={<ArcanesPage />}/>
                    <Route path='/teras' element={<TerasPage />}/>
                </Routes>
                <Link to="/sets/DOA-Alter/All-Cards" className="linkLine">All DOA Alter Cards</Link><br />
                <Link to="/sets/DOA-Alter/Champions" className="linkLine">DOA Alter Champions</Link><br />
                <Link to="/sets/DOA-Alter/Regalias" className="linkLine">DOA Alter Regalias</Link><br />
                <Link to="/sets/DOA-Alter/Domains" className="linkLine">DOA Alter Domains</Link><br />
                <Link to="/sets/DOA-Alter/Nulls" className="linkLine">DOA Alter Null Element Cards</Link><br />
                <Link to="/sets/DOA-Alter/Fires" className="linkLine">DOA Alter Fire Element Cards</Link><br />
                <Link to="/sets/DOA-Alter/Waters" className="linkLine">DOA Alter Water Element Cards</Link><br />
                <Link to="/sets/DOA-Alter/Winds" className="linkLine">DOA Alter Wind Element Cards</Link><br />
                <Link to="/sets/DOA-Alter/Luxems" className="linkLine">DOA Alter Luxem Element Cards</Link><br />
                <Link to="/sets/DOA-Alter/Cruxs" className="linkLine">DOA Alter Crux Element Cards</Link><br />
                <Link to="/sets/DOA-Alter/Arcanes" className="linkLine">DOA Alter Arcane Element Cards</Link><br />
                <Link to="/sets/DOA-Alter/Teras" className="linkLine">DOA Alter Tera Element Cards</Link><br />
            </div>
        )
    }
};

export default DOAAlterPage;