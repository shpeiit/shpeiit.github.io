import { useEffect, useRef, useState, useCallback } from 'react';
import PageHeader from '../assets/PageHeader';
import CollapsibleSection from '../assets/CollapsibleSection';
import EventCard from '../assets/EventCard';
import EventsList from '../assets/EventsList';

import './Admin.css';


const GOOGLE_CLIENT_ID = '646676386235-3fskhiilla83048oe21u34ph3gah6qp1.apps.googleusercontent.com';
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwhCXZ28NBiNZvJ0q7CVYEUKX0Gnk4ofVScDJF0r9EovRwm7GUK3YTQcQJBxPhr7a-E/exec';

const ADMIN_GMAILS = [
    "webjr.shpe.iit@gmail.com",
    "webmaster.shpe.iit@gmail.com",

    "president.shpe.iit@gmail.com",
    "vp.shpe.iit@gmail.com",
    "extvp.shpe.iit@gmail.com",
    
    "academics.shpe.iit@gmail.com",
    "coordinator.shpe.iit@gmail.com",
    "finance.shpe.iit@gmail.com",
    "fundraiser.shpe.iit@gmail.com",
    "graduate.shpe.iit@gmail.com",
    "outreach1.shpe.iit@gmail.com",
    "pr.shpe.iit@gmail.com",
    "secretary.shpe.iit@gmail.com",
    "shpejr.shpe.iit@gmail.com",
    "treasurer.shpe.iit@gmail.com",
    "leadership.shpe.iit@gmail.com",
    "pd.shpe.iit@gmail.com",
    "liason.shpe.iit@gmail.com",
    "conference.shpe.iit@gmail.com",
    "recruitment.shpe.iit@gmail.com",
    "shpetinas.shpe.iit@gmail.com",
    "philanthropy.shpe.iit@gmail.com",
    "alumni.shpe.iit@gmail.com",
    "corporate.shpe.iit@gmail.com",
    "diadeciencias.shpe.iit@gmail.com",
    "internalrelations.shpe.iit@gmail.com"
];

