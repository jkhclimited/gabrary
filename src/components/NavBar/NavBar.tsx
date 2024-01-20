import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
// import ToggleSwitch from '../ToggleDarkMode/ToggleDarkMode';

interface NavBarProps {
    clicked: boolean,
}

const initState: NavBarProps = {
    clicked: false,
}

const NavBar: FC = () => {
    const [navBarState, setNavBarState] = useState(initState);

    const handleIconClick = () => {
        const clicked = navBarState.clicked;
        setNavBarState({ ...navBarState, clicked: !clicked });
    }

    return (
        <nav className="header-bar">
            <Link to="/" className="logoNavItem">
                <img id="logoPNG" src={process.env.PUBLIC_URL + `/gabary-logo.png`} alt="logo.png"/>
            </Link>
            <div className={navBarState.clicked ? "navBarLinks active" : "navBarLinks"}>
                <Link to="/" className="navItem">Home</Link>
                <Link to="/sets" className="navItem">Sets</Link>
                <Link to="/creators" className="navItem">Content Creators</Link>
                <Link to="/sets/Spoilers/All" className="navItem">Spoilers</Link>
                <Link to="/calendar" className="navItem">Calendar</Link>
            </div>
            <div className="toggleDark">

            </div>
            <div className="mobileNav" onClick={() => handleIconClick()}>
                <img id="threeLines" src={process.env.PUBLIC_URL + `/threeLines.png`} alt="menu.png"
                    className={navBarState.clicked ? "iconShow" : "iconNoShow"}
                ></img>
            </div>
        </nav>
    )
}

export default NavBar;