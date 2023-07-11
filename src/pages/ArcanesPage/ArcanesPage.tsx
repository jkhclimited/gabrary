import React, { useState, useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import DOAAlter from '../../local_database/DB_DOAAlter.json';
import ToggleSwitch from "../../components/ToggleTextSwitch/ToggleTextSwitch";
import ElementBar from "../../components/ElementBar/ElementBar";
import '../ArcanesPage/ArcanesPage.css';


interface ArcanesPageState {
    showing: boolean,
    cards: (any)[],
}

const initState: ArcanesPageState = {
    showing: false,
    cards: [],
}

const ArcanesPage: FC = () => {
    const [arcanesState, setarcanesState] = useState(initState);
    const { id } = useParams();

    const handleTextToggle = () => {
        const showing = arcanesState.showing;
        setarcanesState({ ...arcanesState, showing: !showing });
    };

    useEffect(() => {
        console.log(id);
        if (id == "DOA-Alter") {
            const arcanesList = DOAAlter.filter((card: any) => card.element.includes('ARCANE'));
            setarcanesState({ ...arcanesState, cards: arcanesList });
        }
    }, [])

    
    return <>
    <div>
        <ElementBar id={ id as string}/>
        <p className="toggleText">Toggle Text <ToggleSwitch name='Toggle Card Text' handleTextToggle={handleTextToggle}/></p> 
        <div className="flexCardImgs">
            {arcanesState.cards.length > 0 ?
                arcanesState.cards.map(card => (
                    <div className="text-row" key={card["name"].toString()}>                           
                        <p id={card["name"].toString()}><img className="cardImg" src={process.env.PUBLIC_URL + `/DOA_Alter_Images/${card.collector_number}.jpg`} alt="" /></p>
                        <p style={{ display: (arcanesState.showing ? 'block' : 'none' ) }} id={card["collector_number"].toString()} className="centerText">{card.name}</p>
                        <br />
                    </div>
                ))
            : <p>No Cards!</p>}
        </div> 
    </div>
    </>;
} 

export default ArcanesPage;