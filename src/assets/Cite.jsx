import './Cite.css';
import LinkElem from './LinkElem';

function Cite({link, ...props}) {
  return (
    <span>
        {props.children}
        <LinkElem link={link} target="_blank">{link}</LinkElem>
    </span>
  );
}

export default Cite;