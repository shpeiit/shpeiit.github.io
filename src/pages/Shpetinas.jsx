import EventsList from '../assets/EventsList';
import ExecCard from '../assets/ExecCard';
import PageHeader from '../assets/PageHeader';
import { buildMeta } from '../seo';
import './Shpetinas.css';

import { shpetinasTeam, directors } from '../data/ExecBoard';

import { useOutletContext } from 'react-router';

export const meta = () => buildMeta({
	title: 'SHPEtinas | SHPE IIT',
	description: 'Discover SHPEtinas that supports women in STEM within the SHPE IIT community.',
	pathname: '/shpetinas',
});

const eventsFilter = (event) => {
	return event.collaborators.toLowerCase().includes('shpetina') || event.name.toLowerCase().includes('shpetina');
}

function Shpetinas() {
	const { events = {} } = useOutletContext() || {};
	const shpetinaEvents = Object.values(events).filter(eventsFilter);

	const upcomingEvents = shpetinaEvents.filter(event => new Date(event.endTime) > Date.now());
	const pastEvents = shpetinaEvents.filter(event => new Date(event.endTime) <= Date.now());

	console.log(upcomingEvents);
	console.log(pastEvents);

	const eventsSection = (<>
			{upcomingEvents.length !== 0 && (<>
					<h2>Upcoming SHPEtinas Events</h2>
					<EventsList events={upcomingEvents} />
			</>)}
			{pastEvents.length !== 0 && (<>
					<h2>Past SHPEtinas Events</h2>
					<EventsList events={pastEvents} />
			</>)}
	</>)

	const shpetinasEboard = Object.entries(shpetinasTeam);
	shpetinasEboard.unshift(["Director", directors["SHPEtinas Director"]]);

	return (
		<div className="shpetinas">
			<PageHeader title="SHPEtinas" subtitle="Women in STEM and Leadership" />
			<div className="content">
				<h2>About SHPEtinas</h2>
				<strong>
					SHPEtinas at Illinois Tech is committed to empowering women in STEM through community, mentorship, and professional development.
				</strong>
				<p>
					SHPEtinas is a dedicated initiative under the SHPE Illinois Tech Chapter, focused on supporting Latinas pursuing careers in STEM.
					It aims to create a supportive environment where women in STEM can thrive academically and professionally.
					SHPEtinas at Illinois Tech fosters a community where women can connect, share experiences, and support each other's growth.
					In addition, we encourage collaboration, networking, and the sharing of knowledge and resources among women in STEM.
					And we provide opportunities for leadership development and skill-building within the STEM community.
				</p>
				<h2>Join Us</h2>
				<p>
					We welcome all women in STEM to join SHPEtinas at Illinois Tech. Whether you are looking for mentorship, networking opportunities, or a supportive community, SHPEtinas provides a platform to grow and succeed.
				</p>
				<p>
					Follow our social media channels to stay updated on upcoming events, workshops, and networking opportunities.
					And join the discord server to connect with fellow members and stay engaged with the SHPE and SHPEtinas community.
				</p>
				{eventsSection}

				<h2>Meet the SHPEtinas Team!</h2>
				<p>Reach out to the SHPEtinas team for any questions, collaborations, or to get involved with our initiatives.</p>
				<div className="membersContainer">
					{shpetinasEboard.map(([position, member]) => (
						<ExecCard key={position} name={member.name} position={position} imageId={member.imageId} email={member.email} linkedIn={member.linkedIn} major={member.major} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Shpetinas;
