import React, { FC } from "react";
import { Link } from "react-router-dom";
import './ElementBar.css';

interface ElemProps {
    id: string,
}

const ElementBar: FC<ElemProps> = ({id}) => {
    return <>
    <nav className="element-bar">
        <Link to={`/sets/${ id }/All`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/all-cards.png`} alt="All Cards" />
        </Link>
        <Link to={`/sets/${ id }/Champion`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/champion.png`} alt="Champions" />
        </Link>
        <Link to={`/sets/${ id }/Regalia`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/regalia.png`} alt="Regalias" />
        </Link>
        <Link to={`/sets/${ id }/Domain`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/domain.png`} alt="Domains" />
        </Link>
        <Link to={`/sets/${ id }/Norm`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/null.png`} alt="Null" />
        </Link>
        <Link to={`/sets/${ id }/Fire`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/fire.png`} alt="Fire" />
        </Link>
        <Link to={`/sets/${ id }/Water`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/water.png`} alt="Water" />
        </Link>
        <Link to={`/sets/${ id }/Wind`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/wind.png`} alt="Wind" />
        </Link>
        <Link to={`/sets/${ id }/Luxem`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/luxem.png`} alt="Luxem" />
        </Link>
        <Link to={`/sets/${ id }/Crux`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/crux.png`} alt="Crux" />
        </Link>
        <Link to={`/sets/${ id }/Arcane`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/arcane.png`} alt="Arcane" />
        </Link>
        <Link to={`/sets/${ id }/Tera`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/tera.png`} alt="Tera" />
        </Link>
        <Link to={`/sets/${ id }/Neo`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/neos.png`} alt="Neos" />
        </Link>
        <Link to={`/sets/${ id }/Umbra`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/umbral.png`} alt="Umbras" />
        </Link>
        <Link to={`/sets/${ id }/Astra`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/astral.png`} alt="Astra" />
        </Link>
        <Link to={`/sets/${ id }/Alt-Arts`} className="elemLink">
            <img className="elemBarIMG" src={process.env.PUBLIC_URL + `/Element_Symbols/alt-arts.png`} alt="Alt Arts" />
        </Link>
    </nav>
    </>;
}

export default ElementBar;