import './Article3.css';
import React, { FC, useState } from 'react';
import Article3Deck1 from '../Articles/Article3Deck1.json';


interface ArticleState {
    lightboxDisplay: boolean,
    cardToShow: string,
}

const initState: ArticleState = {
    lightboxDisplay: false,
    cardToShow: "",
}

const Article3: FC = () => {
    const [articleState, setarticleState] = useState(initState);
    const article3Deck1Matdeck = Article3Deck1.filter((card: any) => card.type.includes('materialdeck'));
    const article3Deck1Maindeck = Article3Deck1.filter((card: any) => card.type.includes('maindeck'));
    const article3Deck1Sidedeck = Article3Deck1.filter((card: any) => card.type.includes('sidedeck'));

    const showLightbox = (targetImage: string) => {
        setarticleState({ ...articleState, lightboxDisplay: true, cardToShow: targetImage });
    };
    
    const hideLightBox = () => {
        setarticleState({ ...articleState, lightboxDisplay: false });
    };

    return <>
    <img className='indivArticle-main-image' src={process.env.PUBLIC_URL + `/Articles_Images/banner-red-riot-games.jpg`} alt='' />
    <p className='indivArticle-header'>Red Riot Grand Archive 1K Results!</p>
    <div className='indivArticle-author-date-line'>
        <div className='indivArticle-author-date indivArticle-author'>by Gabrary</div>
        <div className='indivArticle-author-date indivArticle-date'>June 12th, 2023</div>
    </div>
    <div className='indivArticle-article'>
        Over the weekend Riot Riot Games hosted a Grand Archive 1k in Canada, you can check out Red Riot Games <a target="_blank" rel="noopener noreferrer" href="https://redriotgames.ca/">here</a>. To use any of the decks on TTS please navigate to the deck links in the description. There will be a prompt on silvie.org to allow you to download the deck for TTS.<br/><br/>
        The tournament had 28 players, below is the deck archetype breakdown<br/><br/>
        <img className='indivArticle-embedIMG' src={process.env.PUBLIC_URL + `/Articles_Images/red-riot-1k-embed1.png`}/>
        <img className='indivArticle-embedIMG' src={process.env.PUBLIC_URL + `/Articles_Images/red-riot-1k-embed2.png`}/>
        We also have a short blurb from Steve over at Red Riot:<br/>
        "I want to say thank you to everyone that came out to this event, it means allot to see so many players from all over Toronto coming together for an amazing event at the beginning of a games life cycle! While we had a few hiccups we are working towards growing a strong community and an event stronger tournament structure. With that said we have your tournament deck list and graphs showing what decks represented at this event!"<br/><br/>
        1st Place Winning Deck by Nathan Chin RRG - <a target="_blank" rel="noopener noreferrer" href="https://build.silvie.org/@Dezmu/dg8gcwT40IvxaXLFHe3Y">Decklist</a><br/><br/>
        Material Deck<br/>
        <div className="flexCardImgs">
        {article3Deck1Matdeck.length > 0 ?
                article3Deck1Matdeck.map(card => (
                    <div className="text-row-small">                           
                        <p className="cardImgBoxSmall" ><img className="cardImgSmall" onClick={() => showLightbox(`/${card.set}/${card.cardnum}`)} src={process.env.PUBLIC_URL + `/${card.set}/${card.cardnum}.jpg`} alt="" />{card.quantity}x</p>
                        <br />
                    </div>
                ))
        : <p>No Cards!</p>}
        </div>

        Main Deck<br/>
        <div className="flexCardImgs">
        {article3Deck1Maindeck.length > 0 ?
                article3Deck1Maindeck.map(card => (
                    <div className="text-row-small">                           
                        <p className="cardImgBoxSmall" ><img className="cardImgSmall" onClick={() => showLightbox(`/${card.set}/${card.cardnum}`)} src={process.env.PUBLIC_URL + `/${card.set}/${card.cardnum}.jpg`} alt="" />{card.quantity}x</p>
                        <br />
                    </div>
                ))
        : <p>No Cards!</p>}
        </div>

        Side Deck<br/>
        <div className="flexCardImgs">
        {article3Deck1Sidedeck.length > 0 ?
                article3Deck1Sidedeck.map(card => (
                    <div className="text-row-small">                           
                        <p className="cardImgBoxSmall" ><img className="cardImgSmall" onClick={() => showLightbox(`/${card.set}/${card.cardnum}`)} src={process.env.PUBLIC_URL + `/${card.set}/${card.cardnum}.jpg`} alt="" />{card.quantity}x</p>
                        <br />
                    </div>
                ))
        : <p>No Cards!</p>}
        </div><br/><br/>
        Runner Up: Alessandro Venditti - <a target="_blank" rel="noopener noreferrer" href="https://build.silvie.org/@Dezmu/FCJVBz5A1QYPrPHAzo0P">Decklist</a><br/>
        3rd: Daniel Li - <a target="_blank" rel="noopener noreferrer" href="https://build.silvie.org/@Dezmu/mtN6GRaQdH89f7iMhOpv">Decklist</a><br/>
        4th: Victor Mercado - <a target="_blank" rel="noopener noreferrer" href="https://build.silvie.org/@Dezmu/z53nUZrJUj6jL3gZ0Cav">Decklist</a><br/>
        5th: Jimmy Chen - <a target="_blank" rel="noopener noreferrer" href="https://build.silvie.org/@Dezmu/GKsixa7wu2ypDZbOY4It">Decklist</a><br/>
        6th: Kermit Chen - <a target="_blank" rel="noopener noreferrer" href="https://build.silvie.org/@Dezmu/xvCrCe9nOhXj2sfaonXO">Decklist</a><br/>
        7th: Stephen Man - <a target="_blank" rel="noopener noreferrer" href="https://build.silvie.org/@Dezmu/cvRojMCZU8lVgomudn7l">Decklist</a><br/>
        8th: Ko Aung - <a target="_blank" rel="noopener noreferrer" href="https://build.silvie.org/@Dezmu/eUml6h951MqEjIJlsK7a">Decklist</a><br/><br/>
        Thanks to Red Riot Games for the information and the tournament stat images. You can check out the original link <a target="_blank" rel="noopener noreferrer" href="https://redriotgames.ca/pages/grand-archive-1k">here</a>.<br/><br/><br/>
    </div>
    
    { articleState.lightboxDisplay ? 
    <div id="lightbox" onClick={() => hideLightBox()}>
        <img id="lightbox-img"  src={process.env.PUBLIC_URL + `${articleState.cardToShow}.jpg`}/>
    </div> : '' }
    </>
}

export default Article3;