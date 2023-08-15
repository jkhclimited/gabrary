import './ArticleIndivPage.css';
import React, { FC, useState, useEffect } from "react";
import { useParams, BrowserRouter, Route, Routes, } from "react-router-dom";

import Article1 from '../Articles/Article1';
import Article2 from '../Articles/Article2';

const IndivArticles: FC = () => {
    const { id } = useParams();

    const thisArticle = () => {
        if (id === "june-19-ban-and-restriction-announcement") {
            return <Article1 />;
        };
        if (id === "june-ga-discord-tournament-results") {
            return <Article2 />;
        }
    }

    return <>
    <div className='indivArticle-main-div'>
        { thisArticle() }
    </div>
    </>
}

export default IndivArticles;