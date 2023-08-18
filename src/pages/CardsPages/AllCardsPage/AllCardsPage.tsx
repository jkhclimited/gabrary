import './AllCardsPage.css';
import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DB_DOAAlter from '../../../database_sets/DB_DOAAlter.json';
import DB_DOA1st from '../../../database_sets/DB_DOA1st.json';
import DB_DOAp from '../../../database_sets/DB_DOAp.json';
import DB_DOASD from '../../../database_sets/DB_DOASD.json';
import DB_EVP from '../../../database_sets/DB_EVP.json';
import DB_Isekai from '../../../database_sets/DB_Isekai.json';
import DB_KSP from '../../../database_sets/DB_KSP.json';
import DB_P22 from '../../../database_sets/DB_P22.json';
import DB_SP1 from '../../../database_sets/DB_SP1.json';
import DB_FTC from '../../../database_sets/DB_FTC.json';
import DB_FTCA from '../../../database_sets/DB_FTC.json';

import ToggleSwitch from '../../../components/ToggleTextSwitch/ToggleTextSwitch';
import ElementBar from "../../../components/ElementBar/ElementBar";


interface AllCardsPageState {
    showing: boolean,
    cards: (any)[],
    imgSrc: string,
    lightboxDisplay: boolean,
    cardToShow: string,
}

const initState: AllCardsPageState = {
    showing: false,
    cards: [],
    imgSrc: "",
    lightboxDisplay: false,
    cardToShow: "",
}

const AllCardsPage: FC = () => {
    const [allCardsState, setallCardsState] = useState(initState);
    const { id } = useParams();

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

    useEffect(() => {
        if (id === "DOA-Alter") {
            const cardsList = DB_DOAAlter;
            setallCardsState({ ...allCardsState, cards: cardsList, imgSrc: "DOAAlter_Images" });
        }
        if (id === "DOA1st") {
            const cardsList = DB_DOA1st;
            setallCardsState({ ...allCardsState, cards: cardsList, imgSrc: "DOA1st_Images" });
        }
        if (id === "DOAp") {
            const cardsList = DB_DOAp;
            setallCardsState({ ...allCardsState, cards: cardsList, imgSrc: "DOAp_Images" });
        }
        if (id === "DOASD") {
            const cardsList = DB_DOASD;
            setallCardsState({ ...allCardsState, cards: cardsList, imgSrc: "DOASD_Images" });
        }
        if (id === "EVP") {
            const cardsList = DB_EVP;
            setallCardsState({ ...allCardsState, cards: cardsList, imgSrc: "EVP_Images" });
        }
        if (id === "FTC") {
            const cardsList = DB_FTC;
            setallCardsState({ ...allCardsState, cards: cardsList, imgSrc: "FTC_Images" });
        }
        if (id === "FTCA") {
            const cardsList = DB_FTCA;
            setallCardsState({ ...allCardsState, cards: cardsList, imgSrc: "FTCA_Images" });
        }
        if (id === "GVC") {
            const cardsList = DB_Isekai;
            setallCardsState({ ...allCardsState, cards: cardsList, imgSrc: "GVC_Images" });
        }
        if (id === "KSP") {
            const cardsList = DB_KSP;
            setallCardsState({ ...allCardsState, cards: cardsList, imgSrc: "KSP_Images" });
        }
        if (id === "P22") {
            const cardsList = DB_P22;
            setallCardsState({ ...allCardsState, cards: cardsList, imgSrc: "P22_Images"});
        }
        if (id === "SP1") {
            const cardsList = DB_SP1;
            setallCardsState({ ...allCardsState, cards: cardsList, imgSrc: "SP1_Images"});
        }
    }, [])

    return <>
    <div>
        <ElementBar id={ id as string}/>
        <p className="toggleText">Toggle Text <ToggleSwitch name='Toggle Card Text' handleTextToggle={handleTextToggle}/></p> 
        <div className="flexCardImgs">
            {allCardsState.cards.length > 0 ?
                allCardsState.cards.map(card => (
                    <div className="text-row" key={card["name"].toString()}>                           
                        <p className="cardImgBox" id={card["name"].toString()}><img className="cardImg" onClick={() => showLightbox(card.collector_number)} src={process.env.PUBLIC_URL + `/${allCardsState.imgSrc}/${parseInt(card.collector_number)}.jpg`} alt="" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} id={card["collector_number"].toString()} className="centerText">{card.name}</p>
                        <br />
                    </div>
                ))
            : <p>No Cards!</p>}
        </div> 
        { allCardsState.lightboxDisplay ? 
        <div id="lightbox" onClick={() => hideLightBox()}>
            <img id="lightbox-img"  src={process.env.PUBLIC_URL + `/${allCardsState.imgSrc}/${allCardsState.cardToShow}.jpg`}/>
        </div> : '' }
    </div>
    </>;
} 

export default AllCardsPage;