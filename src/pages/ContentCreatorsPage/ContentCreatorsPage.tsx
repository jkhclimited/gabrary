import './ContentCreatorsPage.css';
import React, { FC } from 'react';

const ContentCreatorsPage: FC = () => <>
    <div className='contentCreatorsMainDiv'>
        <h2 className='creators-header'>Content Creators</h2>
        <div className='contentCreator' id='lineageBreak'>
            <p className='contentCreatorName'>Lineage Break</p>
            <iframe className='videoArea' src='https://www.youtube.com/embed?listType=playlist&list=UULFVfOMFfdrjR50pEnLsVrNeA' title='Latest LineageBreak video' allowFullScreen></iframe>
        </div>
        <div className='contentCreator' id='maindeck'>
            <p className='contentCreatorName'>Maindeck</p>
            <iframe className='videoArea' src='https://www.youtube.com/embed?listType=playlist&list=UULFgdCrVrpiH9XZUfamvuSOHA' title='Latest Maindeck video' allowFullScreen></iframe>
        </div>
        <div className='contentCreator' id='tm32'>
            <p className='contentCreatorName'>TM32</p>
            <iframe className='videoArea' src='https://www.youtube.com/embed?listType=playlist&list=UULF82Nu1M_YE6ju9dihgI8ieg' title='Latest TM32 video' allowFullScreen></iframe>
        </div>
        <div className='contentCreator' id='adventureCoGaming'>
            <p className='contentCreatorName'>Adventure Co. Gaming</p>
            <iframe className='videoArea' src='https://www.youtube.com/embed?listType=playlist&list=UULF19n08j8gULeRiYlbyOUibg' title='Latest AdventureCo. Gaming video' allowFullScreen></iframe>
        </div>
        <div className='contentCreator' id='gazimus'>
            <p className='contentCreatorName'>Gazimus</p>
            <iframe className='videoArea' src='https://www.youtube.com/embed?listType=playlist&list=UULFT3IDqrPuTjnBP7pJWNDUdg' title='Latest Gazimus video' allowFullScreen></iframe>
        </div>
        <div className='contentCreator' id='trueChampionGaming'>
            <p className='contentCreatorName'>True Champion Gaming</p>
            <iframe className='videoArea' src='https://www.youtube.com/embed?listType=playlist&list=UULFHGnCeBHoOdcsdb1X0Oi9qg' title='Latest True Champion Gaming video' allowFullScreen></iframe>
        </div>
        <div className='contentCreator' id='duoLeveling'>
            <p className='contentCreatorName'>Duo Leveling</p>
            <iframe className='videoArea' src='https://www.youtube.com/embed?listType=playlist&list=UULF9AyD8AoWSKovWQWYsNzL4g' title='Latest Duo Leveling video' allowFullScreen></iframe>
        </div>
        <div className='contentCreator' id='valkyrieLoaf'>
            <p className='contentCreatorName'>Valkyrie Loaf</p>
            <iframe className='videoArea' src='https://www.youtube.com/embed?listType=playlist&list=UULFbeUkp8rjl4r4fJs6Gna5Pg' title='Latest Valkyrie Loaf video' allowFullScreen></iframe>
        </div>
        <div className='contentCreator' id='tcgUniversity'>
            <p className='contentCreatorName'>TCG University</p>
            <iframe className='videoArea' src='https://www.youtube.com/embed?listType=playlist&list=UULFQV2kpzxO-JaYUQZYVGHTuQ' title='Latest TCG University video' allowFullScreen></iframe>
        </div>
        <div className='contentCreator' id='redZoneRogue'>
            <p className='contentCreatorName'>Red Zone Rogue</p>
            <iframe className='videoArea' src='https://www.youtube.com/embed?listType=playlist&list=UULFSl5xtiqtMuSFmO9Gs866ug' title='Latest Red Zone Rogue video' allowFullScreen></iframe>
        </div>
        <div className='contentCreator' id='creativeShock'>
            <p className='contentCreatorName'>Creative Shock</p>
            <iframe className='videoArea' src='https://www.youtube.com/embed?listType=playlist&list=UULF9XCeZbyVmWWXaLc2o-KLjg' title='Latest Creative Shock video' allowFullScreen></iframe>
        </div>
    </div>
</>

export default ContentCreatorsPage;