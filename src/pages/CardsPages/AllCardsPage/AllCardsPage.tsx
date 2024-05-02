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
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('94')} src={process.env.PUBLIC_URL + `/Spoilers_Images/94.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Priestess of Flame</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('103')} src={process.env.PUBLIC_URL + `/Spoilers_Images/103.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Volatile Fusilier</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('117')} src={process.env.PUBLIC_URL + `/Spoilers_Images/117.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Icebound Slam</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('122')} src={process.env.PUBLIC_URL + `/Spoilers_Images/122.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Lost in Thought</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('123.1')} src={process.env.PUBLIC_URL + `/Spoilers_Images/123.1.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Naia, Diviner of Fortunes</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('135')} src={process.env.PUBLIC_URL + `/Spoilers_Images/135.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Blessed Clergy</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('139')} src={process.env.PUBLIC_URL + `/Spoilers_Images/139.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Cleansing Reunion</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('154.1')} src={process.env.PUBLIC_URL + `/Spoilers_Images/154.1.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Vainglory Retribution</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('162')} src={process.env.PUBLIC_URL + `/Spoilers_Images/162.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Foretold Bloom</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('172')} src={process.env.PUBLIC_URL + `/Spoilers_Images/172.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Blade of Creation</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('179')} src={process.env.PUBLIC_URL + `/Spoilers_Images/179.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Expunge</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4012')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4012.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Shadeblood Coating</p>
                    </div>
                    <div className="text-row">
                        <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4012')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4033.jpg`} alt="cotd" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} className="centerText">Shifting Mirage</p>
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