import PageHeader from '../assets/PageHeader';
import { buildMeta } from '../seo';
import './Shpetinas.css';

export const meta = () => buildMeta({
	title: 'SHPEtinas | SHPE IIT',
	description: 'Discover SHPEtinas that supports women in STEM within the SHPE IIT community.',
	pathname: '/shpetinas',
});

function Shpetinas() {
	return (
		<div className="shpetinas">
			<PageHeader title="SHPEtinas" subtitle="Women in STEM and Leadership" />
			<div className="content">
				<p>
					SHPEtinas supports professional growth, mentorship, and community for women in STEM.
				</p>
				<p>
					This page is being expanded with upcoming initiatives, resources, and events.
				</p>
			</div>
		</div>
	);
}

export default Shpetinas;
