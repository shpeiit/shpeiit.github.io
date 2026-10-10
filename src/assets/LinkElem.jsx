import { Link } from 'react-router';
import { BASE_URL } from '../siteConfig';
import './LinkElem.css';

const isLinkExternal = (link) => {
    if (!link) return false;

    try {
        const baseOrigin = typeof window === 'undefined'
            ? BASE_URL
            : window.location.origin;
        const url = new URL(link, baseOrigin);
        return url.hostname !== new URL(baseOrigin).hostname;
    } catch {
        return true;
    }
}

function LinkElem({ link, icon="", iconLeft=false, draggable=false, unselectable=false, ...props }) {
    const hasIcon = icon && icon.length > 0;
    
    const iconClass = hasIcon ? (iconLeft ? 'icon-left' : 'icon-right') : '';
    const draggableClass = draggable === false ? 'not-draggable' : '';
    const unselectableClass = unselectable ? 'unselectable' : '';

    const className = `${iconClass} ${draggableClass} ${unselectableClass}`;
    
    if (isLinkExternal(link)) {
        return <a href={link} style={{'--icon-url': `url(${icon})`}} className={className} draggable={draggable} {...props}></a>
    }

    return <Link to={link} style={{'--icon-url': `url(${icon})`}} className={className} draggable={draggable} {...props}></Link>
}

export default LinkElem