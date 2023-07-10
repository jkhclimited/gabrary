import React, { useState, useEffect }from "react";
import { useParams } from "react-router-dom";
import { FC } from "react";
import DOAAlter from '../../local_database/DB_DOAAlter.json';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import '../ChampionsPage/ChampionsPage.css';
import { getSetData } from "../../services/gatcg-api";
import { Card } from "../../models/card";


interface ChampsPageState {
    showing: boolean,
    cards: Card[],
}

const initState: ChampsPageState = {
    showing: false,
    cards: [],
}

const ChampionsPage: FC = () => {
    const [champsState, setChampsState] = useState(initState);
    const { id } = useParams();

    const handleTextToggle = () => {    
        const showing = champsState.showing;
        setChampsState({ ...champsState, showing: !showing });
    };

    useEffect(() => {
        // const champsList = DOAAlter.filter((card) => card.types.includes('CHAMPION'));
        const fixedID = id?.replace("-", " ");
        getSetData(fixedID!!).then((cards) => {
            console.log(cards);
            const champsList = cards.filter((card: any) => card.types.includes('CHAMPION'));
            setChampsState({ ...champsState, cards: champsList });
        })
    }, [])

    return <>
    <div>
        <p className="toggleText">Toggle Text <ToggleSwitch name='Toggle Card Text' handleTextToggle={handleTextToggle}/></p> 
        <div className="flexCardImgs">
            {champsState.cards.length > 0 ?
                champsState.cards.map(card => (
                    <div className="text-row" key={card["name"].toString()}>                           
                        <p id={card["name"].toString()}><img className="cardImg" src={process.env.PUBLIC_URL + `/DOA_Alter_Images/${card.collector_number}.jpg`} alt="" /></p>
                        <p style={{ display: (champsState.showing ? 'block' : 'none' ) }} id={card["collector_number"].toString()} className="centerText">{card.name}</p>
                        <br />
                    </div>
                ))
            : <p>No Cards!</p>}
        </div> 
    </div>
    </>;
} 

export default ChampionsPage;