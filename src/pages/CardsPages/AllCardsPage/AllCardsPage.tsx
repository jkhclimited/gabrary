import './AllCardsPage.css';
import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DB_ALC from '../../../database_sets/DB_ALC.json';
import DB_ALCSD from '../../../database_sets/DB_ALCSD.json';
import DB_DOAAlter from '../../../database_sets/DB_DOAAlter.json';
import DB_DOA1st from '../../../database_sets/DB_DOA1st.json';
import DB_DOAp from '../../../database_sets/DB_DOAp.json';
import DB_DOASD from '../../../database_sets/DB_DOASD.json';
import DB_EVP from '../../../database_sets/DB_EVP.json';
import DB_FTC from '../../../database_sets/DB_FTC.json';
import DB_FTCA from '../../../database_sets/DB_FTCA.json';
import DB_Isekai from '../../../database_sets/DB_Isekai.json';
import DB_KSP from '../../../database_sets/DB_KSP.json';
import DB_P22 from '../../../database_sets/DB_P22.json';
import DB_P23 from '../../../database_sets/DB_P23.json';
import DB_P24 from '../../../database_sets/DB_P24.json';
import DB_SP1 from '../../../database_sets/DB_SP1.json';
import DB_Spoilers from '../../../database_sets/Spoilers.json';

import ToggleSwitch from '../../../components/ToggleTextSwitch/ToggleTextSwitch';
import ElementBar from "../../../components/ElementBar/ElementBar";
import { Card } from '../../../models/card';


interface AllCardsPageState {
    showing: boolean,
    cards: Card[],
    imgSrc: string,
    lightboxDisplay: boolean,
    cardToShow: string,
    currentUrl: string,
}

const initState: AllCardsPageState = {
    showing: false,
    cards: [],
    imgSrc: "",
    lightboxDisplay: false,
    cardToShow: "",
    currentUrl: "",
}

