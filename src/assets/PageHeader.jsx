import { useState } from 'react';
import './PageHeader.css';

function PageHeader({ title, subtitle, subtitle2, image }) {
    const tempImage = new Image();
    tempImage.src = image;
    const [imageAspectRatio, setImageAspectRatio] = useState(1);
    tempImage.onload = () => {
        setImageAspectRatio(tempImage.width / tempImage.height);
    }

    return <div className="PageHeader unselectable not-draggable">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        {subtitle2 && <h3>{subtitle2}</h3>}
        {image && <div style={{ '--aspect-ratio': imageAspectRatio }} className="imgContainer">
            <img className="not-draggable" src={image} alt="" />
        </div>}
    </div>
}

export default PageHeader