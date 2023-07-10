import React from "react";
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import '../SetPage/SetPage.css';

class SetPage extends React.Component {
    state = {
        sets: [],
    };

    render() {
        return (
            <div className='center-div'>
                <Link to='/sets/DOA-Alter' className="setspage">Dawn of Ashes Alter Edition</Link>
            </div>
        )
    }
};

export default SetPage;