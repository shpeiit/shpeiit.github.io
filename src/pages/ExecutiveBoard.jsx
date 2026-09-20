import PageHeader from '../assets/PageHeader';
import ExecCard from '../assets/ExecCard';
import CollapsibleSection from '../assets/CollapsibleSection';

import './ExecutiveBoard.css';


const president = {
    name: "Jose Sanchez",
    position: "President",
    image: "execPhotos/jose.png",
    email: "mailto:President.shpe.iit@gmail.com",
    linkedIn: "https://www.linkedin.com/in/jose-sanchez-pando/",
    major: "Mechanical Engineering"
};

const vicePresidents = {
    ["External Vice President"]: {
        name: "Daniela Rojas",
        image: "execPhotos/danielar.png",
        email: "mailto:ExtlVp.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/daniela-rojas-serna/",
        major: "Physics"
    },
    ["Internal Vice President"]: {
        name: "Guillermo Hidalgo",
        image: "execPhotos/guillermo.png",
        email: "mailto:Vp.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/guillermohid/",
        major: "Computer Engineering"
    }
};

const directors = {
    ["Treasurer"]: {
        name: "Ashlee Zuniga Mena",
        image: "execPhotos/ashlee.png",
        email: "mailto:Treasurer.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/ashlee-zuniga-mena/",
        major: "Finance"
    },
    ["Academics Director"]: {
        name: "Adriana Torres-Cruz",
        image: "execPhotos/adriana.png",
        email: "mailto:academics.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/adriana-torres-cruz-230274348/",
        major: "Mechanical Engineering"
    },
    ["PR Director"]: {
        name: "Ruth Flores",
        image: "execPhotos/ruth.png",
        email: "mailto:pr.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/ruth-flores-7340a4353/",
        major: "Mechanical Engineering"
    },
    ["SHPEtinas Director"]: {
        name: "Daniela Jimenez",
        image: "execPhotos/danielaj.png",
        email: "mailto:shpetinas.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/djjimenz/",
        major: "Computer Science"
    },
    ["Outreach Director"]: {
        name: "Diego Fallad",
        image: "execPhotos/diego.jpg",
        email: "mailto:outreach1.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/diego-fallad8/",
        major: "Computer Engineering"
    },
    ["Conference Director"]: {
        name: "Olivia Kocot",
        image: "execPhotos/olivia.png",
        email: "mailto:conference.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/okocot/",
        major: "Biomedical Engineering"
    }
};

const internalTeam = {
    ["Recruitment Chair"]: {
        name: "Hayden Castillo",
        image: "execPhotos/hayden.jpg",
        email: "mailto:recruitment.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/hayden-castillo/",
        major: "Aerospace Engineering"
    },
    ["Leadership Lead"]: {
        name: "n/a",
        image: null,
        email: "",
        linkedIn: "",
        major: ""
    },
    ["Alumni Lead"]: {
        name: "Felix Gonzalez",
        image: "execPhotos/felix.png",
        email: "mailto:alumni.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/felix-gonzalezz/",
        major: "Electrical Engineering"
    },
    ["Internal Relations"]: {
        name: "n/a",
        image: null,
        email: "",
        linkedIn: "",
        major: "n/a"
    }
};

const externalTeam = {
    ["Professional Development Lead"]: {
        name: "Ivanova Benegas",
        image: "execPhotos/ivanova.jpg",
        email: "mailto:pd.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/alejandra-ivanova-benegas-orantes-0a4579285/",
        major: "Biomedical Engineering"
    },
    ["Corporate Relations Lead"]: {
        name: "Christian Avilez",
        image: "execPhotos/christian.jpg",
        email: "mailto:corporate.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/christian-avilez/",
        major: "Electrical Engineering"
    },
    ["MentorSHPE Lead"]: {
        name: "n/a",
        image: null,
        email: "",
        linkedIn: "",
        major: "n/a"
    },
    ["External Relations"]: {
        name: "n/a",
        image: null,
        email: "",
        linkedIn: "",
        major: "n/a"
    }
};

const logisticsTeam = {
    ["Fundraising Lead"]: {
        name: "Jaime Bernardino",
        image: "execPhotos/jaime.jpg",
        email: "mailto:fundraiser.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/jaime--bernardino/",
        major: "Computer Science"
    },
    ["Logistics Lead"]: {
        name: "Raul Diaz",
        image: "execPhotos/raul.jpg",
        email: "mailto:coordinator.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/raul-diaz-02b2163b1/",
        major: "Aerospace Engineering"
    }
};

const academicTeam = {
    ["Graduate Lead"]: {
        name: "n/a",
        image: null,
        email: "",
        linkedIn: "",
        major: "n/a"
    },
    ["Technical Lead"]: {
        name: "Salman Amir",
        image: "execPhotos/salman.png",
        email: "mailto:Webmaster.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/salman--amir/",
        major: "Computer Science"
    },
    ["Academic Engagement Lead"]: {
        name: "n/a",
        image: null,
        email: "",
        linkedIn: "",
        major: "n/a"
    }
};

