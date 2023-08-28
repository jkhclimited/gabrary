import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import '../SearchPage/SearchPage.css';

interface SearchState {
    searchTerm: string,
    searchResult: (any)[],
}

const initState: SearchState = {
    searchTerm: "",
    searchResult: [],
}

const SearchPage: FC = () => {
    const [searchPageState, setSearchPageSTate] = useState(initState);

    return <>
        <div className='nopage-message'>
            Temporary Search Result
            <br /><Link to="/">Home</Link>
        </div> 
    </>   
}

export default SearchPage;