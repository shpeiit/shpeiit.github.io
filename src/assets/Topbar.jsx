import { useState, useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

import CustomButton from './Buttons';
import './Topbar.css';

// key = Text, value = {icon, iconLeft, link}
const links = {
    Home: {
        icon: "/shpe-emblem.png",
        iconLeft: true,
        link: "/"
    }, 
    Sponsorships: {
        link: "/sponsorships"
    },
    ["Executive Board"]: {
        link: "/executive-board"
    },
    Resources: {
        link: "/resources"
    },
    Events: {
        link: "/events"
    }, 
    SHPEtinas: {
        link: "/shpetinas"
    },
    SHPEjr: {
        link: "/shpejr"
    }
}

function Topbar({ height = 4 }) {
    const location = useLocation();
    const [windowWidth, setWindowWidth] = useState(
        typeof window === 'undefined' ? 1200 : window.innerWidth
    );
    
    const hideButtons = windowWidth <= 1100;

    useLayoutEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial size

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    /*
    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
    });
    */

    const [selectedPage, setSelectedPage] = useState(location.pathname);
    useEffect(() => {
        setSelectedPage(location.pathname);
    }, [location]);

    const sandwichClick = (e) => {
        const parent = e.currentTarget.parentElement;
        parent.classList.toggle("MenuOpen");
    }

    return <nav style={{ '--topbar-height': `${height}em` }} className="topbar">
        <div className="LogoContainer unselectable">
            <CustomButton link="/"> <span><img src="shpe-iit-img.png" alt="" style={{ height: `${height - 2}em` }} /></span> </CustomButton>
        </div>
        {!hideButtons && <div className="ButtonsContainer unselectable">
            {Object.entries(links).map(([text, { icon, iconLeft, link }]) => {
                const className = link === selectedPage ? "selected" : "";

                /*
                return (<div key={text} className={className}>
                    <LinkElem link={link} icon={icon} iconLeft={iconLeft}>{text}</LinkElem>
                </div>);*/
                return (<CustomButton key={text} link={link} className={className} icon={icon} iconLeft={iconLeft}>{text}</CustomButton>);
            })}
        </div>}
        {hideButtons && 
        <div className="MenuContainer">
            <CustomButton className="MenuBtn" onClick={sandwichClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 66 66">
                    <path d="M 0 11 l 66 0"/>
                    <path d="M 0 33 l 66 0"/>
                    <path d="M 0 55 l 66 0"/>
                </svg>
            </CustomButton>
            <div onClick={sandwichClick} className="Menu unselectable">
                {Object.entries(links).map(([text, { icon, iconLeft, link }]) => {
                    const className = link === selectedPage ? "selected" : "";
                    return (<CustomButton key={text} link={link} className={className} icon={icon} iconLeft={iconLeft}>{text}</CustomButton>);
                })}
            </div>
            <div onClick={sandwichClick} className="MenuBackground"></div>
        </div>}
    </nav>
}

export default Topbar;