import React, { useState, useEffect, FC } from "react";
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
import DB_FTCA from '../../../database_sets/DB_FTCA.json';
import DB_P23 from '../../../database_sets/DB_P23.json';
import DB_P24 from '../../../database_sets/DB_P24.json';
import DB_ALC from '../../../database_sets/DB_ALC.json';
import DB_Spoilers from '../../../database_sets/Spoilers.json';

import ToggleSwitch from "../../../components/ToggleTextSwitch/ToggleTextSwitch";
import ElementBar from "../../../components/ElementBar/ElementBar";
import '../TerasPage/TerasPage.css';


interface TerasPageState {
    showing: boolean,
    cards: (any)[],
    imgSrc: string,
    lightboxDisplay: boolean,
    cardToShow: string,
}

const initState: TerasPageState = {
    showing: false,
    cards: [],
    imgSrc: "",
    lightboxDisplay: false,
    cardToShow: "",
}

const TerasPage: FC = () => {
    const [terasState, setterasState] = useState(initState);
    const { id } = useParams();

    const handleTextToggle = () => {
        const showing = terasState.showing;
        setterasState({ ...terasState, showing: !showing });
    };

    const showLightbox = (targetImage: string) => {
        setterasState({ ...terasState, lightboxDisplay: true, cardToShow: targetImage });
    };
    
    const hideLightBox = () => {
        setterasState({ ...terasState, lightboxDisplay: false });
    };

    useEffect(() => {
        if (id == "DOA-Alter") {
            const cardsList = DB_DOAAlter.filter((card: any) => card.element.includes('TERA'));;
            setterasState({ ...terasState, cards: cardsList, imgSrc: "DOAAlter_Images" });
        }
        if (id == "DOA1st") {
            const champsList = DB_DOA1st.filter((card: any) => card.element.includes('TERA'));
            setterasState({ ...terasState, cards: champsList, imgSrc: "DOA1st_Images"});
        }
        if (id == "DOAp") {
            const cardsList = DB_DOAp.filter((card: any) => card.element.includes('TERA'));;
            setterasState({ ...terasState, cards: cardsList, imgSrc: "DOAp_Images" });
        }
        if (id == "DOASD") {
            const cardsList = DB_DOASD.filter((card: any) => card.element.includes('TERA'));;
            setterasState({ ...terasState, cards: cardsList, imgSrc: "DOASD_Images" });
        }
        if (id == "EVP") {
            const cardsList = DB_EVP.filter((card: any) => card.element.includes('TERA'));;
            setterasState({ ...terasState, cards: cardsList, imgSrc: "EVP_Images" });
        }
        if (id === "FTC") {
            const cardsList = DB_FTC.filter((card: any) => card.element.includes('TERA'));
            setterasState({ ...terasState, cards: cardsList, imgSrc: "FTC_Images" });
        }
        if (id === "FTCA") {
            const cardsList = DB_FTCA.filter((card: any) => card.element.includes('TERA'));
            setterasState({ ...terasState, cards: cardsList, imgSrc: "FTCA_Images" });
        }
        if (id == "GVC") {
            const cardsList = DB_Isekai.filter((card: any) => card.element.includes('TERA'));;
            setterasState({ ...terasState, cards: cardsList, imgSrc: "GVC_Images" });
        }
        if (id == "KSP") {
            const cardsList = DB_KSP.filter((card: any) => card.element.includes('TERA'));;
            setterasState({ ...terasState, cards: cardsList, imgSrc: "KSP_Images" });
        }
        if (id == "P22") {
            const cardsList = DB_P22.filter((card: any) => card.element.includes('TERA'));;
            setterasState({ ...terasState, cards: cardsList, imgSrc: "P22_Images"});
        }
        if (id == "P23") {
            const cardsList = DB_P23.filter((card: any) => card.element.includes('TERA'));;
            setterasState({ ...terasState, cards: cardsList, imgSrc: "P23_Images"});
        }
        if (id == "P24") {
            const cardsList = DB_P24.filter((card: any) => card.element.includes('TERA'));;
            setterasState({ ...terasState, cards: cardsList, imgSrc: "P24_Images"});
        }
        if (id == "ALC") {
            const cardsList = DB_ALC.filter((card: any) => card.element.includes('TERA'));;
            setterasState({ ...terasState, cards: cardsList, imgSrc: "ALC_Images"});
        }
        if (id == "SP1") {
            const cardsList = DB_SP1.filter((card: any) => card.element.includes('TERA'));;
            setterasState({ ...terasState, cards: cardsList, imgSrc: "SP1_Images"});
        }
        if (id == "spoilers") {
            const cardsList = DB_Spoilers.filter((card: any) => card.element.includes('TERA'));;
            setterasState({ ...terasState, cards: cardsList, imgSrc: "Spoilers_Images"});
        }
    }, [])

    
    return <>
    <div>
        <ElementBar id={ id as string}/>
        <p className="toggleText">Toggle Text <ToggleSwitch name='Toggle Card Text' handleTextToggle={handleTextToggle}/></p> 
        <div className="flexCardImgs">
            {terasState.cards.length > 0 ?
                terasState.cards.map(card => (
                    <div className="text-row" key={card["name"].toString()}>                           
                        <p className="cardImgBox" id={card["name"].toString()}><img className="cardImg" onClick={() => showLightbox(card.collector_number)} src={process.env.PUBLIC_URL + `/${terasState.imgSrc}/${card.collector_number}.jpg`} alt="" /></p>
                        <p style={{ display: (terasState.showing ? 'block' : 'none' ) }} id={card["collector_number"].toString()} className="centerText">{card.name}</p>
                        <br />
                    </div>
                ))
            : <p>No Cards!</p>}
        </div> 
        { terasState.lightboxDisplay ? 
        <div id="lightbox" onClick={() => hideLightBox()}>
            <img id="lightbox-img"src={process.env.PUBLIC_URL + `/${terasState.imgSrc}/${terasState.cardToShow}.jpg`}/>
        </div> : '' }
    </div>
    </>;
} 

export default TerasPage;