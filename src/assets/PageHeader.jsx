import { useEffect, useState, useRef } from 'react';
import './PageHeader.css';

function PageHeader({ title, subtitle, subtitle2, image, imageLowres }) {
    const imageRef = useRef(null);


    const [imageAspectRatio, setImageAspectRatio] = useState(1);
    useEffect(() => {
        const tempImage = new Image();
        tempImage.src = image;
        let isLoaded = false;
        tempImage.onload = () => {
            isLoaded = true;
            setImageAspectRatio(tempImage.width / tempImage.height);
            imageRef.current && (imageRef.current.src = image);
        }
        const lowResImage = new Image();
        lowResImage.src = imageLowres;
        lowResImage.onload = () => {
            if (isLoaded) return;
            setImageAspectRatio(lowResImage.width / lowResImage.height);
            imageRef.current && (imageRef.current.src = imageLowres);
        };
    }, [image]);

    return <div className="PageHeader unselectable not-draggable">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        {subtitle2 && <h3>{subtitle2}</h3>}
        {image && <div style={{ '--aspect-ratio': imageAspectRatio }} className="imgContainer">
            <img ref={imageRef} className="not-draggable" src={image} alt="" />
        </div>}
    </div>
}

export default PageHeader