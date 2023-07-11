import React, { useState, useEffect }from "react";
import { useParams } from "react-router-dom";
import { FC } from "react";
import SP1 from '../../local_database/SP1.json';
import ToggleSwitch from '../../components/ToggleTextSwitch/ToggleTextSwitch';
import './SP1Page.css';
import { getSetData } from "../../services/gatcg-api";
import { Card } from "../../models/card";


interface SP1PageState {
    showing: boolean,
    // cards: Card[],
    cards: (any)[],
}

const initState: SP1PageState = {
    showing: false,
    cards: [],
}

const SP1Page: FC = () => {
    const [sp1State, setSP1State] = useState(initState);
    // const { id } = useParams();

    const handleTextToggle = () => {    
        const showing = sp1State.showing;
        setSP1State({ ...sp1State, showing: !showing });
    };

    useEffect(() => {
        // console.log(id);
        const cardsList = SP1;
        console.log(cardsList);
        setSP1State({ ...sp1State, cards: cardsList });
    }, [])

    return <>
    <div>
        <p className="toggleText">Toggle Text <ToggleSwitch name='Toggle Card Text' handleTextToggle={handleTextToggle}/></p> 
        <div className="flexCardImgs">
            {sp1State.cards.length > 0 ?
                sp1State.cards.map(card => (
                    <div className="text-row" key={card["name"].toString()}>                           
                        <p id={card["name"].toString()}><img className="cardImg" src={process.env.PUBLIC_URL + `/SP1_Images/${card.collector_number}.jpg`} alt="" /></p>
                        <p style={{ display: (sp1State.showing ? 'block' : 'none' ) }} id={card["collector_number"].toString()} className="centerText">{card.name}</p>
                        <br />
                    </div>
                ))
            : <p>No Cards!</p>}
        </div> 
    </div>
    </>;
} 

export default SP1Page;