import React from "react";
import '../CardPage/CardPage.css';

class Cardpage extends React.Component {
 
    render() {
        return (
            <div className="center-div">
                <div className="container">
                    <div className="cardname"></div>
                    <div className="collector-num"></div>
                    <div className="types"></div>
                    <div className="classes"></div>
                    <div className="element"></div>
                    <div className="effect"></div>
                    <div className="flavor-text"></div>
                    <div className="cost_memory"></div>
                    <div className="cost_reserve"></div>
                    <div className="level"></div>
                    <div className="power"></div>
                    <div className="life"></div>
                    <div className="speed"></div>
                    <div className="legality"></div>
                    <div className="editions"></div>
                </div>
            </div>
        )
    }
}