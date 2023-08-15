import './ArticleTemplate.css';
import React, { FC, useState } from 'react';


interface ArticleState {
    lightboxDisplay: boolean,
    cardToShow: string,
}

const initState: ArticleState = {
    lightboxDisplay: false,
    cardToShow: "",
}

const ArticleTemplate: FC = () => {
    const [articleState, setarticleState] = useState(initState);

    const showLightbox = (targetImage: string) => {
        setarticleState({ ...articleState, lightboxDisplay: true, cardToShow: targetImage });
    };
    
    const hideLightBox = () => {
        setarticleState({ ...articleState, lightboxDisplay: false });
    };

    return <>
    <img className='indivArticle-main-image' src={process.env.PUBLIC_URL + `/Articles_Images/insert-image-name.jpg`} alt='' />
    <p className='indivArticle-header'>insert-header-title</p>
    <div className='indivArticle-author-date-line'>
        <div className='indivArticle-author-date indivArticle-author'>by insert-author-name</div>
        <div className='indivArticle-author-date indivArticle-date'>insert-date</div>
    </div>
    <div className='indivArticle-article'>

    </div>
    { articleState.lightboxDisplay ? 
    <div id="lightbox" onClick={() => hideLightBox()}>
        <img id="lightbox-img"  src={process.env.PUBLIC_URL + `${articleState.cardToShow}.jpg`}/>
    </div> : '' }
    </>
}

export default ArticleTemplate;