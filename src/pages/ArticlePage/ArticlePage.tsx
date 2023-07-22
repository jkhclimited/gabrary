import './ArticlePage.css';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Opinion_Articles from '../../database_articles/Opinion_Articles.json'

const ArticlePage: FC = () => {
    const articles = Opinion_Articles;

    return <>
        <div className='articles-main-div'>
            <p className='articles-header'>Articles</p>
            <p className='articles-subheader'>Listed Below from Newest to Oldest</p>
            {articles.length > 0 ?
                articles.map(article => (
                    <div className='anArticle'>
                        <Link to={`/articles/${article.id}`} className='articleLink'>
                            <img className='articleIMG' src={process.env.PUBLIC_URL + `/Articles_Images/${article.mainIMG}`} alt=''></img>
                            <p className='articleTitle'>{article.title}</p>
                            <p className='articleBlurb'>{article.blurb}</p>
                        </Link>
                    </div>
                ))
            : <p>No Articles!</p>}
        </div>
    </>
}

export default ArticlePage;