const publicityTeam = {
    ["VP of Publicity"]: {
        name: "Isis Navarro",
        image: "execPhotos/isis.png",
        email: "",
        linkedIn: "https://www.linkedin.com/in/isisxn/",
        major: "Information Technology and Management"
    },
    ["Media & Content Lead"]: {
        name: "n/a",
        image: null,
        email: "",
        linkedIn: "",
        major: "n/a"
    },
    ["Professional Media Lead"]: {
        name: "n/a",
        image: null,
        email: "",
        linkedIn: "",
        major: "n/a"
    },
    ["Marketing Lead"]: {
        name: "Sebastian Luque",
        image: "execPhotos/sebastian.jpg",
        email: "",
        linkedIn: "https://www.linkedin.com/in/sebastian-luque259/",
        major: "Computer Science"
    }
};

const shpetinasTeam = {
    ["Secretary"]: {
        name: "n/a",
        image: null,
        email: "",
        linkedIn: "",
        major: "n/a"
    },
    ["PR Chair"]: {
        name: "n/a",
        image: null,
        email: "",
        linkedIn: "",
        major: "n/a"
    },
    ["Membership Engagement"]: {
        name: "n/a",
        image: null,
        email: "",
        linkedIn: "",
        major: "n/a"
    },
    ["Professional Development Chair"]: {
        name: "n/a",
        image: null,
        email: "",
        linkedIn: "",
        major: "n/a"
    }
};

const outreachTeam = {
    ["SHPEjr Lead"]: {
        name: "n/a",
        image: null,
        email: "",
        linkedIn: "",
        major: "n/a"
    },
    ["Noche de Ciencias Lead"]: {
        name: "Angel Castillo Campa",
        image: "execPhotos/angel.png",
        email: "",
        linkedIn: "https://www.linkedin.com/in/angel-castillo-campa-149944434/",
        major: "Aerospace Engineering"
    },
    ["Philanthropy Lead"]: {
        name: "Cesar Herrera",
        image: "execPhotos/cesar.png",
        email: "mailto:philanthropy.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/cesar-herrera-361843216/",
        major: "Mechanical Engineering"
    }
};


function ExecutiveBoard() {
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
                        <ExecCard name={president.name} position={president.position} image={president.image} email={president.email} linkedIn={president.linkedIn} major={president.major} />
                    </div>
                </CollapsibleSection>
                <CollapsibleSection text="Vice Presidents" defaultOpen={true}>
                    <div className="membersContainer">
                        {Object.entries(vicePresidents).map(([position, member]) => (
                            <ExecCard key={position} name={member.name} position={position} image={member.image} email={member.email} linkedIn={member.linkedIn} major={member.major} />
                        ))}
                    </div>
                </CollapsibleSection>
                <CollapsibleSection text="Directors" defaultOpen={true}>
                    <div className="membersContainer">
                        {Object.entries(directors).map(([position, member]) => (
                            <ExecCard key={position} name={member.name} position={position} image={member.image} email={member.email} linkedIn={member.linkedIn} major={member.major} />
                        ))}
                    </div>
                </CollapsibleSection>
                <CollapsibleSection text="Internal Team" defaultOpen={true}>
                    <div className="membersContainer">
                        {Object.entries(internalTeam).map(([position, member]) => (
                            <ExecCard key={position} name={member.name} position={position} image={member.image} email={member.email} linkedIn={member.linkedIn} major={member.major} />
                        ))}
                    </div>
                </CollapsibleSection>
                <CollapsibleSection text="External Team" defaultOpen={true}>
                    <div className="membersContainer">
                        {Object.entries(externalTeam).map(([position, member]) => (
                            <ExecCard key={position} name={member.name} position={position} image={member.image} email={member.email} linkedIn={member.linkedIn} major={member.major} />
                        ))}
                    </div>
                </CollapsibleSection>
                <CollapsibleSection text="Logistics Team" defaultOpen={true}>
                    <div className="membersContainer">
                        {Object.entries(logisticsTeam).map(([position, member]) => (
                            <ExecCard key={position} name={member.name} position={position} image={member.image} email={member.email} linkedIn={member.linkedIn} major={member.major} />
                        ))}
                    </div>
                </CollapsibleSection>
                <CollapsibleSection text="Academic Team" defaultOpen={true}>
                    <div className="membersContainer">
                        {Object.entries(academicTeam).map(([position, member]) => (
                            <ExecCard key={position} name={member.name} position={position} image={member.image} email={member.email} linkedIn={member.linkedIn} major={member.major} />
                        ))}
                    </div>
                </CollapsibleSection>
                <CollapsibleSection text="Publicity Team" defaultOpen={true}>
                    <div className="membersContainer">
                        {Object.entries(publicityTeam).map(([position, member]) => (
                            <ExecCard key={position} name={member.name} position={position} image={member.image} email={member.email} linkedIn={member.linkedIn} major={member.major} />
                        ))}
                    </div>
                </CollapsibleSection>
                <CollapsibleSection text="SHPEtinas Team" defaultOpen={true}>
                    <div className="membersContainer">
                        {Object.entries(shpetinasTeam).map(([position, member]) => (
                            <ExecCard key={position} name={member.name} position={position} image={member.image} email={member.email} linkedIn={member.linkedIn} major={member.major} />
                        ))}
                    </div>
                </CollapsibleSection>
                <CollapsibleSection text="Outreach Team" defaultOpen={true}>
                    <div className="membersContainer">
                        {Object.entries(outreachTeam).map(([position, member]) => (
                            <ExecCard key={position} name={member.name} position={position} image={member.image} email={member.email} linkedIn={member.linkedIn} major={member.major} />
                        ))}
                    </div>
                </CollapsibleSection>
            </div>
        </div>
    );
}

export default ExecutiveBoard;