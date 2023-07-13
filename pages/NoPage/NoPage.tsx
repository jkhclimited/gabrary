import React from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import '../NoPage/NoPage.css';

class NoPage extends React.Component {
    render() {
        return (
            <div className='nopage-message'>
                404 Page Not Found
                <br /><Link to="/">Home</Link>
            </div> 
        )
    }
}

export default NoPage;