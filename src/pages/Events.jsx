import PageHeader from '../assets/PageHeader';
import EventsList from '../assets/EventsList';
import LinkElem from '../assets/LinkElem';
import CustomButton from '../assets/Buttons';
import { parseDate } from '../assets/EventCard';

import { useLocation, useNavigate } from 'react-router';

import './Events.css';

function handleEventRedirect(events) {
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(window.location.search);
    const eventId = queryParams.get('id');

    if (!eventId) {
        return;
    }

    if (Object.keys(events).length === 0) {
        return; // events not loaded yet.
    }

    const event = events[eventId];
    if (!event) {
        navigate(`/events`, {state: { newData: true }});
        return;
    }

    let { startTime, endTime } = parseDate(event.startTime, event.endTime);
    const eventDateRange = `${startTime}${endTime ? ` - ${endTime}` : ''}`;

    return (
        <div className="eventInfo">
            <PageHeader title={event.name} subtitle={eventDateRange} subtitle2={event.location} 
            image={event.thumbnailFile} imageLowres={event.thumbnailFileLowres} 
            />
            <div className="content">
                <div className="backButtonContainer">
                    <CustomButton link="/events">Back to Events</CustomButton>
                </div>
                <h2>{event.name}</h2>
                <p>When: {eventDateRange}</p>
                <p>Where: {event.location}</p>
                <p>{event.description}</p>
                {event.foodProvided && (
                    <p>Food Provided!</p>
                )}

                {event.collaborators && (
                    <>
                        <h2>Collaborating Organizations</h2>
                        <p>{event.collaborators}</p>
                    </>
                )}
            </div>
        </div>
    )
}

function Events({ events }) {
    const navigate = useNavigate();
    const eventsListOnClick = ({id}) => {navigate(`/events?id=${id}`, {state: { newData: true }});};
    
    const upcomingEvents = []; // Object.values(events).filter(event => new Date(event.endTime) >= new Date());
    const previousEvents = []; // Object.values(events).filter(event => new Date(event.endTime) < new Date());

    for (const event of Object.values(events)) {
        if (new Date(event.endTime) >= new Date()) {
            upcomingEvents.push(event);
        } else {
            previousEvents.push(event);
        }
    }

    upcomingEvents.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
    previousEvents.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));

    const eventRedirectElem = handleEventRedirect(events);

    if (eventRedirectElem) {
        return eventRedirectElem;
    }

    return (
        <div className="events">
            <PageHeader title="Events" />
            <div className="content">
                <p>Check out our upcoming and previous events below.</p>
                <p>For study hours and general body meeting slides, check out our <LinkElem to="/resources">resources page</LinkElem>.</p>
                <p>For more information about an event, click on the learn more button.</p>

                <h2>Upcoming Events</h2>
                {upcomingEvents.length === 0 ? (
                    <p>No upcoming events.</p>
                ) : (
                    <EventsList events={upcomingEvents} onLearnMore={eventsListOnClick} />
                )}
                <h2>Previous Events</h2>
                {previousEvents.length === 0 ? (
                    <p>No previous events.</p>
                ) : (
                    <EventsList events={previousEvents} onLearnMore={eventsListOnClick} />
                )}
                <h2>Photo Gallery</h2>
                <p>WIP</p>

                {eventRedirectElem}
            </div>
        </div>
    );
}

export default Events;