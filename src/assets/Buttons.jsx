import LinkElem from './LinkElem';

function CustomButton({ onClick=() => {}, link=null, icon, iconLeft, target, ...props }) {
    if (link) {
        return (
            <div className={`CustomButton ${props.className || ""}`} {...props}>
                <LinkElem link={link} icon={icon} iconLeft={iconLeft} target={target}>
                    {props.children}
                </LinkElem>
            </div>
        );
    }
    
    return <button onClick={onClick} className={`CustomButton ${props.className || ""}`} {...props}>
        {props.children}
    </button>
}

export default CustomButton;