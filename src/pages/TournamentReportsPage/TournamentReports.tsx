import './TournamentReports.css';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import DB_Articles from '../../database_articles/DB_Articles.json'

const TournamentReportPage: FC = () => {
    const articles = DB_Articles.filter((article: any) => article.type.includes("result"));

    return <>
        <div className='articles-main-div'>
            <p className='articles-header'>Tournament Reports</p>
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

export default TournamentReportPage;