import './ArticleIndivPage.css';
import React, { FC, useState, useEffect } from "react";
import { useParams, BrowserRouter, Route, Routes, } from "react-router-dom";

import Article1 from '../Articles/Article1';
import Article2 from '../Articles/Article2';
import Article3 from '../Articles/Article3';
import Article4 from '../Articles/Article4';
import Article5 from '../Articles/Article5';

const IndivArticles: FC = () => {
    const { id } = useParams();

    const thisArticle = () => {
        if (id === "june-19-ban-and-restriction-announcement") {
            return <Article1 />;
        } else if (id === "june-ga-discord-tournament-results") {
            return <Article2 />;
        } else if (id === "red-riot-grand-archive-1k") {
            return <Article3 />;
        } else if (id === "australia-regional-top8-report") {
            return <Article4 />;
        } else if (id === "ga-official-discord-ftc-tts-1") {
            return <Article5 />;
        }
    }

    return <>
    <div className='indivArticle-main-div'>
        { thisArticle() }
    </div>
    </>
}

export default IndivArticles;