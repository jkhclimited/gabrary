import React, { useEffect, useState, FC } from 'react'
import { Link } from 'react-router-dom';
import './CardSearch.css'

import DB_AllCards from '../../database_sets/DB_AllCards.json';

interface CardSearchState {
    searchTerm: string,
    searchResult: (any)[],
}

const initState: CardSearchState = {
    searchTerm: "",
    searchResult: [],
}

const CardSearch: FC = () => {
    const [cardSearchState, setcardSearchState] = useState(initState);
    const allCards = DB_AllCards;

    const search = () => {
        const searchResult = allCards.filter((card: any) => card.name.includes(cardSearchState.searchTerm));
        setcardSearchState({ ...cardSearchState, searchResult: searchResult });
    }

    const handleChange = (e: { target: { value: string; }; }) => {
        setcardSearchState({ ...cardSearchState, searchTerm: e.target.value});
    };

    const handleClick = () => {
        <Link 
            to="/searchindex"
            state = {{ searchTerm: cardSearchState.searchTerm, searchResult: cardSearchState.searchResult }}
        
        ></Link>
    }


    return <>
        <div className="cardSearch-mainDiv">
            <input className="cardSearch-inputBox" onChange={handleChange} />
            <Link to="/searchindex"><button className="cardSearch-button" onClick={handleClick} /></Link>
        </div>
    </>
}

export default CardSearch;