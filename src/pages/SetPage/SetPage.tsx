import React from "react";
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import '../SetPage/SetPage.css';

class SetPage extends React.Component {
    state = {
        sets: [],
    };

    render() {
        return (
            <div className='sets-main-div'>
                <p className='sets-header'>Sets Listed Below from Newest to Oldest</p><br />
                <div className='aSet'>
                    <a href='/sets/SP1' rel="noreferrer" className="setsPage">
                        <img className="setIMG" src={process.env.PUBLIC_URL + `/Set_Symbols/SupporterPack1.jpg`} alt="Supporter Pack 1" />
                    </a>
                    <p className='sets-name'>Supporter Pack 1</p>
                </div>
                <div className='aSet'>
                    <a href='/sets/DOA-Alter' rel="noreferrer" className="setsPage">
                        <img className="setIMG" src={process.env.PUBLIC_URL + `/Set_Symbols/DawnofAshesAlterEdition.jpg`} alt="Dawn of Ashes Alter Edition" />
                    </a>
                    <p className='sets-name'>Dawn of Ashes Alter Edition</p>
                </div>
            </div>
        )
    }
};

export default SetPage;