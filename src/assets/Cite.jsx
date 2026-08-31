import './Cite.css';
import LinkElem from './LinkElem';

function Cite({link, linkText, ...props}) {
  if (!linkText) {
    linkText = link;
  }
  return (
    <span>
        {props.children}
        <LinkElem link={link} target="_blank">{linkText}</LinkElem>
    </span>
  );
}

export default Cite;