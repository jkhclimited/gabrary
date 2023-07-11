import React, { useState, useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import DOAAlter from '../../local_database/DB_DOAAlter.json';
import ToggleSwitch from "../../components/ToggleTextSwitch/ToggleTextSwitch";
import ElementBar from "../../components/ElementBar/ElementBar";
import '../DomainsPage/DomainsPage.css';


interface DomainsPageState {
    showing: boolean,
    cards: (any)[],
}

const initState: DomainsPageState = {
    showing: false,
    cards: [],
}

const DomainsPage: FC = () => {
    const [domainState, setdomainState] = useState(initState);
    const { id } = useParams();

    const handleTextToggle = () => {
        const showing = domainState.showing;
        setdomainState({ ...domainState, showing: !showing });
    };

    useEffect(() => {
        console.log(id);
        if (id == "DOA-Alter") {
            const domainsList = DOAAlter.filter((card: any) => card.types.includes('DOMAIN'));
            setdomainState({ ...domainState, cards: domainsList });
        }
    }, [])

    
    return <>
    <div>
        <ElementBar id={ id as string}/>
        <p className="toggleText">Toggle Text <ToggleSwitch name='Toggle Card Text' handleTextToggle={handleTextToggle}/></p> 
        <div className="flexCardImgs">
            {domainState.cards.length > 0 ?
                domainState.cards.map(card => (
                    <div className="text-row" key={card["name"].toString()}>                           
                        <p id={card["name"].toString()}><img className="cardImg" src={process.env.PUBLIC_URL + `/DOA_Alter_Images/${card.collector_number}.jpg`} alt="" /></p>
                        <p style={{ display: (domainState.showing ? 'block' : 'none' ) }} id={card["collector_number"].toString()} className="centerText">{card.name}</p>
                        <br />
                    </div>
                ))
            : <p>No Cards!</p>}
        </div> 
    </div>
    </>;
} 

export default DomainsPage;