import './FrontPage.css';
import React from "react";
import Carousel from '../../components/Carousel/Carousel';

class FrontPage extends React.Component {
    render() {
        return (
            <div className="homepage">
                <p className="homepage-header">Welcome to the Gabrary.</p>
                <div className='center-div'>
                    <Carousel />
                </div>
            </div>
        )
    }
}

export default FrontPage;