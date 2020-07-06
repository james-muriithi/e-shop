import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Row,
    Col
} from 'reactstrap';
import Image from './SliderImage';


  

const items = [
    {
        src: 'slider01.jpg',
        altText: 'Slide 1',
    },
    {
        src: 'slider02.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: 'slider03.jpg',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

const HomeCarousel = (props) => {
    const [ activeIndex, setActiveIndex ] = useState(0);
    const [ animating, setAnimating ] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <Image src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <Row className="px-1">
            <Col>
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}>
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </Col>
        </Row>
    );
}

export default HomeCarousel;