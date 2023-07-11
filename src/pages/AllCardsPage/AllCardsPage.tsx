import React, { useState, useEffect }from "react";
import { useParams } from "react-router-dom";
import { FC } from "react";
import DOAAlter from '../../local_database/DB_DOAAlter.json';
import SP1 from '../../local_database/SP1.json';
import ToggleSwitch from '../../components/ToggleTextSwitch/ToggleTextSwitch';
import ElementBar from "../../components/ElementBar/ElementBar";
import '../AllCardsPage/AllCardsPage.css';
import { getSetData } from "../../services/gatcg-api";
import { Card } from "../../models/card";


interface AllCardsPageState {
    showing: boolean,
    // cards: Card[],
    cards: (any)[],
}

const initState: AllCardsPageState = {
    showing: false,
    cards: [],
}

const AllCardsPage: FC = () => {
    const [allCardsState, setallCardsState] = useState(initState);
    const { id } = useParams();

    const handleTextToggle = () => {    
        const showing = allCardsState.showing;
        setallCardsState({ ...allCardsState, showing: !showing });
    };

    useEffect(() => {
        if (id == "DOA-Alter") {
            const cardsList = DOAAlter;
            setallCardsState({ ...allCardsState, cards: cardsList });
        }
        if (id == "SP1") {
            const cardsList = SP1;
            setallCardsState({ ...allCardsState, cards: cardsList });
        }
        // const fixedID = id?.replace("-", " ");
        // getSetData(fixedID!!).then((cards) => {
        //     console.log(cards);
        //     const champsList = cards.filter((card: any) => card.types.includes('CHAMPION'));
        //     setallCardsState({ ...allCardsState, cards: champsList });
        // })
    }, [])

    return <>
    <div>
        <ElementBar id={ id as string}/>
        <p className="toggleText">Toggle Text <ToggleSwitch name='Toggle Card Text' handleTextToggle={handleTextToggle}/></p> 
        <div className="flexCardImgs">
            {allCardsState.cards.length > 0 ?
                allCardsState.cards.map(card => (
                    <div className="text-row" key={card["name"].toString()}>                           
                        <p id={card["name"].toString()}><img className="cardImg" src={process.env.PUBLIC_URL + `/DOA_Alter_Images/${card.collector_number}.jpg`} alt="" /></p>
                        <p style={{ display: (allCardsState.showing ? 'block' : 'none' ) }} id={card["collector_number"].toString()} className="centerText">{card.name}</p>
                        <br />
                    </div>
                ))
            : <p>No Cards!</p>}
        </div> 
    </div>
    </>;
} 

export default AllCardsPage;