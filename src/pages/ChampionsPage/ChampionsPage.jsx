import React, { useState } from "react";
import DB_DOA from '../../local_database/DB_DOAAlter.json';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import '../ChampionsPage/ChampionsPage.css';

class ChampionsPage extends React.Component {
    state = {
        showing: false,
        cards: [],
    };

    getCards = async () => {
        let champsList = [];
        for (let i = 0; i < DB_DOA.length; i++) {
            if (DB_DOA[i].types.includes('CHAMPION')) {
                console.log(`/DOA_Alter_Images/${DB_DOA[i].collector_number}.jpg`);
                champsList.push(DB_DOA[i]);
            }
        }
        console.log(champsList);
        this.setState({ cards: champsList });
    };

    componentDidMount = async () => {
        this.getCards();
    };

    render() {
        const { showing } = this.state;
        return (
            <div>
                <ToggleSwitch Name='Toggle Card Text'/>
                {/* <button onClick = {() => this.setState({ showing: !showing })}>Toggle Text</button> */}
                <div className="flexCardImgs">
                    {this.state.cards.length ?
                        this.state.cards.map(card => (
                            <div className="text-row">                            
                                <p id={card.name}><img className="cardImg" src={process.env.PUBLIC_URL + `/DOA_Alter_Images/${card.collector_number}.jpg`} alt="" /></p>
                                <p style={{ display: (showing ? 'block' : 'none' ) }} id={card._id} className="centerText">{card.name}</p>
                                <br />
                            </div>
                        ))
                    : <p>No Cards!</p>}
                </div> 
            </div>
        )
    }
}

export default ChampionsPage;