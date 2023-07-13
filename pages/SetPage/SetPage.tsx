import React, { FC, useState } from "react";
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import '../SetPage/SetPage.css';

const SetPage: FC = () => {

    return (
        <div className='sets-main-div'>
            <p className='sets-header'>Sets Listed Below from Newest to Oldest</p><br />
            <div className='aSet'>
                <Link to={`/sets/SP1`} className="setLink">
                    <img className="setIMG" src={process.env.PUBLIC_URL + `/Set_Symbols/SupporterPack1.jpg`} alt="Supporter Pack 1" />
                    Supporter Pack 1
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/GVC`} className="setLink">
                    <img className="setIMG" src={process.env.PUBLIC_URL + `/Set_Symbols/DawnofAshesAlterEdition.jpg`} alt="I've been recruited as a champion to save the world but suddenly got transported to modern Earth!" />
                    Isekai Cards
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/EVP`} className="setLink">
                    <img className="setIMG" src={process.env.PUBLIC_URL + `/Set_Symbols/DawnofAshesAlterEdition.jpg`} alt="Event Pack" />
                    Event Packs
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/DOA-Alter`} className="setLink">
                    <img className="setIMG" src={process.env.PUBLIC_URL + `/Set_Symbols/DawnofAshesAlterEdition.jpg`} alt="Dawn of Ashes Alter Edition" />
                    Dawn of Ashes Alter Edition
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/DOASD`} className="setLink">
                    <img className="setIMG" src={process.env.PUBLIC_URL + `/Set_Symbols/DawnofAshesAlterEdition.jpg`} alt="Dawn of Ashes Starter Deck" />
                    Dawn of Ashes Starter Deck
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/DOA1st`} className="setLink">
                    <img className="setIMG" src={process.env.PUBLIC_URL + `/Set_Symbols/DawnofAshesAlterEdition.jpg`} alt="Dawn of Ashes First Edition" />
                    Dawn of Ashes First Edition
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/KSP`} className="setLink">
                    <img className="setIMG" src={process.env.PUBLIC_URL + `/Set_Symbols/DawnofAshesAlterEdition.jpg`} alt="Kickstarter Promotional" />
                    Kickstarter Promotional
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/DOAp`} className="setLink">
                    <img className="setIMG" src={process.env.PUBLIC_URL + `/Set_Symbols/DawnofAshesAlterEdition.jpg`} alt="Dawn of Ashes Prelude" />
                    Dawn of Ashes Prelude
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/P22`} className="setLink">
                    <img className="setIMG" src={process.env.PUBLIC_URL + `/Set_Symbols/DawnofAshesAlterEdition.jpg`} alt="Promotional 2022" />
                    Promotional 2022
                </Link>
            </div>
        </div>
    )
};

export default SetPage;