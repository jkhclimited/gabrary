import './FrontPage.css';
import React, { FC } from "react";
import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import Opinion_Articles from '../../database_articles/Opinion_Articles.json'

const FrontPage: FC = () => {
    const articles = Opinion_Articles;

    return <>
        <div className='homepage-main-div'>
            <p className='homepage-header'>Welcome to the Gabrary.</p>
            <div className='center-div'>
                <Carousel />
                <div className='latest-articles'>
                    <p className='latest-article-header'>Check out the latest article below!</p>
                    <Link to={`/articles/${articles[articles.length - 1].id}`} className='latest-articleLink'>
                        <img className='latest-articleIMG' src={process.env.PUBLIC_URL + `/Articles_Images/${articles[articles.length - 1].mainIMG}`} alt=''></img>
                    </Link>
                </div>
            </div>
        </div>
    </>
}

export default FrontPage;