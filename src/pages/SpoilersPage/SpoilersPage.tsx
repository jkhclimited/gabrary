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
                    <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('203')} src={process.env.PUBLIC_URL + `/Spoilers_Images/203.jpg`} alt="cotd" /></p>
                    <p style={{ display: (spoilersState.showing ? 'block' : 'none' ) }} id='cotdImgText' className="centerText">Carter, Synthetic Reaper</p>
                </div>       
                <div className="text-row">
                    <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('210')} src={process.env.PUBLIC_URL + `/Spoilers_Images/210.jpg`} alt="cotd" /></p>
                    <p style={{ display: (spoilersState.showing ? 'block' : 'none' ) }} id='cotdImgText' className="centerText">Relentless Hexchaser</p>
                </div>      
                <div className="text-row">
                    <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4026')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4026.jpg`} alt="cotd" /></p>
                    <p style={{ display: (spoilersState.showing ? 'block' : 'none' ) }} id='cotdImgText' className="centerText">Quickdraw Piercer</p>
                </div>   
                <div className="text-row">
                    <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4029')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4029.jpg`} alt="cotd" /></p>
                    <p style={{ display: (spoilersState.showing ? 'block' : 'none' ) }} id='cotdImgText' className="centerText">Tasershot</p>
                </div>       
                <div className="text-row">
                    <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('149')} src={process.env.PUBLIC_URL + `/Spoilers_Images/149.jpg`} alt="cotd" /></p>
                    <p style={{ display: (spoilersState.showing ? 'block' : 'none' ) }} id='cotdImgText' className="centerText">Tactical Retreat</p>
                </div>        
                <div className="text-row">
                    <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('205')} src={process.env.PUBLIC_URL + `/Spoilers_Images/205.jpg`} alt="cotd" /></p>
                    <p style={{ display: (spoilersState.showing ? 'block' : 'none' ) }} id='cotdImgText' className="centerText">Demon's Aim</p>
                </div>     
                <div className="text-row">
                    <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('37')} src={process.env.PUBLIC_URL + `/Spoilers_Images/37.jpg`} alt="cotd" /></p>
                    <p style={{ display: (spoilersState.showing ? 'block' : 'none' ) }} id='cotdImgText' className="centerText">Brewing Kit</p>
                </div>   
                <div className="text-row">
                    <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('2017')} src={process.env.PUBLIC_URL + `/Spoilers_Images/2017.jpg`} alt="cotd" /></p>
                    <p style={{ display: (spoilersState.showing ? 'block' : 'none' ) }} id='cotdImgText' className="centerText">Crest of the Alliance</p>
                </div>
                <div className="text-row">
                    <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('3021')} src={process.env.PUBLIC_URL + `/Spoilers_Images/3021.jpg`} alt="cotd" /></p>
                    <p style={{ display: (spoilersState.showing ? 'block' : 'none' ) }} id='cotdImgText' className="centerText">Necklace of Foresight</p>
                </div>    
                <div className="text-row">
                    <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('55')} src={process.env.PUBLIC_URL + `/Spoilers_Images/55.jpg`} alt="cotd" /></p>
                    <p style={{ display: (spoilersState.showing ? 'block' : 'none' ) }} id='cotdImgText' className="centerText">Exorcise Curses</p>
                </div>  
                <div className="text-row">
                    <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('2097')} src={process.env.PUBLIC_URL + `/Spoilers_Images/2097.jpg`} alt="cotd" /></p>
                    <p style={{ display: (spoilersState.showing ? 'block' : 'none' ) }} id='cotdImgText' className="centerText">Neos Sight</p>
                </div>  
                <div className="text-row">
                    <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('3089')} src={process.env.PUBLIC_URL + `/Spoilers_Images/3089.jpg`} alt="cotd" /></p>
                    <p style={{ display: (spoilersState.showing ? 'block' : 'none' ) }} id='cotdImgText' className="centerText">Astra Sight</p>
                </div>  
                <div className="text-row">
                    <p className="cardImgBox"><img className="cardImg" onClick={() => showLightbox('4106')} src={process.env.PUBLIC_URL + `/Spoilers_Images/4106.jpg`} alt="cotd" /></p>
                    <p style={{ display: (spoilersState.showing ? 'block' : 'none' ) }} id='cotdImgText' className="centerText">Umbra Sight</p>
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