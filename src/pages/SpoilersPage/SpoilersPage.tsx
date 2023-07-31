import './SpoilersPage.css';
import React, { FC, useState, useEffect } from 'react';
import Spoilers from '../../database_sets/Spoilers.json';
import ToggleSwitch from '../../components/ToggleTextSwitch/ToggleTextSwitch';
import ElementBar from '../../components/ElementBar/ElementBar';


interface SpoilersPageState {
    showing: boolean,
    cards: (any)[],
    imgSrc: string,
    lightboxDisplay: boolean,
    cardToShow: string,
}

const initState: SpoilersPageState = {
    showing: false,
    cards: [],
    imgSrc: "",
    lightboxDisplay: false,
    cardToShow: "",
}

const SpoilersPage: FC = () => {
    const [spoilersState, setspoilersState] = useState(initState);

    const handleTextToggle = () => {    
        const showing = spoilersState.showing;
        setspoilersState({ ...spoilersState, showing: !showing });
    };

    const showLightbox = (targetImage: string) => {
        setspoilersState({ ...spoilersState, lightboxDisplay: true, cardToShow: targetImage });
    };
    
    const hideLightBox = () => {
        setspoilersState({ ...spoilersState, lightboxDisplay: false });
    };

    useEffect(() => {
        const cardsList = Spoilers;
        setspoilersState({ ...spoilersState, cards: cardsList });
    }, [])
    
    return <>
    <div> 
        <ElementBar id={ "spoilers" }/>
        <p className="toggleText">Toggle Text <ToggleSwitch name='Toggle Card Text' handleTextToggle={handleTextToggle}/></p> 
        <div className="flexCardImgs">
            {spoilersState.cards.length > 0 ?
                spoilersState.cards.map(card => (
                    <div className="text-row" key={card["name"].toString()}>                           
                        <p className="cardImgBox" id={card["name"].toString()}><img className="cardImg" onClick={() => showLightbox(card.collector_number)} src={process.env.PUBLIC_URL + `/${spoilersState.imgSrc}/${parseInt(card.collector_number)}.jpg`} alt="" /></p>
                        <p style={{ display: (spoilersState.showing ? 'block' : 'none' ) }} id={card["collector_number"].toString()} className="centerText">{card.name}</p>
                        <br />
                    </div>
                ))
            : <p className="noSpoilersText">No Spoilers!</p>}
        </div> 
        { spoilersState.lightboxDisplay ? 
        <div id="lightbox">
            <img id="lightbox-img" onClick={() => hideLightBox()}src={process.env.PUBLIC_URL + `/${spoilersState.imgSrc}/${spoilersState.cardToShow}.jpg`}/>
        </div> : '' }
    </div>
    </>
}

export default SpoilersPage;