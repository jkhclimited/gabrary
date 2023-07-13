import React, { FC } from "react";
import { Link } from "react-router-dom";
import './ElementBar.css';

interface ElemProps {
    id: string,
}

const ElementBar: FC<ElemProps> = ({id}) => {
    return <>
    <nav className="element-bar">
        <Link to={`/sets/${ id }`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/all-cards.png`} alt="All Cards" />
        </Link>
        <Link to={`/sets/${ id }/Champions`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/champion.png`} alt="Champions" />
        </Link>
        <Link to={`/sets/${ id }/Regalias`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/regalia.png`} alt="Regalias" />
        </Link>
        <Link to={`/sets/${ id }/Domains`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/domain.png`} alt="Domains" />
        </Link>
        <Link to={`/sets/${ id }/Nulls`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/null.png`} alt="Null" />
        </Link>
        <Link to={`/sets/${ id }/Fires`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/fire.png`} alt="Fire" />
        </Link>
        <Link to={`/sets/${ id }/Waters`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/water.png`} alt="Water" />
        </Link>
        <Link to={`/sets/${ id }/Winds`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/wind.png`} alt="Wind" />
        </Link>
        <Link to={`/sets/${ id }/Luxems`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/luxem.png`} alt="Luxem" />
        </Link>
        <Link to={`/sets/${ id }/Cruxs`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/crux.png`} alt="Crux" />
        </Link>
        <Link to={`/sets/${ id }/Arcanes`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/arcane.png`} alt="Arcane" />
        </Link>
        <Link to={`/sets/${ id }/Teras`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/tera.png`} alt="Tera" />
        </Link>
        <Link to={`/sets/${ id }/Alt-Arts`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/alt-arts.png`} alt="Alt Arts" />
        </Link>
    </nav>
    </>;
}

export default ElementBar;