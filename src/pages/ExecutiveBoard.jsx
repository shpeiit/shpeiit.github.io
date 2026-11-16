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


const president = {
    name: "Jose Sanchez",
    position: "President",
    imageId: "1XOrw2uQEaLJwDtrvmoKAdKgsdTamTMiH",
    email: "mailto:President.shpe.iit@gmail.com",
    linkedIn: "https://www.linkedin.com/in/jose-sanchez-pando/",
    major: "Mechanical Engineering"
};

const vicePresidents = {
    ["External Vice President"]: {
        name: "Daniela Rojas",
        imageId: "1HORXdwZRBaOXgMEx8LK98SZOvQddAB_V",
        email: "mailto:ExtlVp.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/daniela-rojas-serna/",
        major: "Physics"
    },
    ["Internal Vice President"]: {
        name: "Guillermo Hidalgo",
        imageId: "1gFIbpZh8EzfjiGiGF_42LCsl7fVNfStK",
        email: "mailto:Vp.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/guillermohid/",
        major: "Computer Engineering"
    }
};

const directors = {
    ["Treasurer"]: {
        name: "Ashlee Zuniga Mena",
        imageId: "12_QlAukxPOdfS8U2A919a72cZbqdd0Qt",
        email: "mailto:Treasurer.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/ashlee-zuniga-mena/",
        major: "Finance"
    },
    ["Academics Director"]: {
        name: "Adriana Torres-Cruz",
        imageId: "1ZB5GqTY-AXGXWHBK8oZoDAR4AWZZ29t1",
        email: "mailto:academics.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/adriana-torres-cruz-230274348/",
        major: "Mechanical Engineering"
    },
    ["PR Director"]: {
        name: "Ruth Flores",
        imageId: "1pXiET1e60C3q8mzCYTcEeJXk69MJ1R9w",
        email: "mailto:pr.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/ruth-flores-7340a4353/",
        major: "Mechanical Engineering"
    },
    ["SHPEtinas Director"]: {
        name: "Daniela Jimenez",
        imageId: "1xvVJAFLME5XyCz5fVFa38G5wuOobbB1f",
        email: "mailto:shpetinas.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/djjimenz/",
        major: "Computer Science"
    },
    ["Outreach Director"]: {
        name: "Diego Fallad",
        imageId: "1fI1lQzLajkPoaWvDEjiVFFWROhfXJ_do",
        email: "mailto:outreach1.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/diego-fallad8/",
        major: "Computer Engineering"
    },
    ["Conference Director"]: {
        name: "Olivia Kocot",
        imageId: "19SBXWmNbvDJO24W1R8A9VICPV6_F4_81",
        email: "mailto:conference.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/okocot/",
        major: "Biomedical Engineering"
    }
};

const internalTeam = {
    ["Recruitment Chair"]: {
        name: "Hayden Castillo",
        imageId: "19jXgFuSSe28OdXpVZrLG85gUkQf151h8",
        email: "mailto:recruitment.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/hayden-castillo/",
        major: "Aerospace Engineering"
    },
    ["Leadership Lead"]: {
        name: "n/a",
        imageId: null,
        email: "",
        linkedIn: "",
        major: ""
    },
    ["Alumni Lead"]: {
        name: "n/a",
        imageId: null,
        email: "mailto:alumni.shpe.iit@gmail.com",
        linkedIn: "",
        major: ""
    },
    ["Internal Relations"]: {
        name: "Axel Aguilar Garcia",
        imageId: null,
        email: "",
        linkedIn: "https://www.linkedin.com/in/axel-aguilar-03401733a/",
        major: "Aerospace Engineering"
    }
};

const externalTeam = {
    ["Professional Development Lead"]: {
        name: "Ivanova Benegas",
        imageId: "1kcr8PPdnQVn1xShvTUi6dQ72W60LL89F",
        email: "mailto:pd.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/alejandra-ivanova-benegas-orantes-0a4579285/",
        major: "Biomedical Engineering"
    },
    ["Corporate Relations Lead"]: {
        name: "Christian Avilez",
        imageId: "1eg-nRF92ZqSYT8E2r5_GdiT4KzkEBCt-",
        email: "mailto:corporate.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/christian-avilez/",
        major: "Electrical Engineering"
    },
    ["MentorSHPE Lead"]: {
        name: "Yslam Ismailov",
        imageId: "1SQBi9LwX7jrNj4EXtGomYbsfPxxijqcD",
        email: "",
        linkedIn: "https://www.linkedin.com/in/yslami/",
        major: "Computer Science"
    },
    ["External Relations"]: {
        name: "n/a",
        imageId: null,
        email: "",
        linkedIn: "",
        major: "n/a"
    }
};

