import React, { useState, useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import DOAAlter from '../../local_database/DB_DOAAlter.json';
import ToggleSwitch from "../../components/ToggleTextSwitch/ToggleTextSwitch";
import ElementBar from "../../components/ElementBar/ElementBar";
import '../FiresPage/FiresPage.css';


interface FiresPageState {
    showing: boolean,
    cards: (any)[],
}

const initState: FiresPageState = {
    showing: false,
    cards: [],
}

const FiresPage: FC = () => {
    const [fireState, setfireState] = useState(initState);
    const { id } = useParams();

    const handleTextToggle = () => {
        const showing = fireState.showing;
        setfireState({ ...fireState, showing: !showing });
    };

    useEffect(() => {
        console.log(id);
        if (id == "DOA-Alter") {
            const firesList = DOAAlter.filter((card: any) => card.element.includes('FIRE'));
            setfireState({ ...fireState, cards: firesList });
        }
    }, [])

    
    return <>
    <div>
        <ElementBar id={ id as string}/>
        <p className="toggleText">Toggle Text <ToggleSwitch name='Toggle Card Text' handleTextToggle={handleTextToggle}/></p> 
        <div className="flexCardImgs">
            {fireState.cards.length > 0 ?
                fireState.cards.map(card => (
                    <div className="text-row" key={card["name"].toString()}>                           
                        <p id={card["name"].toString()}><img className="cardImg" src={process.env.PUBLIC_URL + `/DOA_Alter_Images/${card.collector_number}.jpg`} alt="" /></p>
                        <p style={{ display: (fireState.showing ? 'block' : 'none' ) }} id={card["collector_number"].toString()} className="centerText">{card.name}</p>
                        <br />
                    </div>
                ))
            : <p>No Cards!</p>}
        </div> 
    </div>
    </>;
} 

export default FiresPage;