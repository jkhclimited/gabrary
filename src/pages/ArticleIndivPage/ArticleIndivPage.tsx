import './ArticleIndivPage.css';
import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticlePage from "../ArticlePage/ArticlePage";


interface IndivArticlePage {
    imgSrc: string,
}

const initState: IndivArticlePage = {
    imgSrc: "",
}

const ArticleIndivPage: FC = () => {
    const [articleState, setArticleState] = useState(initState);
    const { id } = useParams();

    useEffect(() => {
        setArticleState({ imgSrc: id as string });
    })

    return <>
    <div className='indivarticle-main-div'>
        <p className='indivArticle-header'></p>
    </div>
    </>
}

export default ArticleIndivPage;