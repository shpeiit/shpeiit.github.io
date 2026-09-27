import React from 'react';

import './Carousel.css';

function Carousel({ images }) {
    const carouselRef = React.useRef(null);

    const createImage = (image, index) => {
        const isEnd = (index < 0 || index >= images.length);
        return (
            <img className={`unselectable not-draggable${!isEnd ? ' notEnd' : ''}`} key={index} src={image} alt={`Carousel ${index}`} />
        );
    };

    const handleScroll = () => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const width = carousel.scrollWidth;
        const itemWidth = width / (images.length + 2);

        if (carousel.scrollLeft < itemWidth / 4) {
            carousel.scrollLeft = width - itemWidth * 2;
        } else if (carousel.scrollLeft > width - itemWidth * 5 / 4) {
            carousel.scrollLeft = itemWidth;
        }
    };

    React.useEffect(() => {
        const currentRef = carouselRef.current;
        if (currentRef) {
            currentRef.addEventListener("scroll", handleScroll);
            currentRef.scrollLeft = carouselRef.current.scrollWidth / (images.length + 2);
            handleScroll();
            return () => currentRef.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div className="carouselContainer">
            <div className="carousel" ref={carouselRef}>
                {createImage(images[images.length - 1], -1)}
                {images.map((image, index) => createImage(image, index))}
                {createImage(images[0], images.length)}
            </div>
        </div>
    );
}

export default Carousel;