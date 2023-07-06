import React from "react";
import '../ChampionsPage/ChampionsPage.css';

class ChampionsPage extends React.Component {
    state = {
        cards: [],
    };

    getCards = async () => {
        try {
            const cardList = await fetch('DB_DOAAlter.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(res => res.json());
            const champsList = [];
            for (i = 0; i < cardList.length; i++) {
                if (cardList[i].types.includes('CHAMPION')) {
                    champsList.push(cardList[i]);
                }
            }
            this.setState({ cards: champsList });
            console.log(champsList);
        } catch (err) {
            console.error("Error:", err);
        };
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