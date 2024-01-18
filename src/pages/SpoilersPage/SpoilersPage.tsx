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
            <p className="centerText">Card(s) of the Day</p>

            <div className="cotd">
                <div className="text-row">
                    <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('25')} src={process.env.PUBLIC_URL + `/Spoilers_Images/25.jpg`} alt="cotd" /></p>
                    <p style={{ display: (spoilersState.showing ? 'block' : 'none' ) }} id='cotdImgText' className="centerText">Resplendent Kite Shield</p>
                </div>      

                
            </div>

        
            <div className="flexCardImgs">
                {spoilersState.cards.length > 0 ?
                    spoilersState.cards.map(card => (
                        <div className="text-row" key={card["name"].toString()}>                           
                            <p className="cardImgBox" id={card["name"].toString()}><img className="cardImg" onClick={() => showLightbox(card.collector_number)} src={process.env.PUBLIC_URL + `/Spoilers_Images/${card.collector_number}.jpg`} alt="" /></p>
                            <p style={{ display: (spoilersState.showing ? 'block' : 'none' ) }} id={card["collector_number"].toString()} className="centerText">{card.name}</p>
                            <br />
                        </div>
                    ))
                : <p className="noSpoilersText">No Spoilers!</p>}
            </div> 
            
            { spoilersState.lightboxDisplay ? 
            <div id="lightbox" onClick={() => hideLightBox()}>
                <img id="lightbox-img" src={process.env.PUBLIC_URL + `/Spoilers_Images/${spoilersState.cardToShow}.jpg`}/>
            </div> : '' }
        </div>
    </>
}

export default SpoilersPage;