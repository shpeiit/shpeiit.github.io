import CustomButton from './Buttons';
import './Sponsor.css';

function Sponsor({ name, logo, website, type }) {
    /*
    <div className={`sponsor sponsor-${type} unselectable`}>
        <LinkElem link={website} target="_blank">
                <img className='not-draggable' src={logo} alt={name} />
                <h3>{name}</h3>
                <p>{type}</p>
        </LinkElem>
    </div>
    */
    return (
        <CustomButton className={`sponsor sponsor-${type} unselectable`} link={website} target="_blank">
            <img className='not-draggable' src={logo} alt={name} />
            <h3>{name}</h3>
            <p>{type}</p>
        </CustomButton>
    );
}

export default Sponsor;