import React, { useState, useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import DOAAlter from '../../local_database/DB_DOAAlter.json';
import ToggleSwitch from "../../components/ToggleTextSwitch/ToggleTextSwitch";
import ElementBar from "../../components/ElementBar/ElementBar";
import '../MaterialsPage/MaterialsPage.css';


interface MaterialsPageState {
    showing: boolean,
    cards: (any)[],
}

const initState: MaterialsPageState = {
    showing: false,
    cards: [],
}

const MaterialsPage: FC = () => {
    const [matState, setMatState] = useState(initState);
    const { id } = useParams();

    const handleTextToggle = () => {
        const showing = matState.showing;
        setMatState({ ...matState, showing: !showing });
    };

    useEffect(() => {
        console.log(id);
        if (id == "DOA-Alter") {
            const matsList = DOAAlter.filter((card: any) => card.types.includes('REGALIA'));
            setMatState({ ...matState, cards: matsList });
        }
    }, [])

    
    return <>
    <div>
        <ElementBar id={ id as string}/>
        <p className="toggleText">Toggle Text <ToggleSwitch name='Toggle Card Text' handleTextToggle={handleTextToggle}/></p> 
        <div className="flexCardImgs">
            {matState.cards.length > 0 ?
                matState.cards.map(card => (
                    <div className="text-row" key={card["name"].toString()}>                           
                        <p id={card["name"].toString()}><img className="cardImg" src={process.env.PUBLIC_URL + `/DOA_Alter_Images/${card.collector_number}.jpg`} alt="" /></p>
                        <p style={{ display: (matState.showing ? 'block' : 'none' ) }} id={card["collector_number"].toString()} className="centerText">{card.name}</p>
                        <br />
                    </div>
                ))
            : <p>No Cards!</p>}
        </div> 
    </div>
    </>;
} 

export default MaterialsPage;