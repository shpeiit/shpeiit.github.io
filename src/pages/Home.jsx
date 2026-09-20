import PageHeader from '../assets/PageHeader';
import LinkElem from '../assets/LinkElem';
import CustomButton from '../assets/Buttons';
import CollapsibleSection from '../assets/CollapsibleSection';
import EventsList from '../assets/EventsList';
import './Home.css';

import { useNavigate } from "react-router"; 

const sponsorshipFormLink = "https://forms.gle/UDWuHisuumWEHQMu9";
const donationLink = "https://secure.touchnet.com/C20090_ustores/web/product_detail.jsp?PRODUCTID=1860&SINGLESTORE=true";

function Home({ events }) {
    const navigate = useNavigate();
    const eventsListOnClick = ({id}) => {navigate(`/events?id=${id}`);};

    let upcomingEvents = Object.values(events).filter(event => new Date(event.endTime) >= new Date());
    upcomingEvents.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
    upcomingEvents = upcomingEvents.slice(0, 3);

    return (
        <div className="home">
            <PageHeader title="Society of Hispanic Professional Engineers" subtitle="At Illinois Institute of Technology" subtitle2="Welcome to SHPE IIT!" image="iitcampus.webp" />

            <div className="content">
                <div className="upcomingEventsSection">
                    <h2>Upcoming Events</h2>
                    <EventsList events={upcomingEvents} onLearnMore={eventsListOnClick} />
                    <CustomButton link="/events" >View All Events</CustomButton>
                </div>

                <div className="section">
                    <h2>About Us</h2>

                    <h4>Empowering the Next Generation of Hispanic Engineers</h4>
                    <p>
                    The Society of Hispanic Professional Engineers (SHPE) IIT Chapter is dedicated to empowering Hispanic students at 
                    the Illinois Institute of Technology to excel in STEM fields. We provide a supportive community, professional 
                    development opportunities, and a platform for leadership growth.
                    </p>
                    <p>
                    Aligned with SHPE's national mission to impact the world through STEM, we foster a sense of familia, equipping our 
                    members with the knowledge and tools necessary for career success. Through academic excellence, community 
                    engagement, and professional development, we strive to create a world where Hispanic engineers are influential 
                    leaders and innovators.
                    </p>
                    <p>
                    Since our re-establishment in 2009, SHPE-IIT has become a cornerstone of the IIT campus, collaborating with other 
                    organizations and achieving significant milestones. We are committed to continuing this legacy by inspiring and 
                    supporting our members to reach their full potential.
                    </p>

                    <p>
                        <span className="bolded">Join us</span> as we shape the future of STEM and create a lasting impact 
                        on our community.
                    </p>

                    <div className="AboutUsButtons unselectable">
                        <CustomButton link={sponsorshipFormLink} target="_blank">Become a Sponsor</CustomButton>
                        <CustomButton link={donationLink} target="_blank">Donate Directly to SHPE IIT</CustomButton>
                    </div>

                    <CollapsibleSection text="SHPE IIT History (Click to Expand)">
                        <p>
                        The Society of Hispanic Professional Engineers Chapter at the Illinois Institute of Technology (SHPE-IIT) 
                        officially re-established in the Spring of 2009 when several members that attended the 2008 SHPE National 
                        Conference were inspired to start a chapter of their own. 
                        </p>
                        <p>
                        The chapter collaborated with another already established Latino student organization called the Latinos 
                        Involved in Further Education (LIFE). The two organizations worked together to unite the Latino population on 
                        campus while offering them the opportunities and experience to become prominent leaders. In the Fall of 2011, 
                        the SHPE-IIT and LIFE organizations formally split to allow SHPE-IIT to continue to grow and become a strong 
                        self-standing organization. SHPE-IIT still continues to collaborate with other on-campus student organizations, 
                        such as LIFE, on hosting events to spread the Hispanic culture on campus. Since then, SHPE-IIT has continued 
                        to become a huge force on the IIT campus by offering various workshops, events, and opportunities that not only
                        benefit the Hispanic engineering students but benefit the campus as a whole. 
                        </p>
                        <p>
                        This chapter continually increases membership and brought over 40 students to the 2014 SHPE National 
                        Conference. Overall, the chapter works to help its members gain the necessary skills and experience to be 
                        successful leaders in their academic endeavors and college careers. SHPE-IIT continues to partner with other
                        engineering organizations on campus such as NSBE, SWE, ACHE, and ASME and faculty and staff to ensure that we 
                        positively impact the entire IIT campus and community for the better. 
                        </p>
                        <p>
                        SHPE-IIT has finally earned the reputation as a prominent student organization on campus and will continue to 
                        work hard, demonstrate dedication, and fulfill the SHPE mission to make a difference in the IIT community and 
                        influence students for the better. Since the chapter's founding, SHPE-IIT has earned a number of awards, 
                        including the Most Improved Chapter Award in the Spring of 2009 and the Fall of 2013, and most notably, 
                        the Most Valuable Chapter Award in the Fall of 2009. SHPE-IIT now hopes to earn the Chapter of the Year Award 
                        in the near future.
                        </p>
                    </CollapsibleSection>
                </div>

                <LinkElem link="https://www.shpe-iit.org/home">See more details at Old Website</LinkElem>
            </div>
        </div>
    )
}

export default Home