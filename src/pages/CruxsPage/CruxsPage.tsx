import React, { useState, useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import DB_DOAAlter from '../../local_database/DB_DOAAlter.json';
import DB_DOA1st from '../../local_database/DB_DOA1st.json';
import DB_DOAp from '../../local_database/DB_DOAp.json';
import DB_DOASD from '../../local_database/DB_DOASD.json';
import DB_EVP from '../../local_database/DB_EVP.json';
import DB_Isekai from '../../local_database/DB_Isekai.json';
import DB_KSP from '../../local_database/DB_KSP.json';
import DB_P22 from '../../local_database/DB_P22.json';
import DB_SP1 from '../../local_database/DB_SP1.json';
import ToggleSwitch from "../../components/ToggleTextSwitch/ToggleTextSwitch";
import ElementBar from "../../components/ElementBar/ElementBar";
import '../CruxsPage/CruxsPage.css';


interface CruxsPageState {
    showing: boolean,
    cards: (any)[],
    imgSrc: string,
}

const initState: CruxsPageState = {
    showing: false,
    cards: [],
    imgSrc: "",
}

const CruxsPage: FC = () => {
    const [cruxsState, setcruxsState] = useState(initState);
    const { id } = useParams();

    const handleTextToggle = () => {
        const showing = cruxsState.showing;
        setcruxsState({ ...cruxsState, showing: !showing });
    };

    useEffect(() => {
        if (id == "DOA-Alter") {
            const cardsList = DB_DOAAlter.filter((card: any) => card.element.includes('CRUX'));;
            setcruxsState({ ...cruxsState, cards: cardsList, imgSrc: "DOAAlter_Images" });
        }
        if (id == "DOA1st") {
            const champsList = DB_DOA1st.filter((card: any) => card.element.includes('CRUX'));
            setcruxsState({ ...cruxsState, cards: champsList, imgSrc: "DOA1st_Images"});
        }
        if (id == "DOAp") {
            const cardsList = DB_DOAp.filter((card: any) => card.element.includes('CRUX'));;
            setcruxsState({ ...cruxsState, cards: cardsList, imgSrc: "DOAp_Images" });
        }
        if (id == "DOASD") {
            const cardsList = DB_DOASD.filter((card: any) => card.element.includes('CRUX'));;
            setcruxsState({ ...cruxsState, cards: cardsList, imgSrc: "DOASD_Images" });
        }
        if (id == "EVP") {
            const cardsList = DB_EVP.filter((card: any) => card.element.includes('CRUX'));;
            setcruxsState({ ...cruxsState, cards: cardsList, imgSrc: "EVP_Images" });
        }
        if (id == "GVC") {
            const cardsList = DB_Isekai.filter((card: any) => card.element.includes('CRUX'));;
            setcruxsState({ ...cruxsState, cards: cardsList, imgSrc: "GVC_Images" });
        }
        if (id == "KSP") {
            const cardsList = DB_KSP.filter((card: any) => card.element.includes('CRUX'));;
            setcruxsState({ ...cruxsState, cards: cardsList, imgSrc: "KSP_Images" });
        }
        if (id == "P22") {
            const cardsList = DB_P22.filter((card: any) => card.element.includes('CRUX'));;
            setcruxsState({ ...cruxsState, cards: cardsList, imgSrc: "P22_Images"});
        }
        if (id == "SP1") {
            const cardsList = DB_SP1.filter((card: any) => card.element.includes('CRUX'));;
            setcruxsState({ ...cruxsState, cards: cardsList, imgSrc: "SP1_Images"});
        }
    }, [])

    
    return <>
    <div>
        <ElementBar id={ id as string}/>
        <p className="toggleText">Toggle Text <ToggleSwitch name='Toggle Card Text' handleTextToggle={handleTextToggle}/></p> 
        <div className="flexCardImgs">
            {cruxsState.cards.length > 0 ?
                cruxsState.cards.map(card => (
                    <div className="text-row" key={card["name"].toString()}>                           
                        <p id={card["name"].toString()}><img className="cardImg" src={process.env.PUBLIC_URL + `/${cruxsState.imgSrc}/${parseInt(card.collector_number)}.jpg`} alt="" /></p>
                        <p style={{ display: (cruxsState.showing ? 'block' : 'none' ) }} id={card["collector_number"].toString()} className="centerText">{card.name}</p>
                        <br />
                    </div>
                ))
            : <p>No Cards!</p>}
        </div> 
    </div>
    </>;
} 

export default CruxsPage;