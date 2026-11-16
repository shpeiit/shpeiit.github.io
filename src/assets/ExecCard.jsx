import { useEffect } from 'react';
import LinkElem from './LinkElem';
import './ExecCard.css';

const linkedinIcon = "/socials/linkedin-logo.png";
const emailIcon = "/socials/email-icon.png";

const placeholderImage = "/HeadshotPlaceholder.png";

const emptyNameVals = ["", "n/a", "none", null, undefined];

function getImageUrl(imageId) {
    if (!imageId) return {full: placeholderImage, lowres: null};
    const full = `https://drive.google.com/thumbnail?id=${imageId}`; 
    const lowres = `https://drive.google.com/thumbnail?id=${imageId}&sz=w100`;

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            if (img.complete && img.src === lowres) {
                img.src = full;
                img.onload = null; // remove the onload handler after preloading
            }
            // do nothing, just preloading the image
        };
        img.src = lowres;
    }, [imageId]);

    return {full, lowres};
}

function ExecCard({ name, position, imageId, email, linkedIn, major }) {
    const image = getImageUrl(imageId);

    let classes = "execCard";
    if (emptyNameVals.includes(name?.toLowerCase())) {
        classes += " empty unselectable";
        email = null;
        linkedIn = null;
        major = null;
    }

    return (
        <div className={classes}>
            <div className="imageContainer unselectable">
                <img className='not-draggable' src={image.full} style={{backgroundImage: `url(${image.lowres})`}}  />
            </div>
            <h2>
                {linkedIn && <LinkElem link={linkedIn} icon={linkedinIcon} iconLeft={false}>
                {name}
                </LinkElem>}
                {!linkedIn && name}
            </h2>
            <h3>
                {email && <LinkElem link={`mailto:${email}`} icon={emailIcon} iconLeft={false}>{position}</LinkElem>}
                {!email && position}
            </h3>
            {major && <p>{major}</p>}
            <p className="socials unselectable">
                {email && <LinkElem link={`mailto:${email}`}>
                <img src={emailIcon} className='not-draggable' />
                </LinkElem>}
                {linkedIn && <LinkElem link={linkedIn}>
                <img src={linkedinIcon} className='not-draggable' />
                </LinkElem>}
            </p>
        </div>
    );
}

export default ExecCard;