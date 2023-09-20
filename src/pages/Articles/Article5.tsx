import './ArticleTemplate.css';
import React, { FC, useState } from 'react';
import Article5Deck1 from '../Articles/Article5Deck1.json';


interface ArticleState {
    lightboxDisplay: boolean,
    cardToShow: string,
}

const initState: ArticleState = {
    lightboxDisplay: false,
    cardToShow: "",
}

const Article5: FC = () => {
    const [articleState, setarticleState] = useState(initState);
    const Article5Deck1Matdeck = Article5Deck1.filter((card: any) => card.type.includes('materialdeck'));
    const Article5Deck1Maindeck = Article5Deck1.filter((card: any) => card.type.includes('maindeck'));
    const Article5Deck1Sidedeck = Article5Deck1.filter((card: any) => card.type.includes('sidedeck'));

    const showLightbox = (targetImage: string) => {
        setarticleState({ ...articleState, lightboxDisplay: true, cardToShow: targetImage });
    };
    
    const hideLightBox = () => {
        setarticleState({ ...articleState, lightboxDisplay: false });
    };

    return <>
    <img className='indivArticle-main-image' src={process.env.PUBLIC_URL + `/Articles_Images/insert-image-name.jpg`} alt='' />
    <p className='indivArticle-header'>Grand Archive Official Discord - FTC TTS 1</p>
    <div className='indivArticle-author-date-line'>
        <div className='indivArticle-author-date indivArticle-author'>Gabrary</div>
        <div className='indivArticle-author-date indivArticle-date'>September 20, 2023</div>
    </div>
    <div className='indivArticle-article'>
    1st Place: xBurner34 - <a target="_blank" rel="noopener noreferrer" href="https://build.silvie.org/@UnsungCrown/BMFlsGgM9OsZe0DDh1Ti">Decklist</a><br/><br/>

    The reason I decided to run Fire Merlin for this event is that I didn't have the water cards. Some of the cards I know that might be asked about is the <b className="embedIMG" onClick={() => showLightbox("/FTC_Images/54")}>Incendiary Fractal</b>, <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/256")}>Spirit's Blessing</b> and the water trinket.<br/><br/>
    In terms of the water trinket this was me expecting to see alot more water decks in the meta which didn't end up being the case in my matchups. The <b className="embedIMG" onClick={() => showLightbox("/FTC_Images/54")}>Incendiary Fractal</b>  was there to potentially help clear board early with the <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/256")}>Spirit's Blessing</b> there to pressure the late game. When you reach even level counters your <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/112")}>Sudden Steel</b> and <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/107")}>Savage Slash</b> + <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/256")}>Spirit's Blessing</b> + another gets in for an amazing chunk of damage.<br/><br/>
    I do have some possible changes though if I would run the list again. I would cut down the <b className="embedIMG" onClick={() => showLightbox("/FTC_Images/54")}>Incendiary Fractal</b> to a 2x just due to the amount of times the card was dead in hand, same with <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/248")}>Crux Sight</b>. <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/248")}>Crux Sight</b> can be cut completely out of the deck if not feeling the benefit of the card. I was debating changing some of these cards with 2 copies of <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/97")}>Library Witch</b> or including more floating memory cards that can be utilized if need be. Finally the last FTC card that is on the fence is <b className="embedIMG" onClick={() => showLightbox("/FTC_Images/32")}>Fast Cure</b>, most of the time it was just used for fast speed floating memory, this can be easily swapped out for <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/136")}>Flame-Rune Swordsman</b> for board pressure and creative shock value.<br/><br/>

        Material Deck<br/>
        <div className="flexCardImgs">
        {Article5Deck1Matdeck.length > 0 ?
                Article5Deck1Matdeck.map(card => (
                    <div className="text-row-small">                           
                        <p className="cardImgBoxSmall" ><img className="cardImgSmall" onClick={() => showLightbox(`/${card.set}/${card.cardnum}`)} src={process.env.PUBLIC_URL + `/${card.set}/${card.cardnum}.jpg`} alt="" />{card.quantity}x</p>
                        <br />
                    </div>
                ))
        : <p>No Cards!</p>}
        </div>
        
        Main Deck<br/>
        <div className="flexCardImgs">
        {Article5Deck1Maindeck.length > 0 ?
                Article5Deck1Maindeck.map(card => (
                    <div className="text-row-small">                           
                        <p className="cardImgBoxSmall" ><img className="cardImgSmall" onClick={() => showLightbox(`/${card.set}/${card.cardnum}`)} src={process.env.PUBLIC_URL + `/${card.set}/${card.cardnum}.jpg`} alt="" />{card.quantity}x</p>
                        <br />
                    </div>
                ))
        : <p>No Cards!</p>}
        </div>

        Side Deck<br/>
        <div className="flexCardImgs">
        {Article5Deck1Sidedeck.length > 0 ?
                Article5Deck1Sidedeck.map(card => (
                    <div className="text-row-small">                           
                        <p className="cardImgBoxSmall" ><img className="cardImgSmall" onClick={() => showLightbox(`/${card.set}/${card.cardnum}`)} src={process.env.PUBLIC_URL + `/${card.set}/${card.cardnum}.jpg`} alt="" />{card.quantity}x</p>
                        <br />
                    </div>
                ))
        : <p>No Cards!</p>}
        </div><br/><br/>


    </div>
    { articleState.lightboxDisplay ? 
    <div id="lightbox" onClick={() => hideLightBox()}>
        <img id="lightbox-img"  src={process.env.PUBLIC_URL + `${articleState.cardToShow}.jpg`}/>
    </div> : '' }
    </>
}

export default Article5;