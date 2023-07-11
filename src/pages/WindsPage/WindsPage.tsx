import React, { useState, useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import DOAAlter from '../../local_database/DB_DOAAlter.json';
import ToggleSwitch from "../../components/ToggleTextSwitch/ToggleTextSwitch";
import '../WindsPage/WindsPage.css';


interface WindsPageState {
    showing: boolean,
    cards: (any)[],
}

const initState: WindsPageState = {
    showing: false,
    cards: [],
}

const WindsPage: FC = () => {
    const [windsState, setwindsState] = useState(initState);
    const { id } = useParams();

    const handleTextToggle = () => {
        const showing = windsState.showing;
        setwindsState({ ...windsState, showing: !showing });
    };

    useEffect(() => {
        console.log(id);
        if (id == "DOA-Alter") {
            const windsList = DOAAlter.filter((card: any) => card.element.includes('WIND'));
            setwindsState({ ...windsState, cards: windsList });
        }
    }, [])

    
    return <>
    <div>
        <p className="toggleText">Toggle Text <ToggleSwitch name='Toggle Card Text' handleTextToggle={handleTextToggle}/></p> 
        <div className="flexCardImgs">
            {windsState.cards.length > 0 ?
                windsState.cards.map(card => (
                    <div className="text-row" key={card["name"].toString()}>                           
                        <p id={card["name"].toString()}><img className="cardImg" src={process.env.PUBLIC_URL + `/DOA_Alter_Images/${card.collector_number}.jpg`} alt="" /></p>
                        <p style={{ display: (windsState.showing ? 'block' : 'none' ) }} id={card["collector_number"].toString()} className="centerText">{card.name}</p>
                        <br />
                    </div>
                ))
            : <p>No Cards!</p>}
        </div> 
    </div>
    </>;
} 

export default WindsPage;