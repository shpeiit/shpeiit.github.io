import EventCard from './EventCard';

import './EventsList.css';

function EventsList({ events, onLearnMore }) {
    return (
        <div className="eventsList">
            {events.map((event, index) => (
                <div className="eventCardWrapper" key={index}>
                    <EventCard 
                    id={event.id}
                    title={event.name}
                    type={event.eventType}
                    collaborators={event.collaborators}
                    foodProvided={event.foodProvided}

                    startTime={event.startTime}
                    endTime={event.endTime}
                    location={event.location}

                    description={event.description}
                    thumbnail={event.thumbnailFile}
                    thumbnailLowres={event.thumbnailFileLowres}

                    onLearnMore={onLearnMore || undefined}
                />
                </div>
            ))}
        </div>
    );
}

export default EventsList;