function AdminSubmissionForm({ events }) {
    const signInDivRef = useRef(null);
    const idTokenRef = useRef(null);

    const [user, setUser] = useState(null); // { email, picture }
    const [form, setForm] = useState({ 
        name: '', eventType: '', location: '', startTime: '', 
        endTime: '', description: '', thumbnailImageData: null, 
        foodProvided: false, collaborators: '' 
    });
    const [status, setStatus] = useState({ type: null, message: '' });
    const [submitting, setSubmitting] = useState(false);

    const [onEventCardClick, setOnEventCardClick] = useState(undefined);
    const [currentlyEditing, setCurrentlyEditing] = useState(null);

    const handleCredentialResponse = useCallback((response) => {
        idTokenRef.current = response.credential;

        // Decode JWT payload just to display who's signed in.
        // Real verification happens server-side in Apps Script.
        const payload = JSON.parse(atob(response.credential.split('.')[1]));

        if (!ADMIN_GMAILS.includes(payload.email)) {
            setStatus({ type: 'error', message: 'You are not authorized to access this page.' });
            return;
        }

        setUser({ email: payload.email, picture: payload.picture });
        setStatus({ type: null, message: '' });

        setOnEventCardClick(() => ({id, title, type, location, 
            startTime, endTime, description, thumbnailImageData, 
            foodProvided, collaborators
        }) => {
            const formattedData = {id,
                name: title, eventType: type, location, 
                startTime, endTime, description, thumbnailImageData, 
                foodProvided, collaborators
            }
            setForm({...formattedData});
            setCurrentlyEditing({...formattedData});
            setStatus({ type: null, message: '' });
        });
    }, []);

    const cancelEditing = (e) => {
        if (e?.type === 'click'){
            if (!confirm('Are you sure you want to cancel editing?')) return;
        }

        setCurrentlyEditing(null);
        setForm({
            name: '', eventType: '', location: '', startTime: '', 
            endTime: '', description: '', thumbnailImageData: null, 
            foodProvided: false, collaborators: '' 
        });
        setStatus({ type: null, message: '' });
    };

    // Load the Google Identity Services script once, then render the button.
    useEffect(() => {
        const scriptId = 'google-identity-services';

        function initializeGoogleButton() {
            if (!window.google || !signInDivRef.current) return;

            window.google.accounts.id.initialize({
                client_id: GOOGLE_CLIENT_ID,
                callback: handleCredentialResponse,
            });

            window.google.accounts.id.renderButton(signInDivRef.current, {
                type: 'standard',
                size: 'medium',
                theme: 'outline',
                text: 'signin_with',
                shape: 'rectangular',
            });
        }

        if (document.getElementById(scriptId)) {
            initializeGoogleButton();
            return;
        }

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.onload = initializeGoogleButton;
        document.body.appendChild(script);
    }, [handleCredentialResponse]);

    function updateField(field, value) {
        // if start time is after end time, adjust end time to new start time (start time takes precedence)
        if (field === 'startTime' && form.endTime) {
            if (new Date(value) > new Date(form.endTime)) {
                updateField('endTime', value);
            }
        }

        // if end time is before start time, adjust end time to start time (start time takes precedence)
        if (field === 'endTime' && form.startTime) {
            if (new Date(value) < new Date(form.startTime)) {
                value = form.startTime;
            }
        }

        setForm((prev) => ({ ...prev, [field]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (!idTokenRef.current) {
            setStatus({ type: 'error', message: 'Please sign in with Google first.' });
            return;
        }

        if (!confirm('Are you sure you want to submit this form?')) {
            return;
        }

        setSubmitting(true);
        setStatus({ type: 'pending', message: 'Submitting...' });

        try {
            let action = 'submit';
            let submitData = { ...form };
            if (currentlyEditing) {
                action = 'update';

                let changes = getCurrentChangesKeys();
                if (changes.length === 0) {
                    setStatus({ type: 'error', message: 'No changes to update.' });
                    return;
                }
                submitData = {};
                for (const key of changes) {
                    submitData[key] = form[key];
                }
            }

            const res = await fetch(WEB_APP_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' }, // avoids CORS preflight with Apps Script
                body: JSON.stringify({
                    idToken: idTokenRef.current,
                    action: action,
                    ...submitData,
                    id: currentlyEditing?.id,
                }),
            });

            const result = await res.json();

            if (result.status === 'ok'){
                setStatus({ type: 'pending', message: 'Processing...' });
            } else if (result.status === 'success') {
                setStatus({ type: 'success', message: 'Submitted. Thank you.' });
                setForm({ 
                    name: '', eventType: '', location: '', 
                    startTime: '', endTime: '', description: '', 
                    thumbnailImageData: null, collaborators: '', foodProvided: false 
                });
            } else {
                setStatus({ type: 'error', message: result.message || 'Something went wrong.' });
            }
        } catch (err) {
            setStatus({ type: 'error', message: 'Network error — please try again.' });
        } finally {
            setSubmitting(false);
            cancelEditing();
        }
    }

    async function deleteEvent() {
        if (!currentlyEditing) return;

        if (!idTokenRef.current) {
            setStatus({ type: 'error', message: 'Please sign in with Google first.' });
            return;
        }

        if (!confirm('Are you sure you want to delete this event?')) {
            return;
        }

        setSubmitting(true);
        setStatus({ type: 'pending', message: 'Submitting...' });

        try {
            const res = await fetch(WEB_APP_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' }, // avoids CORS preflight with Apps Script
                body: JSON.stringify({
                    idToken: idTokenRef.current,
                    action: 'delete',
                    id: currentlyEditing.id,
                }),
            });

            const result = await res.json();

            if (result.status === 'ok') {
                setStatus({ type: 'pending', message: 'Processing...' });
            } else if (result.status === 'success') {
                setStatus({ type: 'success', message: 'Event deleted successfully.' });
            } else {
                setStatus({ type: 'error', message: result.message || 'Something went wrong.' });
            }
        } catch (err) {
            setStatus({ type: 'error', message: 'Network error — please try again.' });
        } finally {
            setSubmitting(false);
        }

        // After deleting, reset the form and currently editing state
        setCurrentlyEditing(null);
        setForm({
            name: '', eventType: '', location: '', startTime: '', 
            endTime: '', description: '', thumbnailImageData: null, 
            foodProvided: false, collaborators: '' 
        });
    }

    const isUnlocked = Boolean(user);

    const getThumbnail = () => {
        if (currentlyEditing?.thumbnailImageData) {
            return currentlyEditing.thumbnailImageData;
        }
        return form.thumbnailImageData ? `data:${form.thumbnailImageData.imageMimeType};base64,${form.thumbnailImageData.base64}` : undefined;
    }

    const getCurrentChangesKeys = () => {
        return Object.keys(form).filter((key) => {
            if (form[key] === currentlyEditing?.[key]) return false;
            return true;
        });
    }

    return (
            <div className="eventForm">
                <sub>
                    Sign in with your Google account to submit this form. Only approved admin accounts can submit.
                </sub>

                <div className="googleSignIn">
                    <div ref={signInDivRef} />

                    {user && (
                        <div className="signedInAs unselectable">
                            {user.picture && <img src={user.picture} alt="" className="avatar not-draggable" />}
                            <span>
                                Signed in as <strong>{user.email}</strong>
                            </span>
                        </div>
                    )}
                </div>

                <h2 style={{ marginBottom: '-6px' }}>Edit Existing Events</h2>
                <p>Currently Editing: {currentlyEditing?.name || 'None'}</p>
                <EventsList events={events} onLearnMore={onEventCardClick} />

                <form onSubmit={handleSubmit}>
                    <fieldset disabled={!isUnlocked} className="fieldset" style={{ opacity: isUnlocked ? 1 : 0.5 }}>
                        <div className="field">
                            <label className="label" htmlFor="name">Event Name</label>
                            <input
                                id="name"
                                type="text"
                                required
                                value={form.name}
                                onChange={(e) => updateField('name', e.target.value)}
                            />
                        </div>

                        <div className="field">
                            <label className="label" htmlFor="date">Event Type</label>
                            <input
                                id="eventType"
                                type="select"
                                list="eventTypes"
                                required
                                value={form.eventType}
                                onChange={(e) => updateField('eventType', e.target.value)}
                            />
                            <datalist id="eventTypes">
                                <option value="Cultural" />
                                <option value="Fundraiser" />
                                <option value="Volunteering" />
                                <option value="Tabling" />
                                <option value="Social" />
                                <option value="Academic" />
                                <option value="Professional Dev." />
                                <option value="Workshop" />
                                <option value="Seminar" />
                            </datalist>
                        </div>

                        <div className="field">
                            <label className="label" htmlFor="startTime">Start Time</label>
                            <input
                                id="startTime"
                                type="datetime-local"
                                required
                                value={form.startTime}
                                onChange={(e) => updateField('startTime', e.target.value)}
                            />
                        </div>

                        <div className="field">
                            <label className="label" htmlFor="endTime">End Time</label>
                            <input
                                id="endTime"
                                type="datetime-local"
                                required
                                value={form.endTime}
                                onChange={(e) => updateField('endTime', e.target.value)}
                            />
                        </div>

                        <div className="field">
                            <label className="label" htmlFor="location">Location</label>
                            <input
                                id="location"
                                type="text"
                                value={form.location}
                                onChange={(e) => updateField('location', e.target.value)}
                            />
                        </div>

                        <div className="field">
                            <label className="label" htmlFor="collaborators">Collaborating Organizations</label>
                            <input
                                id="collaborators"
                                type="text"
                                value={form.collaborators}
                                onChange={(e) => updateField('collaborators', e.target.value)}
                            />
                        </div>

                        <div className="field">
                            <label className="label" htmlFor="food">Food Provided</label>
                            <input
                                id="food"
                                type="checkbox"
                                checked={form.foodProvided}
                                onChange={(e) => updateField('foodProvided', e.target.checked)}
                            />
                        </div>
                        
                        <div className="field">
                            <label className="label" htmlFor="thumbnail">Thumbnail</label>
                            <input
                                id="thumbnail"
                                type="file"
                                accept="image/png, image/jpeg" 
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    const reader = new FileReader();
  
                                    reader.onload = (e) => {
                                        const base64String = e.target.result.replace(/^data:image\/[a-z]+;base64,/, '');
                                        updateField('thumbnailImageData', {
                                            imageMimeType: file.type,
                                            base64: base64String,
                                            imageName: file.name
                                        });
                                    };
                                    
                                    reader.readAsDataURL(file);
                                }}
                            />
                        </div>

                        <div className="field">
                            <label className="label" htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                value={form.description}
                                onChange={(e) => updateField('description', e.target.value)}
                            ></textarea>
                        </div>
                    </fieldset>

                    <div className="eventPreview">
                        <p className="label">Preview</p>
                        <EventCard showPlaceholderValues={true}
                            title={form.name}
                            type={form.eventType}
                            collaborators={form.collaborators}
                            foodProvided={form.foodProvided}

                            startTime={form.startTime}
                            endTime={form.endTime}
                            location={form.location}

                            description={form.description}
                            thumbnail={getThumbnail()}
                        />
                    </div>

                    {!isUnlocked && (
                        <sub>Sign in with Google above to enable this form.</sub>
                    )}

                    {currentlyEditing && (
                        <>
                        <p>Currently Editing: {currentlyEditing.name}</p>
                        <p>Current Changes: </p>
                        {
                            getCurrentChangesKeys().map((change) => {
                                if (!change) return null;
                                return <p key={change}>{change}</p>;
                            })
                        }
                        </>
                    )}
                    <button
                        type="submit"
                        disabled={!isUnlocked || submitting}
                        className={`button unselectable ${!isUnlocked || submitting ? 'buttonDisabled' : ''}`}
                    >
                        {currentlyEditing ? `Update "${currentlyEditing.name}"` : 'Submit'}
                    </button>

                    {currentlyEditing && (
                        <>
                        <button
                            type="button"
                            onClick={(e) => cancelEditing(e)}
                            className="button unselectable"
                            style={{ marginTop: '10px', backgroundColor: 'grey' }}
                        >
                            Cancel Editing
                        </button>
                        <button
                            type="button"
                            onClick={() => deleteEvent()}
                            className="button unselectable"
                            style={{ marginTop: '20px', backgroundColor: 'red' }}
                        >
                            Delete Event
                        </button>
                        </>
                    )}

                    {status.type && (
                        <div className={`status status_${status.type}`}>
                            {status.message}
                        </div>
                    )}
                </form>
            </div>
    );
}


function Admin({ events }) {
    // sort events by start time in descending order (most recent first)
    const sortedEvents = Object.values(events).sort((a, b) => new Date(b.startTime) - new Date(a.startTime));

    return (
        <div className="admin">
            <PageHeader title="Admin" subtitle="Hi 👋" />
            <div className="content">
                <h2>Events Submission Form</h2>
                <CollapsibleSection text="Click to open/close">
                    <p>
                        This form allows you to submit events to the SHPE IIT website. Please fill out all required fields and provide accurate information.
                    </p>
                    <AdminSubmissionForm events={sortedEvents} />
                </CollapsibleSection>
            </div>
        </div>
    );
}

export default Admin;