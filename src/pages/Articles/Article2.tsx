import './Article2.css';
import React, { FC, useState } from 'react';
import Article2Deck1 from '../Articles/Article2Deck1.json';
import Article2Deck2 from '../Articles/Article2Deck2.json';


interface Article2State {
    lightboxDisplay: boolean,
    cardToShow: string,
}

const initState: Article2State = { 
    lightboxDisplay: false,
    cardToShow: "",
}

const Article2: FC = () => {
    const [article2State, setarticle2State] = useState(initState);
    const article2Deck1Matdeck = Article2Deck1.filter((card: any) => card.type.includes('materialdeck'));
    const article2Deck1Maindeck = Article2Deck1.filter((card: any) => card.type.includes('maindeck'));
    const article2Deck1Sidedeck = Article2Deck1.filter((card: any) => card.type.includes('sidedeck'));
    const article2Deck2Matdeck = Article2Deck2.filter((card: any) => card.type.includes('materialdeck'));
    const article2Deck2Maindeck = Article2Deck2.filter((card: any) => card.type.includes('maindeck'));
    const article2Deck2Sidedeck = Article2Deck2.filter((card: any) => card.type.includes('sidedeck'));


    const showLightbox = (targetImage: string) => {
        setarticle2State({ ...article2State, lightboxDisplay: true, cardToShow: targetImage });
    };
    
    const hideLightBox = () => {
        setarticle2State({ ...article2State, lightboxDisplay: false });
    };

    return <>
    <img className='indivArticle-main-image' src={process.env.PUBLIC_URL + `/Articles_Images/banner-creative-shock.jpg`} alt='' />
    <p className='indivArticle-header'>June Grand Archive Discord Tournament</p>
    <div className='indivArticle-author-date-line'>
        <div className='indivArticle-author-date indivArticle-author'>by Gabary</div>
        <div className='indivArticle-author-date indivArticle-date'>June 23, 2023</div>
    </div>
    <div className='indivArticle-article'>
        Over the weekend Officer Slimelight of the Grand Archive Community Discord hosted an online tournament that had an amazing 46 participants. Lorraine was the most represented at 27 pilots, Rai with 11, Zander 4, Silvie, merlin and mordered all coming in with 1 pilot.<br/><br/>
        The field was dominated by fire with 26 spirt of fire builds, 14 of which was Lorraine. Lorraine ended up with a total of 14 Fire, 11 wind and 6 water elemental based decks.<br/><br/>
        You can see the break down of the stats below<br/><br/>
        <img className='indivArticle-embedIMG' id='embed1' src={process.env.PUBLIC_URL + `/Articles_Images/june-ga-discord-tournament-embed1.png`}/>
        <img className='indivArticle-embedIMG' id='embed2' src={process.env.PUBLIC_URL + `/Articles_Images/june-ga-discord-tournament-embed2.png`}/>
        If you have not joined the discord community come <a href="https://discord.gg/grandarchivetcg">here</a><br/><br/>
        Check out the top 8 results below as well as some comments from the two 5-0 players!<br/><br/>
        5-0 Player #1: AzNat - <a href="https://build.silvie.org/@AzNat/CxnqGjK2GxwH280oJbtU">Decklist</a><br/><br/>
        The decision to run this particular build of Lorraine was driven mostly by my love of playing tribal decks in mtgs commander format and enjoyment in watching a bunch of smaller pieces synergize together to accomplish something. The issue I’ve had with events in the past is said smaller pieces are susceptible to being killed before they can accomplish anything.<br/><br/>
        Fire Lorraine’s <b>Flame Sweep</b> in combination with her level 2s on enter effect that buffs her attacks for the turn by 2 and draws a card whenever she kills a unit. In general they will play around a potential <b>Favorable Wind</b>s that would buff any <b>Phalanx Captain</b>s and <b>Tactful Sergeant</b>s to 5 health. With so many fire Lorraine’s running rampart in events at the moment I knew I needed a way to somehow off-set these huge swing turns their lvl 2 could bring. Which lead me to the odd card out of this deck compared to other wind Lorraine builds I’ve seen, <b>Song of Nurturing</b>, for 2 costs provides all allies with 2 extra health for a turn.<br/><br/>
        I included this at 4 in this deck in an attempt to stop my early game <b>Tactful Sergeant</b>s and <b>Phalanx Captain</b>s from being turned into a +1 in card advantage for my opponent by a <b>Flame Sweep</b> (+2 if you count the now dead ally). The song wont save any allies that don’t already have 4 health, eg <b>Swift Recruit</b> and <b>Honorable Vanguard</b>, but those allies are often preferred to be in discard pile anyways to be used in following turns as floating memory.<br/><br/>
        I ended up versing 3 fire Lorraine’s during this event and the song of nurturing came in clutch a few times. The first time I used it against an opponent it was generally a surprise and would indeed prevent them from drawing several cards off cleaving my board. Any games after they were forced to play around me potentially having the song in hand again or risk spending their entire lvl 2 turn cleaving and not actually accomplishing anything, overall the card performed exactly how I envisioned.<br/><br/>
        At the end of the day my deck performed very well against tough competition I couldn’t be happier with the outcome. I would like to thank Limelight and his team who continue to run these events across several discord servers for often no entry cost and with full prize support plus raffles for participants. While their efforts do not go unnoticed by us players I feel like they are very much underappreciated for the amount of effort they put in while asking nothing in return so thank you to everyone who was involved in organizing this event for giving us a medium in which to play this game we’ve come to love.<br/><br/>
        -AzNat<br/><br/><br/>

        Material Deck<br/>
        <div className="flexCardImgs">
        {article2Deck1Matdeck.length > 0 ?
                article2Deck1Matdeck.map(card => (
                    <div className="text-row-small">                           
                        <p className="cardImgBoxSmall" ><img className="cardImgSmall" onClick={() => showLightbox(`/${card.set}/${card.cardnum}`)} src={process.env.PUBLIC_URL + `/${card.set}/${card.cardnum}.jpg`} alt="" />{card.quantity}x</p>
                        <br />
                    </div>
                ))
        : <p>No Cards!</p>}
        </div>

        Main Deck<br/>
        <div className="flexCardImgs">
        {article2Deck1Maindeck.length > 0 ?
                article2Deck1Maindeck.map(card => (
                    <div className="text-row-small">                           
                        <p className="cardImgBoxSmall" ><img className="cardImgSmall" onClick={() => showLightbox(`/${card.set}/${card.cardnum}`)} src={process.env.PUBLIC_URL + `/${card.set}/${card.cardnum}.jpg`} alt="" />{card.quantity}x</p>
                        <br />
                    </div>
                ))
        : <p>No Cards!</p>}
        </div>

        Side Deck<br/>
        <div className="flexCardImgs">
        {article2Deck1Sidedeck.length > 0 ?
                article2Deck1Sidedeck.map(card => (
                    <div className="text-row-small">                           
                        <p className="cardImgBoxSmall" ><img className="cardImgSmall" onClick={() => showLightbox(`/${card.set}/${card.cardnum}`)} src={process.env.PUBLIC_URL + `/${card.set}/${card.cardnum}.jpg`} alt="" />{card.quantity}x</p>
                        <br />
                    </div>
                ))
        : <p>No Cards!</p>}
        </div><br/><br/>

        5-0 Player #2: Blueskycandy - <a href="https://build.silvie.org/@BlueSkyCandy/vPxrLXr1PgHmgGtYBz9d">Decklist</a><br/><br/>
        This deck was selected because it is quite an all-rounded deck with multiple angles to close the game. The basis of this deck construction uses the shell of the famous “Ferrari Wind Lorraine” deck made by limelight that allows you to draw lots of cards when you hit level 3. The ability to draw lots of cards allows you to play different lines, as well as counteract the loss of cards when you are blitzing to level 3 in various ways (e.g <b>Beseech the Winds</b> and <b>Dungeon Guide</b>s). The 2 main ways to close the game are the wind human tribal package with lots of units, and <b>Spirit Blade: Ensoul</b> in combination with <b>Banner Knight</b> (if you have enough cards for it) which I took inspiration from BillytheKid/Scrambyeggs after playing against him in a local tournament in Australia.<br/><br/>
        In terms of sideboard, 2 <b>Cry for Help</b> are useful against the traditional “Ferrari Wind Lorraine” or the Fire variant of it that utilizes <b>Spirit Blade: Infusion</b> to buff a sword massively to swing at the champion. The extra phalanx captain as well is useful against decks that do poorly against large board states like Rai or possibly Zander pre-luxem. <b>Spirit Blade: Dispersion</b> is useful against water decks or Rai where they run defenses like <b>Water Barrier</b> and <b>Spellshield: Arcane</b>.<br/><br/>
        Overall, I had a lot of fun in this tournament and got to play against a huge variety of players and decks. Special shoutout to Weebs of the Shore who sponsored the prizing and Limelight who took personal time off to host this this amazing tournament.<br/><br/>
        - Blueskycandy<br/><br/><br/>

        Material Deck<br/>
        <div className="flexCardImgs">
            {article2Deck2Matdeck.length > 0 ?
                    article2Deck2Matdeck.map(card => (
                        <div className="text-row-small">                           
                            <p className="cardImgBoxSmall" ><img className="cardImgSmall" onClick={() => showLightbox(`/${card.set}/${card.cardnum}`)} src={process.env.PUBLIC_URL + `/${card.set}/${card.cardnum}.jpg`} alt="" />{card.quantity}x</p>
                            <br />
                        </div>
                    ))
            : <p>No Cards!</p>}
        </div>

        Main Deck<br/>
        <div className="flexCardImgs">
            {article2Deck2Maindeck.length > 0 ?
                    article2Deck2Maindeck.map(card => (
                        <div className="text-row-small">                           
                            <p className="cardImgBoxSmall" ><img className="cardImgSmall" onClick={() => showLightbox(`/${card.set}/${card.cardnum}`)} src={process.env.PUBLIC_URL + `/${card.set}/${card.cardnum}.jpg`} alt="" />{card.quantity}x</p>
                            <br />
                        </div>
                    ))
            : <p>No Cards!</p>}
        </div>

        Side Deck<br/>
        <div className="flexCardImgs">
            {article2Deck2Sidedeck.length > 0 ?
                    article2Deck2Sidedeck.map(card => (
                        <div className="text-row-small">                           
                            <p className="cardImgBoxSmall" ><img className="cardImgSmall" onClick={() => showLightbox(`/${card.set}/${card.cardnum}`)} src={process.env.PUBLIC_URL + `/${card.set}/${card.cardnum}.jpg`} alt="" />{card.quantity}x</p>
                            <br />
                        </div>
                    ))
            : <p>No Cards!</p>}
        </div><br/><br/>

        Rest of the Top 8:<br/><br/>
        3rd: <a href="https://build.silvie.org/@/N4IgMgsgng0lBqBhATAeQJwgFwEYA0IAIgA4AShA4gIYAayACgHbb4gAqAUmwKYDqAxgC1GAZwCKLAgDkAZgCNBABkYB7AK4BlCbgLcNAQQCS9AOwBbAB7oAXpJD61ADm5TkHAC5q1dgCbE16GQUNAAsjr5mcgBCNABKbPCGANZ2hNaOhorcHNZUMnYAVgBiOPBqhrEmVABsdsgA5gBuJoSIijCGhHZRAJqKAKKOIgCW6Mi1OiBSisPE6QCqvADu+VghBIhiOHIW81DDitrrIFEAjoRLIRDcwyGI2Mfw8NX6hD4QAE4fAKwPBIQjWLWdyKdwfGh-EAiFSoADMAAsClR4DIpNhYQR9O4cPMpLEKCYiop0QQihRGqcQtwxPQ5PRIY0oLECoRTgAbRRsWKQ+gfMJJGiMKgiJYkkD9D6kRRswxnEK2LDIAj8XgcU4aJbwmD9I4EEJUExiMBgdQUFJrXRmarcfrw9CnRxQSH1ExqQioMzzGTIbyKgjDQiOU5yYj6RzWX5YDEgejoHo4MTffhiRRFbBKkCIepQDgWYj9erWJIAWhE6YIpyo+lhIhoRViRR6pfLIDUHxgFn48wK1nQVGbkygBWQHw4UVi-VIjgHrA0SX03Bw8JF31IA4zH148KKiEcNCiVFILaFZm42BA1A+cio9W4AFJkIpYQA6YkEHzcET8D6zdzDFTMFgIAgAAvkAA">CAWFEEtheMerchant</a><br/>
        4th: <a href="https://build.silvie.org/@Tan/SAC0D2gh1XuIV0PhDGTQ">t.ang</a><br/>
        5th: <a href="https://build.silvie.org/@Mazurani/66mHixIO6luBpPYY9rUW">Mazurani 3780</a><br/>
        6th: <a href="https://build.silvie.org/@JimmyLe/JwVYyMJWXlhi8MrPcNQl">Jimmyhl1329</a><br/>
        7th: <a href="https://build.silvie.org/@Biefall/bQQUyBbbA5VRBx6FKz6Z">Biefall</a><br/>
        8th: <a href="https://build.silvie.org/@Anemone/FdNN7jM79D8kJ4Jx2lB7">Anemone</a><br/><br/><br/>
    </div>
    { article2State.lightboxDisplay ? 
    <div id="lightbox" onClick={() => hideLightBox()}>
        <img id="lightbox-img"  src={process.env.PUBLIC_URL + `${article2State.cardToShow}.jpg`}/>
    </div> : '' }
    </>
}

export default Article2;