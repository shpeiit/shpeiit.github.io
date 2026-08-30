import PageHeader from '../assets/PageHeader';
import LinkElem from '../assets/LinkElem';

function Home() {
    return (
        <div className="home">
            <PageHeader title="Society of Hispanic Professional Engineers" subtitle="At Illinois Institute of Technology" subtitle2="Welcome to SHPE IIT!" image="iitcampus.webp" />

            <div className="content">
                <p>
                    Upcoming events section (WIP)
                </p>
                
                <p>
                    about us section (WIP)
                </p>

                <LinkElem link="https://www.shpe-iit.org/home">See details at Old Website</LinkElem>
            </div>
        </div>
    )
}

export default Home