const logisticsTeam = {
    ["Fundraising Lead"]: {
        name: "Jaime Bernardino",
        imageId: "11j0NxA35eIF3NWL3nyZy14yk1R_hvZVI",
        email: "mailto:fundraiser.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/jaime--bernardino/",
        major: "Computer Science"
    },
    ["Logistics Lead"]: {
        name: "Raul Diaz",
        imageId: "1o1NH6mjuym79lqfOo1qIfiUeyZGaleqc",
        email: "mailto:coordinator.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/raul-diaz-02b2163b1/",
        major: "Aerospace Engineering"
    }
};

const academicsTeam = {
    ["Graduate Lead"]: {
        name: "Dara Mesta Gallegos",
        imageId: "15290mSGMGyGXjQ9DGkxTlRjwVPzzYFiT",
        email: "mailto:Graduate.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/dara-mesta-gallegos/",
        major: "Civil Engineering"
    },
    ["Technical Lead"]: {
        name: "Salman Amir",
        imageId: "1Ox8Sax6rdHjsVq62C_P8ZK5SPCYTU3rg",
        email: "mailto:Webmaster.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/salman--amir/",
        major: "Computer Science"
    },
    ["Academic Engagement Lead"]: {
        name: "Maksym Bereziuk",
        imageId: "1gWE9uVCuiukKHPAo1nlOUI903x2uyq78",
        email: "",
        linkedIn: "https://www.linkedin.com/in/maksym-bereziuk-418945358/",
        major: "Electrical and Computer Engineering"
    }
};

const publicityTeam = {
    ["VP of Publicity"]: {
        name: "Isis Navarro",
        imageId: "12yJ_8udDL_JVAM36RLuCHxaqs6jJzBQ3",
        email: "",
        linkedIn: "https://www.linkedin.com/in/isisxn/",
        major: "Information Technology and Management"
    },
    ["Media & Content Lead"]: {
        name: "n/a",
        imageId: null,
        email: "",
        linkedIn: "",
        major: "n/a"
    },
    ["Professional Media Lead"]: {
        name: "n/a",
        imageId: null,
        email: "",
        linkedIn: "",
        major: "n/a"
    },
    ["Marketing Lead"]: {
        name: "Sebastian Luque",
        imageId: "1VfnY9FmfLptW-lvSD1FkUhvwakFoQuD_",
        email: "",
        linkedIn: "https://www.linkedin.com/in/sebastian-luque259/",
        major: "Computer Science"
    }
};

const shpetinasTeam = {
    ["Secretary"]: {
        name: "Aramara Martinez",
        imageId: "1PxoG118w4vZYkOqHavot0EiS2yvWhqHc",
        email: "shpetinas.operations.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/aimartinez941/",
        major: "Behavioral Health & Wellness"
    },
    ["PR Chair"]: {
        name: "Laila Miranda",
        imageId: "1TGmlGl6XwSnh5d9pWdrl_iWhJFBWILDB",
        email: "shpetinas.pr.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/lailamiranda",
        major: "Architecture & Construction Management"
    },
    ["Membership Engagement"]: {
        name: "Nimra Nazar Reyes",
        imageId: "14LRZ90CO9ouYzEKaPiH5J6ym0JhPjzGf",
        email: "shpetinas.engagement.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/nimra-nazar-reyes-31650a437/",
        major: "Mechanical Engineering"
    },
    ["Professional Development Chair"]: {
        name: "Luna Corro",
        imageId: null,
        email: "shpetinas.pd.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/luna-corro-1a851643a",
        major: "Biomedical Engineering"
    }
};

const outreachTeam = {
    ["SHPEjr Lead"]: {
        name: "Mariana Quintana Buquez",
        imageId: "1o_l66ti02pMRKYExIZ4aVM6oIVoEJCEK",
        email: "mailto:ShpeJr.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/marianaquintana28",
        major: "Civil Engineering"
    },
    ["Noche de Ciencias Lead"]: {
        name: "Angel Castillo Campa",
        imageId: "1eH8jo1rz3GeWXiP35ZM46brg3HXyVnmu",
        email: "",
        linkedIn: "https://www.linkedin.com/in/angel-castillo-campa-149944434/",
        major: "Aerospace Engineering"
    },
    ["Philanthropy Lead"]: {
        name: "Cesar Herrera",
        imageId: "1qq61AUiXxzz95UTLKiWTAKtfXlKY_43Y",
        email: "mailto:philanthropy.shpe.iit@gmail.com",
        linkedIn: "https://www.linkedin.com/in/cesar-herrera-361843216/",
        major: "Mechanical Engineering"
    }
};


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