import LinkElem from './LinkElem';
import './ExecCard.css';

const linkedinIcon = "/socials/linkedin-logo.png";
const emailIcon = "/socials/email-icon.png";

const placeholderImage = "HeadshotPlaceholder.png";

const emptyNameVals = ["", "n/a", "none", null, undefined];

function ExecCard({ name, position, image, email, linkedIn, major }) {
    if (!image) {
        image = placeholderImage;
    }

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
                <img className='not-draggable' src={image} />
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