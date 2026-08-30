import './Footer.css';
import CustomButton from './Buttons';

const socialLinks = [
    {
        link: "https://www.instagram.com/shpe_iit/",
        icon: "socials/Instagram_logo.svg"
    },
    {
        link: "https://discord.com/invite/x25VXvfadj",
        icon: "socials/discord-logo.png"
    },
    {
        link: "https://www.linkedin.com/company/shpe-iit",
        icon: "socials/linkedin-logo.png"
    },
    {
        link: "https://www.facebook.com/shpeiit/",
        icon: "socials/facebook-logo.png"
    },
    {
        link: "https://www.youtube.com/@SHPENational",
        icon: "socials/YouTube-logo.webp"
    }
]

function Footer() {
    return <footer className="unselectable">
        <p>Follow us on social media!</p>
        <div className="socials">
            {socialLinks.map(({ link, icon }) => (
                <CustomButton key={link} link={link} target="_blank">
                    <img src={icon} alt="" className="not-draggable" />
                </CustomButton>
            ))}
        </div>
        <p><span className="designer">Designed by Salman Amir.</span> © 2026, SHPE IIT All rights reserved.</p>
    </footer>
}

export default Footer;