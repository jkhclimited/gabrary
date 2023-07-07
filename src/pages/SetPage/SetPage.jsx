import React from "react";
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import ChampionsPage from "../ChampionsPage/ChampionsPage";
import '../SetPage/SetPage.css';

class SetPage extends React.Component {
    state = {
        sets: [],
    };

    render() {
        return (
            <div className='center-div'>
                <Link to="/sets/DOA" className="setspage">Dawn of Ashes</Link>
            </div>
        )
    }
};

export default SetPage;