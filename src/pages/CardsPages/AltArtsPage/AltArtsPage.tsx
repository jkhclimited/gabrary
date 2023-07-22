import React, { useState, useEffect }from "react";
import { useParams } from "react-router-dom";
import { FC } from "react";
import DOAAlterAlts from '../../../database_sets/DB_DOAAlter_Alt.json';
import DOA1stAlts from '../../../database_sets/DB_DOA1st_Alt.json';
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
}

const initState: AltArtsPageState = {
    showing: false,
    cards: [],
    imgSrc: "",
}

const AltArtsPage: FC = () => {
    const [altArtsState, setAltArtsState] = useState(initState);
    const { id } = useParams();

    const handleTextToggle = () => {    
        const showing = altArtsState.showing;
        setAltArtsState({ ...altArtsState, showing: !showing });
    };

    useEffect(() => {
        console.log(id);
        if (id == "DOA-Alter") {
            const cardsList = DOAAlterAlts;
            setAltArtsState({ ...altArtsState, cards: cardsList, imgSrc: "DOAAlter_Alt_Images" });
        }
        if (id == "DOA1st") {
            const cardsList = DOA1stAlts;
            setAltArtsState({ ...altArtsState, cards: cardsList, imgSrc: "DOA1st_Alt_Images" });
        }
        // const fixedID = id?.replace("-", " ");
        // getSetData(fixedID!!).then((cards) => {
        //     console.log(cards);
        //     const champsList = cards.filter((card: any) => card.types.includes('CHAMPION'));
        //     setaltArtsState({ ...altArtsState, cards: champsList });
        // })
    }, [])

    return <>
    <div>
        <ElementBar id={ id as string}/>
        <p className="toggleText">Toggle Text <ToggleSwitch name='Toggle Card Text' handleTextToggle={handleTextToggle}/></p> 
        <div className="flexCardImgs">
            {altArtsState.cards.length > 0 ?
                altArtsState.cards.map(card => (
                    <div className="text-row" key={card["name"].toString()}>                           
                        <p id={card["name"].toString()}><img className="cardImg" src={process.env.PUBLIC_URL + `/${altArtsState.imgSrc}/${parseInt(card.collector_number)}.jpg`} alt="" /></p>
                        <p style={{ display: (altArtsState.showing ? 'block' : 'none' ) }} id={card["collector_number"].toString()} className="centerText">{card.name}</p>
                        <br />
                    </div>
                ))
            : <p>No Cards!</p>}
        </div> 
    </div>
    </>;
} 

export default AltArtsPage;