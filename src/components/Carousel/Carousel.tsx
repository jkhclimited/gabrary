import './Carousel.css';
import React, { FC, useState, useEffect } from 'react';
import carouselSlides from '../../database_carousel/carousel_data.json';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

interface CarouselState {
    idx: number,
    counter: number,
}

const initState: CarouselState = {
    idx: 0,
    counter: 0,
}

const Carousel: FC = () => {
    const [carouselState, setcarouselState] = useState(initState);
    const slides = carouselSlides;

    const nextSlide = () => {
        let newIdx = carouselState.idx + 1;
        if (newIdx > carouselSlides.length - 1) { newIdx = 0 }
        setcarouselState({ ...carouselState, idx: newIdx });
    };

    const prevSlide = () => {
        let newIdx = carouselState.idx - 1;
        if (newIdx < 0) { newIdx = carouselSlides.length - 1}
        setcarouselState({ ...carouselState, idx: newIdx });
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 4500);
        return () => clearInterval(timer);
    })

    return <>
    <div className="carouselMain">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={() => prevSlide()}/>
        {slides.length > 0 ?
            slides.map((slide, idx) => (
                <img className={carouselState.idx === idx ? "carouselIMGs" : "carouselIMGs carouselIMGs-hidden"} src={slide.src} alt={slide.alt} key={idx}/>
            ))
        : <p>No Slides!</p>}
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={() => nextSlide()}/>
        <span className="carouselIndicators">
            {slides.map((slide, idx) => (
                <button onClick={() => setcarouselState({ ...carouselState, idx: idx })} className={carouselState.idx === idx ? "indivIndicator" : "indivIndicator indivIndicator-inactive"}></button>
            ))}
        </span>
    </div>
    </>
}

export default Carousel;