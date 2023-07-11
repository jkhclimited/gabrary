import React, { useState, useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import DOAAlter from '../../local_database/DB_DOAAlter.json';
import ToggleSwitch from "../../components/ToggleTextSwitch/ToggleTextSwitch";
import ElementBar from "../../components/ElementBar/ElementBar";
import '../NullsPage/NullsPage.css';


interface NullsPageState {
    showing: boolean,
    cards: (any)[],
}

const initState: NullsPageState = {
    showing: false,
    cards: [],
}

const NullsPage: FC = () => {
    const [nullsState, setnullsState] = useState(initState);
    const { id } = useParams();

    const handleTextToggle = () => {
        const showing = nullsState.showing;
        setnullsState({ ...nullsState, showing: !showing });
    };

    useEffect(() => {
        console.log(id);
        if (id == "DOA-Alter") {
            const nullsList = DOAAlter.filter((card: any) => card.element.includes('NORM') && !card.types.includes('CHAMPION') && !card.types.includes('REGALIA'));
            setnullsState({ ...nullsState, cards: nullsList });
        }
    }, [])

    
    return <>
    <div>
        <ElementBar id={ id as string}/>
        <p className="toggleText">Toggle Text <ToggleSwitch name='Toggle Card Text' handleTextToggle={handleTextToggle}/></p> 
        <div className="flexCardImgs">
            {nullsState.cards.length > 0 ?
                nullsState.cards.map(card => (
                    <div className="text-row" key={card["name"].toString()}>                           
                        <p id={card["name"].toString()}><img className="cardImg" src={process.env.PUBLIC_URL + `/DOA_Alter_Images/${card.collector_number}.jpg`} alt="" /></p>
                        <p style={{ display: (nullsState.showing ? 'block' : 'none' ) }} id={card["collector_number"].toString()} className="centerText">{card.name}</p>
                        <br />
                    </div>
                ))
            : <p>No Cards!</p>}
        </div> 
    </div>
    </>;
} 

export default NullsPage;