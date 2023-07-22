import './ArticleIndivPage.css';
import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Opinion_Articles from '../../database_articles/Opinion_Articles.json';


interface IndivArticlePage {
    articleData: any,
}

const initState: IndivArticlePage = {
    articleData: null,
}

const ArticleIndivPage: FC = () => {
    const [articleState, setArticleState] = useState(initState);
    const { id } = useParams();

    useEffect(() => {
        const articles = Opinion_Articles.filter((article) => article.id ===  id)
        setArticleState({ ...articleState, articleData: articles });
    }, [])


    return <>
    {articleState.articleData !== null ? 
    <div className='indivArticle-main-div'>
        <img className='indivArticle-main-image' src={process.env.PUBLIC_URL + `/Articles_Images/${articleState.articleData[0].mainIMG}`} alt=''></img>
        <p className='indivArticle-header'>{articleState.articleData[0].title}</p>
        <div className='indivArticle-author-date-line'>
            <div className='indivArticle-author-date indivArticle-author'>by {articleState.articleData[0].author}</div>
            <div className='indivArticle-author-date indivArticle-date'>{articleState.articleData[0].date}</div>
        </div>
        {/* <p className='indivArticle-article'>{articleState.articleData[0].article}</p> */}
        <div className='indivArticle-article' dangerouslySetInnerHTML={{__html:articleState.articleData[0].article}}></div>
    </div>
    : <p></p>}
    </>
}

export default ArticleIndivPage;