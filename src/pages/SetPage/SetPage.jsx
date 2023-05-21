import React from "react";
import '../SetPage/SetPage.css';

class SetPage extends React.Component {
    state = {
        cards: [],
    };

    getCards = async () => {
        try {
            const cardList = await fetch('/api/cards', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json());
            this.setState({ cards: cardList });
            console.log(cardList);
        } catch (err) {
            console.error("Error:", err);
        };
    };

    componentDidMount = async () => {
        this.getCards()
    };

    render() {
        return (
            <div className='center-div'>
                Placeholding text
            </div>
        )
    }
};

export default SetPage;