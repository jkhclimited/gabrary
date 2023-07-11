import React, { FC } from "react";
import { Link } from "react-router-dom";
import './ElementBar.css';

interface ElemProps {
    id: string,
}

const ElementBar: FC<ElemProps> = ({id}) => {
    return <>
    <nav className="element-bar">
        <a href={`/sets/${ id }/Champions`} rel="noreferrer">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/champion.png`} alt="Champions" />
        </a>
        <a href={`/sets/${ id }/Regalias`} rel="noreferrer">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/regalia.png`} alt="Regalias" />
        </a>
        <a href={`/sets/${ id }/Domains`} rel="noreferrer">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/domain.png`} alt="Domains" />
        </a>
        <a href={`/sets/${ id }/Nulls`} rel="noreferrer">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/null.png`} alt="Null" />
        </a>
        <a href={`/sets/${ id }/Fires`} rel="noreferrer">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/fire.png`} alt="Fire" />
        </a>
        <a href={`/sets/${ id }/Waters`} rel="noreferrer">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/water.png`} alt="Water" />
        </a>
        <a href={`/sets/${ id }/Winds`} rel="noreferrer">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/wind.png`} alt="Wind" />
        </a>
        <a href={`/sets/${ id }/Luxems`} rel="noreferrer">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/luxem.png`} alt="Luxem" />
        </a>
        <a href={`/sets/${ id }/Cruxs`} rel="noreferrer">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/crux.png`} alt="Crux" />
        </a>
        <a href={`/sets/${ id }/Arcanes`} rel="noreferrer">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/arcane.png`} alt="Arcane" />
        </a>
        <a href={`/sets/${ id }/Teras`} rel="noreferrer">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/tera.png`} alt="Tera" />
        </a>
        <a href={`/sets/${ id }/Alt-Arts`} rel="noreferrer">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/alt-arts.png`} alt="Alt Arts" />
        </a>
    </nav>
    </>;
}

export default ElementBar;