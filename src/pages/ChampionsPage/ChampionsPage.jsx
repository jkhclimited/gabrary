import React from "react";
import DB_DOA from "../../local_database/DB_DOAAlter.json";
import '../ChampionsPage/ChampionsPage.css';

class ChampionsPage extends React.Component {
    state = {
        cards: [],
    };

    getCards = async () => {
        let champsList = [];
        for (let i = 0; i < DB_DOA.length; i++) {
            if (DB_DOA[i].types.includes('CHAMPION')) {
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
        return (
            <div>
                {this.state.cards.length ?
                    this.state.cards.map(card => (
                        <div className="text-row">
                            <p id={card._id}>{card.name}</p>
                        </div>
                    ))
                : <p>No Cards!</p>}
            </div>
        )
    }
}

export default ChampionsPage;