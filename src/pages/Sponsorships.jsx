import PageHeader from '../assets/PageHeader';
import Cite from '../assets/Cite';
import Pdf from '../assets/Pdf';
import CustomButton from '../assets/Buttons';
import Sponsor from '../assets/Sponsor';
import CollapsibleSection from '../assets/CollapsibleSection';
import './Sponsorships.css';

const donationLink = "https://secure.touchnet.com/C20090_ustores/web/product_detail.jsp?PRODUCTID=1860&SINGLESTORE=true";

const sponsors = [
    {
        name: "Blachford",
        logo: "blachfordLogo.png",
        website: "https://blachford.com/",
        type: "gold"
    },
    {
        name: "UL Solutions",
        logo: "ulLogo.png",
        website: "https://www.ul.com/",
        type: "silver"
    }
]

function Sponsorships() {


    return (
        <div className="sponsorships">
            <PageHeader title="Sponsorships" subtitle="Support SHPE IIT" subtitle2="Become a Sponsor!" />
            
            <div className="content">
                <p className="fullWidth">
                    SHPE IIT is a student organization that aims to empower Hispanic students in the field of engineering. 
                    We rely on the support of our sponsors to help us achieve our goals and provide valuable resources to our members. 
                    By becoming a sponsor, you will be supporting the next generation of Hispanic engineers and helping us create a more 
                    inclusive and diverse engineering community.
                </p>

                <div className="sponsorshipTiers">
                    <h2>Sponsorship Tiers</h2>
                    <CollapsibleSection style={{color: "var(--bronze-color)"}} text="Bronze">
                        <p>$500 / year</p>
                        <ul>
                            <li>Logo on marketing materials</li>
                            <li>Newsletter mention</li>
                            <li>Event table presence</li>
                            <li>Social media feature</li>
                        </ul>
                    </CollapsibleSection>
                    <CollapsibleSection style={{color: "var(--silver-color)"}} text="Silver">
                        <p>$1,000 / year</p>
                        <ul>
                            <li><span style={{fontWeight: "bold"}}>All</span> Bronze tier benefits</li>
                            <li>Website logo placement</li>
                            <li>Workshop or event hosting</li>
                            <li>Resume book access</li>
                            <li>Branded merch collab</li>
                        </ul>
                    </CollapsibleSection>
                    <CollapsibleSection style={{color: "var(--gold-color)"}} text="Gold">
                        <p>$2,000 / year</p>
                        <ul>
                            <li><span style={{fontWeight: "bold"}}>All</span> Silver & Bronze tier benefits</li>
                            <li>Keynote or panel speaker slot</li>
                            <li>Exclusive recruiting event</li>
                            <li>Year-round brand visibility</li>
                            <li>Direct member access</li>
                        </ul>
                    </CollapsibleSection>
                </div>
                <div>
                    <h2>Donation Match</h2>
                    <Cite link="https://shpe.org/support/matching-gifts/">
                        <p>
                            You or your spouse may work for a company or serve on a corporate board with a matching gifts program. 
                            Donors who work for such a company can double or sometimes triple their contribution. 
                            Please contact your human resources office to determine if your company has a matching gifts program and 
                            how you can leverage your gift to benefit the mission of SHPE.
                        </p>
                    </Cite>
                </div>

                <div className="fullWidth">
                    <h2>Become a Sponsor</h2>
                    <div className="sponsorButtons unselectable">
                        <CustomButton link={donationLink} target="_blank">Donate to SHPE IIT</CustomButton>
                    </div>
                </div>
                
                <div className="fullWidth">
                    <h2>Current Sponsors</h2>
                    <div className="sponsorList">
                        {sponsors.map((sponsor) => (
                            <Sponsor key={sponsor.name} name={sponsor.name} logo={sponsor.logo} website={sponsor.website} type={sponsor.type} />
                        ))}
                    </div>
                </div>
                
                <div className="fullWidth">
                    <h2>Full SHPE Sponsorship Package</h2>
                    <Pdf id="shpeSponsorshipPackagePDF" file="SHPE_Sponsorship_Package_26-27.pdf" />
                </div>
            </div>
        </div>
    )
}

export default Sponsorships