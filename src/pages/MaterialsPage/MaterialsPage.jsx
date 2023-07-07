import React, { useState } from "react";
import DB_DOA from '../../local_database/DB_DOAAlter.json';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import '../MaterialsPage/MaterialsPage.css';

class MaterialsPage extends React.Component {
    state = {
        showing: false,
        cards: [],
    };
    
    handleTextToggle = () => {
        const showing = this.state.showing;
        this.setState({ showing: !showing });
    };

    getCards = async () => {
        let champsList = [];
        for (let i = 0; i < DB_DOA.length; i++) {
            if (DB_DOA[i].types.includes('REGALIA')) {
                champsList.push(DB_DOA[i]);
            }
        }
        this.setState({ cards: champsList });
    };

    componentDidMount = async () => {
        this.getCards();
    };

    render() {
        const { showing } = this.state;
        return (
            <div>
                <p className="toggleText">Toggle Text <ToggleSwitch Name='Toggle Card Text' handleTextToggle={this.handleTextToggle}/></p> 
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

export default MaterialsPage;