const AllCardsPage: FC = () => {
    const [allCardsState, setallCardsState] = useState(initState);
    const { id } = useParams();
    const { typing } = useParams();

    const handleTextToggle = () => {    
        const showing = allCardsState.showing;
        setallCardsState({ ...allCardsState, showing: !showing });
    };

    const showLightbox = (targetImage: string) => {
        setallCardsState({ ...allCardsState, lightboxDisplay: true, cardToShow: targetImage });
    };
    
    const hideLightBox = () => {
        setallCardsState({ ...allCardsState, lightboxDisplay: false });
    };

    function getCards(fullCardsList: any[], imgSrc: string) {
        const imgSrcStr = imgSrc + "_Images";
        if (typing === "All") {
            setallCardsState({ ...allCardsState, cards: fullCardsList, imgSrc: imgSrcStr});
        } else if (typing === "Alt-Arts") {
            const filterAlts = fullCardsList.filter((card: Card) => card.collector_number % 1 != 0);
            setallCardsState({ ...allCardsState, cards: filterAlts, imgSrc: imgSrcStr});
        } else if (typing === "Champion" || typing === "Regalia" || typing === "Domain") {
            const filteredList = fullCardsList.filter((card: Card) => card.types.includes(typing!.toUpperCase()));
            setallCardsState({ ...allCardsState, cards: filteredList, imgSrc: imgSrcStr});
        } else {
            const filteredList = fullCardsList.filter((card: Card) => card.element.includes(typing!.toUpperCase()));
            setallCardsState({ ...allCardsState, cards: filteredList, imgSrc: imgSrcStr});
        }
    }

    useEffect(() => {
        if (id === "ALC") {
            const cardsList = DB_ALC.map((x) => x as unknown as Card);
            getCards(cardsList, id);
        } else if (id === "ALCSD") {
            const cardsList = DB_ALCSD.map((x) => x as unknown as Card);
            getCards(cardsList, id);
        } else if (id === "DOA1st") {
            const cardsList = DB_DOA1st.map((x) => x as unknown as Card);
            getCards(cardsList, id);
        } else if (id === "DOA-Alter") {
            const cardsList = DB_DOAAlter.map((x) => x as unknown as Card);
            getCards(cardsList, id);
        } else if (id === "DOAp") {
            const cardsList = DB_DOAp.map((x) => x as unknown as Card);
            getCards(cardsList, id);
        } else if (id === "DOASD") {
            const cardsList = DB_DOASD.map((x) => x as unknown as Card);
            getCards(cardsList, id);
        } else if (id === "EVP") {
            const cardsList = DB_EVP.map((x) => x as unknown as Card);
            getCards(cardsList, id);
        } else if (id === "FTC") {
            const cardsList = DB_FTC.map((x) => x as unknown as Card);
            getCards(cardsList, id);
        } else if (id === "FTCA") {
            const cardsList = DB_FTCA.map((x) => x as unknown as Card);
            getCards(cardsList, id);
        } else if (id === "GVC") {
            const cardsList = DB_Isekai.map((x) => x as unknown as Card);
            getCards(cardsList, id);
        } else if (id === "KSP") {
            const cardsList = DB_KSP.map((x) => x as unknown as Card);
            getCards(cardsList, id);
        } else if (id === "P22") {
            const cardsList = DB_P22.map((x) => x as unknown as Card);
            getCards(cardsList, id);
        } else if (id === "P23") {
            const cardsList = DB_P23.map((x) => x as unknown as Card);
            getCards(cardsList, id);
        } else if (id === "P24") {
            const cardsList = DB_P24.map((x) => x as unknown as Card);
            getCards(cardsList, id);
        } else if (id === "SP1") {
            const cardsList = DB_SP1.map((x) => x as unknown as Card);
            getCards(cardsList, id);
        } else if (id === "Spoilers") {
            const cardsList = DB_Spoilers.map((x) => x as unknown as Card);
            getCards(cardsList, id);
        } 
    }, [typing])

    return <>
        <div>
            <ElementBar id={ id as string}/>
            <p className="toggleText">Toggle Text <ToggleSwitch name='Toggle Card Text' handleTextToggle={handleTextToggle}/></p> 

            {id === "Spoilers" ? 
            <div> 
                <p className="centerText">Card of the Day</p>
                <div className="flexCardImgs">
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('6.1')} src={process.env.PUBLIC_URL + `/Spoilers_Images/6.1.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Tristan, Shadowreaver</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('43')} src={process.env.PUBLIC_URL + `/Spoilers_Images/43.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Cell Assembler</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('59')} src={process.env.PUBLIC_URL + `/Spoilers_Images/59.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Manufacture Cell</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('64.1')} src={process.env.PUBLIC_URL + `/Spoilers_Images/64.1.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Powercell</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('84')} src={process.env.PUBLIC_URL + `/Spoilers_Images/84.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Cell Handler</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('100')} src={process.env.PUBLIC_URL + `/Spoilers_Images/100.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Surging Bolt</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('106')} src={process.env.PUBLIC_URL + `/Spoilers_Images/106.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Cell Sharpshooter</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('112')} src={process.env.PUBLIC_URL + `/Spoilers_Images/112.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Fractal of Rain</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('138')} src={process.env.PUBLIC_URL + `/Spoilers_Images/138.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Charged Assailant</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('160')} src={process.env.PUBLIC_URL + `/Spoilers_Images/160.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Windmill Engineer</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4002')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4002.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Tristan, Underhanded</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4003')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4003.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Tristan, hired Blade</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4004')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4004.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Tristan, Shadowdancer</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4009')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4009.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Gearstride Globes</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4011')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4011.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Malignant Athame</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4015')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4015.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Incapacitate</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4016')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4016.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Mastermind Scheme</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4017')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4017.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Sable Remnant</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4025')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4025.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Stifling Trap</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4026')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4026.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Surveil the Winds</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4027')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4027.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Gloamspire Headhunter</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4028')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4028.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Grim Foreboding</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4029')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4029.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Haunting Demise</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4030')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4030.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Ominous Shadow</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4032')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4032.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Shadowstrike</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('5001')} src={process.env.PUBLIC_URL + `/Spoilers_Images/5001.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Spirit of Slime</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('5008')} src={process.env.PUBLIC_URL + `/Spoilers_Images/5008.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">key Slime Pudding</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('5010')} src={process.env.PUBLIC_URL + `/Spoilers_Images/5010.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Slime Nexus</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('5014')} src={process.env.PUBLIC_URL + `/Spoilers_Images/5014.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Forest Cake</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('5019')} src={process.env.PUBLIC_URL + `/Spoilers_Images/5019.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Baby Red Slime</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('5022')} src={process.env.PUBLIC_URL + `/Spoilers_Images/5022.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Baby Blue Slime</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('5024')} src={process.env.PUBLIC_URL + `/Spoilers_Images/5024.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Gather Slimes</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('5025')} src={process.env.PUBLIC_URL + `/Spoilers_Images/5025.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Baby Green Slimes</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('5027')} src={process.env.PUBLIC_URL + `/Spoilers_Images/5027.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Slime's Blessing</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('5029')} src={process.env.PUBLIC_URL + `/Spoilers_Images/5029.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Storm Slime</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('5030')} src={process.env.PUBLIC_URL + `/Spoilers_Images/5030.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Ethereal Slime</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('5031')} src={process.env.PUBLIC_URL + `/Spoilers_Images/5031.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Lustrous Slime</p>
                    </div>
                                        <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('5033')} src={process.env.PUBLIC_URL + `/Spoilers_Images/5033.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Verdant Slime</p>
                    </div>
                </div>
            </div>
            : <div></div> }

            <div className="flexCardImgs">
                {allCardsState.cards.length > 0 ?
                    allCardsState.cards.map((card, i) => (
                        <div className="text-row" key={i}>                           
                            <p className="cardImgBox" id={i.toString()}><img className="cardImg" onClick={() => showLightbox(card.collector_number.toString())} src={process.env.PUBLIC_URL + `/${allCardsState.imgSrc}/${card.collector_number}.jpg`} alt="" /></p>
                            <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} id={card.collector_number.toString()} className="centerText">{card.name}</p>
                            <br />
                        </div>
                    ))
                : <p>No Cards!</p>}
                <br />
            </div> 
            { allCardsState.lightboxDisplay ? 
            <div id="lightbox" onClick={() => hideLightBox()}>
                <img id="lightbox-img"  src={process.env.PUBLIC_URL + `/${allCardsState.imgSrc}/${allCardsState.cardToShow}.jpg`}/>
            </div> : '' }
        </div>
    </>;
} 

export default AllCardsPage;