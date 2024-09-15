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
import DB_MRC from '../../../database_sets/DB_MRC.json';
import DB_P22 from '../../../database_sets/DB_P22.json';
import DB_P23 from '../../../database_sets/DB_P23.json';
import DB_P24 from '../../../database_sets/DB_P24.json';
import DB_ReC_SHD from '../../../database_sets/DB_ReC_SHD.json';
import DB_ReC_SLM from '../../../database_sets/DB_ReC_SLM.json';
import DB_SLC from '../../../database_sets/DB_SLC.json';
import DB_SP1 from '../../../database_sets/DB_SP1.json';
import DB_SP2 from '../../../database_sets/DB_SP2.json';
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
        } else if (id === "MRC") {
            const cardsList = DB_MRC.map((x) => x as unknown as Card);
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
        } else if (id === "ReC_SHD") {
            const cardsList = DB_ReC_SHD.map((x) => x as unknown as Card);
            getCards(cardsList, id);
        } else if (id === "ReC_SLM") {
            const cardsList = DB_ReC_SLM.map((x) => x as unknown as Card);
            getCards(cardsList, id);
        } else if (id === "SLC") {
            const cardsList = DB_SLC.map((x) => x as unknown as Card);
            getCards(cardsList, id);
        } else if (id === "SP1") {
            const cardsList = DB_SP1.map((x) => x as unknown as Card);
            getCards(cardsList, id);
        } else if (id === "SP2") {
            const cardsList = DB_SP2.map((x) => x as unknown as Card);
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
                <p className="centerText">Card(s) of the Day</p>
                <div className="flexCardImgs">
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4.1')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4.1.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Jin, Fate Defiant</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('5.1')} src={process.env.PUBLIC_URL + `/Spoilers_Images/5.1.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Jin, Zealous Maverick </p>
                    </div>
                 <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('7.1')} src={process.env.PUBLIC_URL + `/Spoilers_Images/7.1.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Kongming, Wayward Maven</p>
                    </div>
                 <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('8.1')} src={process.env.PUBLIC_URL + `/Spoilers_Images/8.1.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Kongming, Asceitc Vice</p>
                    </div>
                <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('9.1')} src={process.env.PUBLIC_URL + `/Spoilers_Images/9.1.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Kongming, Fel Eidolon</p>
                    </div>
                <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4005.1')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4005.1.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Jin, Undying Resolve</p>
                    </div>
                <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('5008.1')} src={process.env.PUBLIC_URL + `/Spoilers_Images/5008.1.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Kongming, Fel Eidolon</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('8015')} src={process.env.PUBLIC_URL + `/Spoilers_Images/8015.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Tarrif Ring</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('8018')} src={process.env.PUBLIC_URL + `/Spoilers_Images/8018.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Blazing Throw</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('8019')} src={process.env.PUBLIC_URL + `/Spoilers_Images/8019.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Backup Charger</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('8155')} src={process.env.PUBLIC_URL + `/Spoilers_Images/8155.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Minthe, Spirit of Water</p>
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
