import React, { useState, useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import DOAAlter from '../../local_database/DB_DOAAlter.json';
import ToggleSwitch from "../../components/ToggleTextSwitch/ToggleTextSwitch";
import '../WatersPage/WatersPage.css';


interface WatersPageState {
    showing: boolean,
    cards: (any)[],
}

const initState: WatersPageState = {
    showing: false,
    cards: [],
}

const WatersPage: FC = () => {
    const [watersState, setwatersState] = useState(initState);
    const { id } = useParams();

    const handleTextToggle = () => {
        const showing = watersState.showing;
        setwatersState({ ...watersState, showing: !showing });
    };

    useEffect(() => {
        console.log(id);
        if (id == "DOA-Alter") {
            const watersList = DOAAlter.filter((card: any) => card.element.includes('WATER'));
            setwatersState({ ...watersState, cards: watersList });
        }
    }, [])

    
    return <>
    <div>
        <p className="toggleText">Toggle Text <ToggleSwitch name='Toggle Card Text' handleTextToggle={handleTextToggle}/></p> 
        <div className="flexCardImgs">
            {watersState.cards.length > 0 ?
                watersState.cards.map(card => (
                    <div className="text-row" key={card["name"].toString()}>                           
                        <p id={card["name"].toString()}><img className="cardImg" src={process.env.PUBLIC_URL + `/DOA_Alter_Images/${card.collector_number}.jpg`} alt="" /></p>
                        <p style={{ display: (watersState.showing ? 'block' : 'none' ) }} id={card["collector_number"].toString()} className="centerText">{card.name}</p>
                        <br />
                    </div>
                ))
            : <p>No Cards!</p>}
        </div> 
    </div>
    </>;
} 

export default WatersPage;