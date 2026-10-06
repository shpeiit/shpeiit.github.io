import PageHeader from '../assets/PageHeader';
import { buildMeta } from '../seo';
import './Shpejr.css';

export const meta = () => buildMeta({
	title: 'SHPEjr | SHPE IIT',
	description: 'Learn about SHPEjr outreach activities and K-12 engagement led by SHPE IIT.',
	pathname: '/shpejr',
});

function Shpejr() {
	return (
		<div className="shpejr">
			<PageHeader title="SHPEjr" subtitle="Outreach and Future Engineers" />
			<div className="content">
				<p>
					SHPEjr highlights SHPE IIT outreach initiatives that inspire younger students to explore STEM.
				</p>
				<p>
					More details are coming soon, including upcoming events and ways to get involved.
				</p>
			</div>
		</div>
	);
}

export default Shpejr;
