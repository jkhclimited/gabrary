import React, { useState, useEffect }from "react";
import { useParams } from "react-router-dom";
import { FC } from "react";
import DOAAlterAlts from '../../../database_sets/DB_DOAAlter_Alt.json';
import DOA1stAlts from '../../../database_sets/DB_DOA1st_Alt.json';
import FTCAlts from '../../../database_sets/DB_FTC_Alt.json';
import ToggleSwitch from '../../../components/ToggleTextSwitch/ToggleTextSwitch';
import ElementBar from "../../../components/ElementBar/ElementBar";
import '../AltArtsPage/AltArtsPage.css';
// import { getSetData } from "../../../services/gatcg-api";
// import { Card } from "../../../models/card";


interface AltArtsPageState {
    showing: boolean,
    // cards: Card[],
    cards: (any)[],
    imgSrc: string,
    lightboxDisplay: boolean,
    cardToShow: string,
}

const initState: AltArtsPageState = {
    showing: false,
    cards: [],
    imgSrc: "",
    lightboxDisplay: false,
    cardToShow: "",
}

const AltArtsPage: FC = () => {
    const [altArtsState, setAltArtsState] = useState(initState);
    const { id } = useParams();

    const handleTextToggle = () => {    
        const showing = altArtsState.showing;
        setAltArtsState({ ...altArtsState, showing: !showing });
    };

    const showLightbox = (targetImage: string) => {
        setAltArtsState({ ...altArtsState, lightboxDisplay: true, cardToShow: targetImage });
    };
    
    const hideLightBox = () => {
        setAltArtsState({ ...altArtsState, lightboxDisplay: false });
    };

    useEffect(() => {
        if (id === "DOA-Alter") {
            const cardsList = DOAAlterAlts;
            setAltArtsState({ ...altArtsState, cards: cardsList, imgSrc: "DOAAlter_Alt_Images" });
        }
        if (id === "DOA1st") {
            const cardsList = DOA1stAlts;
            setAltArtsState({ ...altArtsState, cards: cardsList, imgSrc: "DOA1st_Alt_Images" });
        }
        if (id === "FTC") {
            const cardsList = FTCAlts;
            setAltArtsState({ ...altArtsState, cards: cardsList, imgSrc: "FTCAlt_Images" });
        }
    }, [])

    return <>
    <div>
        <ElementBar id={ id as string}/>
        <p className="toggleText">Toggle Text <ToggleSwitch name='Toggle Card Text' handleTextToggle={handleTextToggle}/></p> 
        <div className="flexCardImgs">
            {altArtsState.cards.length > 0 ?
                altArtsState.cards.map(card => (
                    <div className="text-row" key={card["name"].toString()}>                           
                        <p className="cardImgBox" id={card["name"].toString()}><img className="cardImg" onClick={() => showLightbox(card.collector_number)} src={process.env.PUBLIC_URL + `/${altArtsState.imgSrc}/${parseInt(card.collector_number)}.jpg`} alt="" /></p>
                        <p style={{ display: (altArtsState.showing ? 'block' : 'none' ) }} id={card["collector_number"].toString()} className="centerText">{card.name}</p>
                        <br />
                    </div>
                ))
            : <p>No Cards!</p>}
        </div> 
        { altArtsState.lightboxDisplay ? 
        <div id="lightbox">
            <img id="lightbox-img" onClick={() => hideLightBox()}src={process.env.PUBLIC_URL + `/${altArtsState.imgSrc}/${altArtsState.cardToShow}.jpg`}/>
        </div> : '' }
    </div>
    </>;
} 

export default AltArtsPage;