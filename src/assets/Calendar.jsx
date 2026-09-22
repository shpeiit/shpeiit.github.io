import "./Calendar.css";

// embed link for google calendar
const link = "https://calendar.google.com/calendar/embed?src=webjr.shpe.iit%40gmail.com&ctz=America%2FChicago";
const agendaLink = link + "&mode=AGENDA";

// download link for ics file
const icsLink = "https://calendar.google.com/calendar/ical/webjr.shpe.iit%40gmail.com/public/basic.ics";

function Calendar() {
    const linkStyle = {
        maxWidth: "calc(100vw - 70px)",
        overflow: "clip",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        display: "inline-block"
    };

    return (
        <div className="calendar">
            <div className="calendar-download">
                <p><strong>Subscribe to the calendar:</strong> <a style={linkStyle} href={icsLink} target="_blank" rel="noopener noreferrer">{icsLink}</a>,<br></br>(copy the link) on your preferred calendar application</p>
                <a href={icsLink} download>Download Static Calendar .ics file (Add to outlook, Google Calendar, etc.)</a>
                <a href={link} target="_blank" rel="noopener noreferrer">Open Calendar in New Tab</a>
            </div>
            <iframe src={agendaLink} width="90%" height="600" scrolling="no"></iframe>
        </div>
    );
}

export default Calendar;