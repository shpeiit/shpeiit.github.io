import React from 'react';

import './Carousel.css';

function Carousel({ images }) {
    const carouselContainerRef = React.useRef(null);
    let currentIndex = 0;
    let canChange = true;

    React.useEffect(() => {
        updateMarkers();
        if (carouselContainerRef.current) {
            const carousel = carouselContainerRef.current.querySelector('.carousel');
            if (carousel) {
                carousel.style.setProperty('--current-index', currentIndex);
                carousel.style.setProperty('--animation-time', '0.2s');
            }
        }
    }, []);

    const updateMarkers = () => {
        if (carouselContainerRef.current == null) return;
        const carouselContainer = carouselContainerRef.current;
        const markers = carouselContainer.querySelectorAll('.carouselMarker'); 

        markers.forEach((marker) => {
            const id = marker.id;
            const index = parseInt(id.replace('carouselMarker-', ''), 10);

            if (index === currentIndex) {
                marker.classList.add('active');
            } else {
                marker.classList.remove('active');
            }
        });
    };

    const animateToIndex = (index) => {
        if (carouselContainerRef.current == null) return;
        const carouselContainer = carouselContainerRef.current;
        const carousel = carouselContainer.querySelector('.carousel');
        if (!carousel) return;
        if (!canChange) return;
        canChange = false;
        
        carousel.style.setProperty('--animation-time', '0.2s');
        // also handles index = -1, index = images.length
        carousel.style.setProperty('--current-index', index);

        let needsIndexReset = true;
        if (index === -1) {
            currentIndex = images.length - 1;
        } else if (index === images.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
            needsIndexReset = false;
        }
        updateMarkers();
        setTimeout(() => {
            if (needsIndexReset === true) {
                carousel.style.setProperty('--current-index', currentIndex);
                carousel.style.setProperty('--animation-time', '0s');
            }
            canChange = true;
        }, 205);
    };

    const handleMarkerClick = (index) => {
        if (carouselContainerRef.current == null) return;
        const carouselContainer = carouselContainerRef.current;
        const carousel = carouselContainer.querySelector('.carousel');
        if (!carousel) return;
        
        animateToIndex(index);
    };

    const handleArrowClick = (direction) => {
        if (carouselContainerRef.current == null) return;
        const carouselContainer = carouselContainerRef.current;
        const carousel = carouselContainer.querySelector('.carousel');
        if (!carousel) return;

        let newIndex = currentIndex + direction;
        animateToIndex(newIndex);
    };

    return (
        <div className="carouselContainer" ref={carouselContainerRef}>
            <div className="carousel">
                <img className="unselectable not-draggable" key={"wrap-start"} src={images[images.length - 1]} alt={`Carousel wrap-start`} />
                {images.map((image, index) => (
                    <img className="unselectable not-draggable" key={index} src={image} alt={`Carousel ${index}`} />
                ))}
                <img className="unselectable not-draggable" key={"wrap-end"} src={images[0]} alt={`Carousel wrap-end`} />
            </div>
            <div className="carouselArrows unselectable">
                <button className="carouselArrow left" onClick={() => handleArrowClick(-1)}>◄</button>
                <button className="carouselArrow right" onClick={() => handleArrowClick(1)}>►</button>
            </div>
            <div className="carouselMarkers">
                {images.map((_, index) => (
                    <button id={`carouselMarker-${index}`} key={index} className="carouselMarker" onClick={() => handleMarkerClick(index)}></button>
                ))}
            </div>
        </div>
    )

    // TODO: for the future, might want to deal with large count of marker buttons
}

export default Carousel;