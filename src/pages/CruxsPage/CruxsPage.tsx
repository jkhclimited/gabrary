import React, { useState, useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import DOAAlter from '../../local_database/DB_DOAAlter.json';
import ToggleSwitch from "../../components/ToggleTextSwitch/ToggleTextSwitch";
import ElementBar from "../../components/ElementBar/ElementBar";
import '../CruxsPage/CruxsPage.css';


interface CruxsPageState {
    showing: boolean,
    cards: (any)[],
}

const initState: CruxsPageState = {
    showing: false,
    cards: [],
}

const CruxsPage: FC = () => {
    const [cruxsState, setcruxsState] = useState(initState);
    const { id } = useParams();

    const handleTextToggle = () => {
        const showing = cruxsState.showing;
        setcruxsState({ ...cruxsState, showing: !showing });
    };

    useEffect(() => {
        console.log(id);
        if (id == "DOA-Alter") {
            const cruxsList = DOAAlter.filter((card: any) => card.element.includes('CRUX'));
            setcruxsState({ ...cruxsState, cards: cruxsList });
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
                        <p id={card["name"].toString()}><img className="cardImg" src={process.env.PUBLIC_URL + `/DOA_Alter_Images/${card.collector_number}.jpg`} alt="" /></p>
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