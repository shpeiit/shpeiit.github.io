import PageHeader from '../assets/PageHeader';
import ExecCard from '../assets/ExecCard';
import CollapsibleSection from '../assets/CollapsibleSection';

import './ExecutiveBoard.css';
import { buildMeta } from '../seo';

export const meta = () => buildMeta({
    title: 'Executive Board | SHPE IIT',
    description: 'Meet the executive board and student leaders guiding SHPE IIT at Illinois Institute of Technology.',
    pathname: '/executive-board',
});

import { president, vicePresidents, directors, internalTeam, externalTeam, logisticsTeam, academicsTeam, publicityTeam, shpetinasTeam, outreachTeam } from '../data/ExecBoard';


function ExecutiveBoard() {
    const sections = {
        "Vice Presidents": vicePresidents,
        "Directors": directors,
        "Internal Team": internalTeam,
        "External Team": externalTeam,
        "Logistics Team": logisticsTeam,
        "Academics Team": academicsTeam,
        "Publicity Team": publicityTeam,
        "SHPEtinas Team": shpetinasTeam,
        "Outreach Team": outreachTeam
    }
    
    return (
        <div className="executiveBoard">
            <PageHeader title="Executive Board" subtitle="The Leaders of SHPE IIT" />

            <div className="content">
                <h2>Meet the Team</h2>
                <p>
                    The Executive Board of SHPE IIT is composed of dedicated student leaders who are committed to advancing the mission of the organization. Each member brings unique skills and perspectives, contributing to the overall success and growth of the chapter.
                </p>

                <CollapsibleSection text="President" defaultOpen={true}>
                    <div className="membersContainer">
                        <ExecCard name={president.name} position={president.position} imageId={president.imageId} email={president.email} linkedIn={president.linkedIn} major={president.major} />
                    </div>
                </CollapsibleSection>
                {Object.entries(sections).map(([section, members]) => (
                    <CollapsibleSection key={section} text={section} defaultOpen={true}>
                        <div className="membersContainer">
                            {(
                                Object.entries(members).map(([position, member]) => (
                                    <ExecCard key={position} name={member.name} position={position} imageId={member.imageId} email={member.email} linkedIn={member.linkedIn} major={member.major} />
                                ))
                            )}
                        </div>
                    </CollapsibleSection>
                ))}
            </div>
        </div>
    );
}

export default ExecutiveBoard;