import './ArticleTemplate.css';
import React, { FC, useState } from 'react';
import Article4Deck1 from '../Articles/Article4Deck1.json';


interface ArticleState {
    lightboxDisplay: boolean,
    cardToShow: string,
}

const initState: ArticleState = {
    lightboxDisplay: false,
    cardToShow: "",
}

const Article4: FC = () => {
    const [articleState, setarticleState] = useState(initState);
    const article4Deck1Matdeck = Article4Deck1.filter((card: any) => card.type.includes('materialdeck'));
    const article4Deck1Maindeck = Article4Deck1.filter((card: any) => card.type.includes('maindeck'));
    const article4Deck1Sidedeck = Article4Deck1.filter((card: any) => card.type.includes('sidedeck'));


    const showLightbox = (targetImage: string) => {
        setarticleState({ ...articleState, lightboxDisplay: true, cardToShow: targetImage });
    };
    
    const hideLightBox = () => {
        setarticleState({ ...articleState, lightboxDisplay: false });
    };

    return <>
    <img className='indivArticle-main-image' src={process.env.PUBLIC_URL + `/Articles_Images/aus-regional-tournament-embed1.png`} alt='' />
    <p className='indivArticle-header'>Australia Regionals Top 8 Report</p>
    <div className='indivArticle-author-date-line'>
        <div className='indivArticle-author-date indivArticle-author'>by Limelight</div>
        <div className='indivArticle-author-date indivArticle-date'>August 14th, 2023</div>
    </div>
    <div className='indivArticle-article'>
        <img className='indivArticle-embedIMG' src={process.env.PUBLIC_URL + `/Articles_Images/aus-regional-tournament-embed1.png`}/>
        <img className='indivArticle-embedIMG' src={process.env.PUBLIC_URL + `/Articles_Images/aus-regional-tournament-embed2.png`}/>
        1st Place: Michael Yap (BlueskyCandy) - <a target="_blank" rel="noopener noreferrer" href="https://build.silvie.org/@Limelight/22Ipbq8ZSKUsl6CzLaM1">Decklist</a><br/><br/>
        Material Deck<br/>
        <div className="flexCardImgs">
        {article4Deck1Matdeck.length > 0 ?
                article4Deck1Matdeck.map(card => (
                    <div className="text-row-small">                           
                        <p className="cardImgBoxSmall" ><img className="cardImgSmall" onClick={() => showLightbox(`/${card.set}/${card.cardnum}`)} src={process.env.PUBLIC_URL + `/${card.set}/${card.cardnum}.jpg`} alt="" />{card.quantity}x</p>
                        <br />
                    </div>
                ))
        : <p>No Cards!</p>}
        </div>

        Main Deck<br/>
        <div className="flexCardImgs">
        {article4Deck1Maindeck.length > 0 ?
                article4Deck1Maindeck.map(card => (
                    <div className="text-row-small">                           
                        <p className="cardImgBoxSmall" ><img className="cardImgSmall" onClick={() => showLightbox(`/${card.set}/${card.cardnum}`)} src={process.env.PUBLIC_URL + `/${card.set}/${card.cardnum}.jpg`} alt="" />{card.quantity}x</p>
                        <br />
                    </div>
                ))
        : <p>No Cards!</p>}
        </div>

        Side Deck<br/>
        <div className="flexCardImgs">
        {article4Deck1Sidedeck.length > 0 ?
                article4Deck1Sidedeck.map(card => (
                    <div className="text-row-small">                           
                        <p className="cardImgBoxSmall" ><img className="cardImgSmall" onClick={() => showLightbox(`/${card.set}/${card.cardnum}`)} src={process.env.PUBLIC_URL + `/${card.set}/${card.cardnum}.jpg`} alt="" />{card.quantity}x</p>
                        <br />
                    </div>
                ))
        : <p>No Cards!</p>}
        </div><br/><br/>

        Runner Up: Caban - <a target="_blank" rel="noopener noreferrer" href="https://build.silvie.org/@Limelight/Aw7eqSRYSzs15bVLVEjv">Decklist</a><br/>
        3rd: Jason May (Limelight) - <a target="_blank" rel="noopener noreferrer" href="https://build.silvie.org/@Limelight/GrI2FXWzc7dpScqJfzgP">Decklist</a><br/>
        4th: Campbell (gunrun) - <a target="_blank" rel="noopener noreferrer" href="https://build.silvie.org/@Limelight/O9ZHfvOOXEcBDzu7dUKv">Decklist</a><br/>
        5th: Dylan Favorito - <a target="_blank" rel="noopener noreferrer" href="https://build.silvie.org/@Limelight/ZFqTJ1qQLIIrPMxV5uHl">Decklist</a><br/>
        6th: Aaron Galvin (Aznat) - <a target="_blank" rel="noopener noreferrer" href="https://build.silvie.org/@Limelight/WXscehekQV9CTO9rTfTz">Decklist</a><br/>
        7th: Michael Bulk (Geo) - <a target="_blank" rel="noopener noreferrer" href="https://build.silvie.org/@Geo/95boKKPnO69923DOQzhQ?fbclid=IwAR3w9jF1kTF6_pl59DHaDm6B0wlsaG_9EEx3d_dMm-wO0BwzRZHQ64sleNE">Decklist</a><br/>
        8th: Lorenzo Nictea - <a target="_blank" rel="noopener noreferrer" href="https://build.silvie.org/@Limelight/VXZbr99VPGp8yS6lcA7N">Decklist</a><br/><br/><br/>
    </div>
    { articleState.lightboxDisplay ? 
    <div id="lightbox" onClick={() => hideLightBox()}>
        <img id="lightbox-img"  src={process.env.PUBLIC_URL + `${articleState.cardToShow}.jpg`}/>
    </div> : '' }
    </>
}

export default Article4;