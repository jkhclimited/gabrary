import '../SetPage/SetPage.css';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';


const SetPage: FC = () => {

    return (
        <div className='sets-main-div'>
            <p className='sets-header header-text'>Sets</p>
            <p className='sets-subheader subheader-text'>Listed Below from Newest to Oldest</p>
            <div className='aSet'>
                <Link to={`/sets/ALC/All`} className='setLink'>
                    <img className='setIMG' src={process.env.PUBLIC_URL + `/Set_Symbols/ALC.jpg`} alt='Alchemical Revolution' />
                    Alchemical Revolution
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/ALCSD/All`} className='setLink'>
                    <img className='setIMG' src={process.env.PUBLIC_URL + `/Set_Symbols/ALC.jpg`} alt='Alchemical Revolution Starter Deck' />
                    Alchemical Revolution Starter Deck
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/P24/All`} className='setLink'>
                    <img className='setIMG' src={process.env.PUBLIC_URL + `/Set_Symbols/P24.jpg`} alt='Promotional 2024' />
                    Promotional 2024
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/FTCA/All`} className='setLink'>
                    <img className='setIMG' src={process.env.PUBLIC_URL + `/Set_Symbols/FTC.jpg`} alt='Fractured Crown Armaments' />
                    Fractured Crown: Armaments
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/FTC/All`} className='setLink'>
                    <img className='setIMG' src={process.env.PUBLIC_URL + `/Set_Symbols/FTC.jpg`} alt='Fractured Crown' />
                    Fractured Crown
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/P23/All`} className='setLink'>
                    <img className='setIMG' src={process.env.PUBLIC_URL + `/Set_Symbols/P23.jpg`} alt='Promotional 2023' />
                    Promotional 2023
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/SP1/All`} className='setLink'>
                    <img className='setIMG' src={process.env.PUBLIC_URL + `/Set_Symbols/SP1.jpg`} alt='Supporter Pack 1' />
                    Supporter Pack 1
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/GVC/All`} className='setLink'>
                    <img className='setIMG' src={process.env.PUBLIC_URL + `/Set_Symbols/Isekai.jpg`} alt="I've been recruited as a champion to save the world but suddenly got transported to modern Earth!" />
                    Isekai Cards
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/EVP/All`} className='setLink'>
                    <img className='setIMG' src={process.env.PUBLIC_URL + `/Set_Symbols/EVP.jpg`} alt='Event Pack' />
                    Event Packs
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/DOA-Alter/All`} className='setLink'>
                    <img className='setIMG' src={process.env.PUBLIC_URL + `/Set_Symbols/DOAAlter.jpg`} alt='Dawn of Ashes Alter Edition' />
                    Dawn of Ashes Alter Edition
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/DOASD/All`} className='setLink'>
                    <img className='setIMG' src={process.env.PUBLIC_URL + `/Set_Symbols/DOASD.jpg`} alt='Dawn of Ashes Starter Deck' />
                    Dawn of Ashes Starter Deck
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/DOA1st/All`} className='setLink'>
                    <img className='setIMG' src={process.env.PUBLIC_URL + `/Set_Symbols/DOA1st.jpg`} alt='Dawn of Ashes First Edition' />
                    Dawn of Ashes First Edition
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/KSP/All`} className='setLink'>
                    <img className='setIMG' src={process.env.PUBLIC_URL + `/Set_Symbols/KSP.jpg`} alt='Kickstarter Promotional' />
                    Kickstarter Promotional
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/DOAp/All`} className='setLink'>
                    <img className='setIMG' src={process.env.PUBLIC_URL + `/Set_Symbols/DOAp.jpg`} alt='Dawn of Ashes Prelude' />
                    Dawn of Ashes Prelude
                </Link>
            </div>
            <div className='aSet'>
                <Link to={`/sets/P22/All`} className='setLink'>
                    <img className='setIMG' src={process.env.PUBLIC_URL + `/Set_Symbols/P22.jpg`} alt='Promotional 2022' />
                    Promotional 2022
                </Link>
            </div>
        </div>
    )
};

export default SetPage;