import './Article1.css';
import React, { FC, useState } from 'react';


interface Article1State {
    lightboxDisplay: boolean,
    cardToShow: string,
}

const initState: Article1State = {
    lightboxDisplay: false,
    cardToShow: "",
}

const Article1: FC = () => {
    const [article1State, setarticle1State] = useState(initState);

    const showLightbox = (targetImage: string) => {
        setarticle1State({ ...article1State, lightboxDisplay: true, cardToShow: targetImage });
    };
    
    const hideLightBox = () => {
        setarticle1State({ ...article1State, lightboxDisplay: false });
    };

    return <>
    <img className='indivArticle-main-image' src={process.env.PUBLIC_URL + `/Articles_Images/june-19-ban-and-restriction-announcement-image-1.jpg`} alt=''></img>
    <p className='indivArticle-header'>June 19th Ban & Restriction Announcement</p>
    <div className='indivArticle-author-date-line'>
        <div className='indivArticle-author-date indivArticle-author'>by Remetic</div>
        <div className='indivArticle-author-date indivArticle-date'>June 21, 2023</div>
    </div>
    <div className='indivArticle-article'>The Ban & Restricted announcement from June 19th introduced how Weebs of the Shore will be handling the ban list, being split into 3 different categories.<br /><br />
        Category 3 will contain all cards that are banned or restricted. There isn’t much to speak about this portion as there aren’t any cards on it, but we can expect to see cards that are deemed too powerful to either be placed in this category when they are restricted to less copies or banned.<br /><br />
        Category 2 serves as a “present-meta watchlist”. Our first 2 cards introduced will be <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/64")}>Sword of Avarice</b> and <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/246")}>Reckless Conversion</b>.<br /><br />
        <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/64")}>Sword of Avarice</b>, when paired with <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/251")}>Spirit Blade: Ascension</b> and <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/248")}>Crux Sight</b>, created a hand-neutral loop in the game. This allows players to continuously draw cards, giving them advantages in defensive plays with <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/229")}>Veiling Breeze</b> while also searching for necessary offensive cards. Momentum granted by this is more powerful than intended by the developers so it will be monitored during the coming months.<br /><br />
        <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/246")}>Reckless Conversion</b> has a similar impact in Rai as well. Cards like <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/102")}>Peer Into Mana</b> and <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/240")}>Arcane Disposition</b> could generate advantage in memory while drawing new cards, and <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/246")}>Reckless Conversion</b> allowed players to retrieve those cards in the same turn. While it was intended as a win condition for Rai with a large memory, the certainty of winning on the same turn isn't always 100%, which could lead to longer match times where the defending player could not concede.<br /><br />
        Cards that will be released in Fractured Crown are expected to reduce the power level of both Sword of Avarice and Reckless Conversion. Tithe Proclamation limits draws for both players, and can punish Rai players who rely heavily on draw power to refill their hand after quickly leveling. However, certain cards like <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/248")}>Crux Sight</b> and <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/251")}>Spirit Blade: Ascension</b>, being fast speed cards, may bypass the effects of <b className="embedIMG" onClick={() => showLightbox("/FTC_Images/9")}>Tithe Proclamation</b>, allowing Lorraine players to draw cards and develop card advantage on their opponents turn. Do not expect <b className="embedIMG" onClick={() => showLightbox("/FTC_Images/9")}>Tithe Proclamation</b> to be an absolute answer to Crux draw power.<br /><br />
        Category 1, also a watchlist like Category 2, focuses more on cards that could have long-term negative effects on deck building and the overall metagame rather than just the current state of the game.<br /><br />The first 2 cards are <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/125")}>Creative Shock</b> and <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/226")}>Tactful Sergeant</b>. Weebs of the Shore acknowledges these cards have become staples in fire decks and wind-attack decks, considering Grand Archive has only 1 set release. However, they may become too prevalent in the future.<br /><br />
        <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/226")}>Tactful Sergeant</b> is a favored card in wind Lorraine deck lists. It works well in slower games, allowing players to put cards into memory for future turns without losing card advantage. Expected to become a staple in the decks available down the line, such as Ranger and Guardian. It also serves as a valuable tool for wind players to place a large number of cards into memory for <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/229")}>Veiling Breeze</b>, increasing their defensive power.<br /><br />
        <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/158")}>Varuck, Smoldering Spire</b> is another fire card on the Category 1 list. Currently, options to remove domains are limited to <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/259")}>Excalibur, Cleansing Light</b>, and in FTC, <b className="embedIMG" onClick={() => showLightbox("/FTC_Images/88")}>Uther, Illustrious King</b>. Varuck nullifies all damage reduction in the game, making it the most potent domain and countering most defensive strategies players have against fire decks. Depending on future set releases, Varuck may be moved to Category 3 if it becomes too dominant.<br /><br />
        <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/170")}>Freezing Hail</b> will be monitored due to its ability to stop champions from attacking. <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/170")}>Freezing Hail</b> has the potential to nullify attack-based champion’s gameplans in the future. Each copy draw prevents the champion from attacking for a turn past its first attack. Because of this, it will be closely observed in the coming months, especially after the launch of FTC to evaluate the impact against decks that rely on champions for their offensive strategies.<br /><br />
        While this is a strong start, some cards could also be added to the watchlist. Cards like <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/134")}>Fireball</b>, while not developing card advantage like <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/226")}>Tactful Sergeant</b> or <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/125")}>Creative Shock</b>, do circumvent some of the defensive options players have against Rai because of it’s fast speed, which most arcane cards lack. Operating as one of the few win conditions in the basic elements, cards like <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/244")}>Erratic Bolt</b> don’t see play in Fire Rai because <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/134")}>Fireball</b> is seen as a strictly better option.<br /><br />
        Additionally, <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/251")}>Spirit Blade: Ascension</b> could also be looked at. By allowing players to prematurely access Crux swords, as well as “flicker” them, players are able to create combos that leave no space for interaction. While <b className="embedIMG" onClick={() => showLightbox("/DOAAlter_Images/64")}>Sword of Avarice</b> is seen as a problem, Ascension limits design space of all future sword regalia, due to its ability to ignore element restrictions and repeat On Enter abilities.<br /><br />
        I believe this is an intelligent way to handle restrictions, giving players notice of what cards are being looked at to have balancing issues. With the next announcement planned for August 25th(Launch of FTC), we should expect updates on each card mentioned, as well as other cards that see extensive play. Category 1 and 2 give us insight to what cards are being observed, and more importantly, the reasons they are monitored. Other major TCGs don’t provide transparency on what cards are on a watchlist, or reasoning behind restrictions. This also gives players insight into the design philosophy of the developers and why certain cards are designed the way they are, and which cards operate outside of intended purpose. I look forward to any future updates the Weebs of the Shore team have for us.
    </div>
    { article1State.lightboxDisplay ? 
    <div id="lightbox" onClick={() => hideLightBox()}>
        <img id="lightbox-img"  src={process.env.PUBLIC_URL + `${article1State.cardToShow}.jpg`}/>
    </div> : '' }
    </>
}

export default Article1;