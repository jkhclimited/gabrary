import React from "react";
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import ChampionsPage from "../ChampionsPage/ChampionsPage";
import './DOAAlterPage.css';

class DOAAlterPage extends React.Component {
    state = {
        sets: [],
    };

    render() {
        return (
            <div className='center-div'>
                <Routes>
                    <Route path='/champions' element={<ChampionsPage />}/>
                    {/* <Route path='/materials' element={<MaterialsPage />}/> */}
                    {/* <Route path='/landmarks' element={<LandmarksPage />}/>
                    <Route path='/null' element={<NullPage />}/>
                    <Route path='/fire' element={<FirePage />}/>
                    <Route path='/water' element={<WaterPage />}/>
                    <Route path='/wind' element={<WindPage />}/>
                    <Route path='/luxem' element={<LuxemPage />}/>
                    <Route path='/crux' element={<CruxPage />}/>
                    <Route path='/arcane' element={<ArcanePage />}/>
                    <Route path='/tera' element={<TeraPage />}/> */}
                </Routes>
                <Link to="/sets/DOA-Alter/Champions" className="linkLine">DOA Alter Champions</Link><br />
                <Link to="/sets/DOA-Alter/Materials" className="linkLine">DOA Alter Materials</Link>
            </div>
        )
    }
};

export default DOAAlterPage;