import './ArticlePage.css';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const ArticlePage: FC = () => {

    return <>
        <div className='articles-main-div'>
            <p className='articles-header'>Articles</p>
            <p className='articles-subheader'>Listed Below from Newest to Oldest</p>
            <div className='anArticle'>
                <Link to={`/articles/ive-only-had-him-for-a-week-and-a-half`} className='articleLink'>
                    <img className='articleIMG' src={process.env.PUBLIC_URL + `/Articles_Images/art_0_image.png`} alt=''></img>
                    <p className='articleTitle'>I've only had him for a week and a half</p>
                    <p className='articleBlurb'>But if anything happened to him, I would kill everyone in this kingdom and then myself</p>
                </Link>
            </div>
            <div className='anArticle'>
                <Link to={`/articles/its-a-purple-gun`} className='articleLink'>
                    <img className='articleIMG' src={process.env.PUBLIC_URL + `/Articles_Images/art_1_image.jpg`} alt=''></img>
                    <p className='articleTitle'>Why would anyone cerakote their guns pink and purple?!</p>
                    <p className='articleBlurb'>Any why does cerakoting cost hundreds per item?! What a colossal waste of money!</p>
                </Link>
            </div>
            <div className='anArticle'>
                <Link to={`/articles/huh`} className='articleLink'>
                    <img className='articleIMG' src={process.env.PUBLIC_URL + `/Articles_Images/art_2_image.jpg`} alt=''></img>
                    <p className='articleTitle'>It's time to fight</p>
                    <p className='articleBlurb'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </Link>
            </div>
            <div className='anArticle'>
                <Link to={`/articles/duplicated`} className='articleLink'>
                    <img className='articleIMG' src={process.env.PUBLIC_URL + `/Articles_Images/art_2_image.jpg`} alt=''></img>
                    <p className='articleTitle'>Yes this article is duplicated</p>
                    <p className='articleBlurb'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </Link>
            </div>
            <div className='anArticle'>
                <Link to={`/articles/yes-but-actually-no`} className='articleLink'>
                    <img className='articleIMG' src={process.env.PUBLIC_URL + `/Articles_Images/art_3_image.jpg`} alt=''></img>
                    <p className='articleTitle'>Yes, but actually no.</p>
                    <p className='articleBlurb'>No, I don't think you actually will.</p>
                </Link>
            </div>
            <div className='anArticle'>
                <Link to={`/articles/take-a-closer-look`} className='articleLink'>
                    <img className='articleIMG' src={process.env.PUBLIC_URL + `/Articles_Images/art_4_image.png`} alt=''></img>
                    <p className='articleTitle'>Look at that couch again</p>
                    <p className='articleBlurb'>Seriously, look at that couch again. It's the perfect camoflauge pattern, granny's couch that is.</p>
                </Link>
            </div>
        </div>
    </>
}

export default ArticlePage;