import './EventCard.css';

function parseDate(startTime, endTime){
    if (startTime) {
        startTime = new Date(startTime);
    }
    if (endTime) {
        endTime = new Date(endTime);
    }
    
    if (!startTime || !endTime) {
        return { startTime, endTime };
    }

    const bothCurrYear = startTime.getFullYear() === new Date().getFullYear() && endTime.getFullYear() === new Date().getFullYear();

    const getHoursMinutes = (time) => time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateOmitYearIfCurr = (time) => {
        if (time.getFullYear() === new Date().getFullYear() && bothCurrYear) {
            return time.toLocaleString([], { month: 'short', day: 'numeric' });
        }
        return time.toLocaleString([], { month: 'short', day: 'numeric', year: 'numeric' });
    }

    // same day, show full start time and only the time for the end time
    if (startTime && endTime && startTime.getDay() === endTime.getDay()) {
        startTime = dateOmitYearIfCurr(startTime) + ' ' + getHoursMinutes(startTime);
        endTime = getHoursMinutes(endTime);
    } else if (startTime && endTime) {
        startTime = dateOmitYearIfCurr(startTime) + ' ' + getHoursMinutes(startTime);
        endTime = dateOmitYearIfCurr(endTime) + ' ' + getHoursMinutes(endTime);
    }

    return { startTime, endTime };
}

function EventCard({ title, startTime, endTime, location, 
    description, type, thumbnail, thumbnailLowres, onLearnMore, 
    showPlaceholderValues=false, foodProvided=false,
    collaborators=""
}) {
    ({startTime, endTime} = parseDate(startTime, endTime));

    if (showPlaceholderValues) {
        if (!title) {
            title = "Event Name";
        }
        if (!startTime) {
            startTime = "Event Start Time";
        }
        if (!endTime) {
            endTime = "Event End Time";
        }
        if (!location) {
            location = "Event Location";
        }
        if (!type) {
            type = "Event Type";
        }
        if (!description) {
            description = "Event Description";
        }
    }

    collaborators = collaborators?.split(',').map(org => org.trim()).filter(org => org !== '') || [];

    const canHover = onLearnMore !== undefined;

    return (
        <div onClick={onLearnMore} className={`eventCard ${canHover ? 'canHover' : ''}`}>
            <div className="thumbnailContainer unselectable">
                {thumbnail && <img className="thumbnail not-draggable" style={{ "--lowres": `url(${thumbnailLowres})` }} src={thumbnail}></img>}
                {type && <p className="eventType">{type}</p>}
            </div>

            <div className="eventContent">
                <h2>{title}</h2>
                <div className="dataContainer">
                    <span className="symbol unselectable">🕐</span>
                    <p className="eventDate">{startTime && endTime ? `${startTime} - ${endTime}` : startTime}</p>
                </div>
                
                <div className="dataContainer">
                    <span className="symbol unselectable">📍</span>
                    <p className="eventLocation">{location}</p>
                </div>
                
                {collaborators.length > 0 && (
                    <div className="dataContainer">
                        <span className="symbol unselectable">🤝</span>
                        <p className="eventCollaborators">Collaborating Orgs: {collaborators.join(', ')}</p>
                    </div>
                )}
                {foodProvided && (
                    <div className="dataContainer">
                        <span className="symbol unselectable">🍴</span>
                        <p className="eventFoodProvided">Food Provided</p>
                    </div>
                )}
                
                {/*
                <p className="eventDescription">{description}</p>
                */}

                <div className="eventButton unselectable">
                    <p>Learn More <span className="arrow">➭</span></p>
                </div>
            </div>
        </div>
    );
}

export default EventCard;
export { parseDate };