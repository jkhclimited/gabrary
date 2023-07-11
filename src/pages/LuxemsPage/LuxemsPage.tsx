import React, { useState, useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import DOAAlter from '../../local_database/DB_DOAAlter.json';
import ToggleSwitch from "../../components/ToggleTextSwitch/ToggleTextSwitch";
import ElementBar from "../../components/ElementBar/ElementBar";
import '../LuxemsPage/LuxemsPage.css';


interface LuxemsPageState {
    showing: boolean,
    cards: (any)[],
}

const initState: LuxemsPageState = {
    showing: false,
    cards: [],
}

const LuxemsPage: FC = () => {
    const [luxemsState, setluxemsState] = useState(initState);
    const { id } = useParams();

    const handleTextToggle = () => {
        const showing = luxemsState.showing;
        setluxemsState({ ...luxemsState, showing: !showing });
    };

    useEffect(() => {
        console.log(id);
        if (id == "DOA-Alter") {
            const luxemsList = DOAAlter.filter((card: any) => card.element.includes('LUXEM'));
            setluxemsState({ ...luxemsState, cards: luxemsList });
        }
    }, [])

    
    return <>
    <div>
        <ElementBar id={ id as string}/>
        <p className="toggleText">Toggle Text <ToggleSwitch name='Toggle Card Text' handleTextToggle={handleTextToggle}/></p> 
        <div className="flexCardImgs">
            {luxemsState.cards.length > 0 ?
                luxemsState.cards.map(card => (
                    <div className="text-row" key={card["name"].toString()}>                           
                        <p id={card["name"].toString()}><img className="cardImg" src={process.env.PUBLIC_URL + `/DOA_Alter_Images/${card.collector_number}.jpg`} alt="" /></p>
                        <p style={{ display: (luxemsState.showing ? 'block' : 'none' ) }} id={card["collector_number"].toString()} className="centerText">{card.name}</p>
                        <br />
                    </div>
                ))
            : <p>No Cards!</p>}
        </div> 
    </div>
    </>;
} 

export default LuxemsPage;