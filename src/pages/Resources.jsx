import PageHeader from '../assets/PageHeader';
import LinkElem from '../assets/LinkElem';
import CollapsibleSection from '../assets/CollapsibleSection';
import Calendar from '../assets/Calendar';
import GbmSlides from '../assets/GbmSlides';

import './Resources.css';
import { buildMeta } from '../seo';

export const meta = () => buildMeta({
    title: 'Resources | SHPE IIT',
    description: 'Browse SHPE IIT resources including GBM slides, calendar information, study hours, and national SHPE resources.',
    pathname: '/resources',
});

function Resources() {
    return (
        <div className="resources">
            <PageHeader title="Resources" subtitle="Resources for SHPE IIT members & students" />
            <div className="content">
                <h2>SHPE IIT Resources (WIP)</h2>
                <p>
                    Information about study hours and general body meeting slides can be found here. As well as
                    the events calendar (below).
                </p>
                <p>For specific events information, check out our <LinkElem link="/events">events page</LinkElem>.</p>
                <h3>Previous GBM slides</h3>
                <CollapsibleSection text="Click to open/close">
                    <GbmSlides />
                </CollapsibleSection>

                <h3> SHPE IIT Calendar (Events & study hours) </h3>
                <CollapsibleSection text="Click to open/close">
                    <Calendar />
                </CollapsibleSection>
                
                <h2>SHPE National Resources</h2>
                <p>
                    We're proud to be part of the wider SHPE familia! Below you'll find links to resources from the SHPE 
                    National website that can help you grow personally and professionally. From scholarships and career 
                    prep to leadership development and networking opportunities, these tools are here to support your 
                    journey at IIT and beyond. 
                </p>
                <div className="resourcesLinks">
                    <div>
                    <LinkElem link="https://shpe.org/resources/government-relations/" target="_blank">Government Relations</LinkElem>
                    </div>
                    <div>
                    <LinkElem link="https://shpe.org/resources/annual-reports/" target="_blank">Annual Reports</LinkElem>
                    </div>
                    <div>
                    <LinkElem link="https://shpe.org/about-shpe/news/" target="_blank">SHPE News</LinkElem>
                    </div>
                    <div>
                    <LinkElem link="https://shpe.org/resources/continuing-education/" target="_blank">Continuing Education</LinkElem>
                    </div>
                    <div>
                    <LinkElem link="https://shpe.org/resources/research/" target="_blank">Research</LinkElem>
                    </div>
                    <div>
                    <LinkElem link="https://shpe.org/resources/community-partners/" target="_blank">Community Partners</LinkElem>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resources;