import './ArticleIndivPage.css';
import React, { FC, useState, useEffect } from "react";
import { useParams, BrowserRouter, Route, Routes, } from "react-router-dom";

import Article1 from '../Articles/Article1';

const IndivArticles: FC = () => {
    const { id } = useParams();

    const thisArticle = () => {
        if (id === "june-19-ban-and-restriction-announcement") {
            return <Article1 />;
        };
    }

    return <>
    <div className='indivArticle-main-div'>
        { thisArticle() }
    </div>
    </>
}

export default IndivArticles;