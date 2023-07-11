import React, { useState, useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import DOAAlter from '../../local_database/DB_DOAAlter.json';
import ToggleSwitch from "../../components/ToggleTextSwitch/ToggleTextSwitch";
import '../TerasPage/TerasPage.css';


interface TerasPageState {
    showing: boolean,
    cards: (any)[],
}

const initState: TerasPageState = {
    showing: false,
    cards: [],
}

const TerasPage: FC = () => {
    const [terasState, setterasState] = useState(initState);
    const { id } = useParams();

    const handleTextToggle = () => {
        const showing = terasState.showing;
        setterasState({ ...terasState, showing: !showing });
    };

    useEffect(() => {
        console.log(id);
        if (id == "DOA-Alter") {
            const terasList = DOAAlter.filter((card: any) => card.element.includes('TERA'));
            setterasState({ ...terasState, cards: terasList });
        }
    }, [])

    
    return <>
    <div>
        <p className="toggleText">Toggle Text <ToggleSwitch name='Toggle Card Text' handleTextToggle={handleTextToggle}/></p> 
        <div className="flexCardImgs">
            {terasState.cards.length > 0 ?
                terasState.cards.map(card => (
                    <div className="text-row" key={card["name"].toString()}>                           
                        <p id={card["name"].toString()}><img className="cardImg" src={process.env.PUBLIC_URL + `/DOA_Alter_Images/${card.collector_number}.jpg`} alt="" /></p>
                        <p style={{ display: (terasState.showing ? 'block' : 'none' ) }} id={card["collector_number"].toString()} className="centerText">{card.name}</p>
                        <br />
                    </div>
                ))
            : <p>No Cards!</p>}
        </div> 
    </div>
    </>;
} 

export default TerasPage;