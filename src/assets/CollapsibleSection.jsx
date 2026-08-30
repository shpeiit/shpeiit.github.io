import CustomButton from './Buttons';
import './CollapsibleSection.css';

function CollapsibleSection({ text="", ...props }) {

    const clickHandler = (e) => {
        const parent = e.currentTarget.parentElement;
        parent.classList.toggle("CollapsibleSectionOpen");
    }

    const svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
        <path fill="none" d="M 5 5 L 35 20 L 5 35"/>
    </svg>;

    return (
        <div className="CollapsibleSection" {...props}>
            <CustomButton className="CollapsibleSectionBtn" onClick={clickHandler}>{svg}{text}</CustomButton>
            <div className="CollapsibleSectionContent">
                {props.children}
            </div>
        </div>
    );
}

export default CollapsibleSection;