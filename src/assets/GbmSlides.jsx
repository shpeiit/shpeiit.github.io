import CustomButton from "./Buttons"
import "./GbmSlides.css"

import { useState } from "react"

const links = [ // make sure the canva links only give VIEWING access
    "https://www.canva.com/design/DAHTQHTRmOc/YWL6Rhih1KmhTXFqeP9yTA/view?embed", // GBM 1
    "https://www.canva.com/design/DAHV-27QDcg/PoFf2Vc6HhLd3WYYGoWP6w/view?embed", // GBM 2
]

function GbmSlides() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleButtonClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <div className="gbmSlides">
            <div className="gbmBtns">
                {links.map((link, index) => {
                    const className = (index === selectedIndex ? "selected" : "") + " gbmBtn";
                    return (
                        <CustomButton key={index} className={className} onClick={() => handleButtonClick(index)}>
                            <p>{`GBM ${index + 1}`}</p>
                        </CustomButton>
                    );
                })}
            </div>
            <div className="gbmSlidesContainer">
                <div>
                    {links.map((link, index) => {
                        const displayStyle = index === selectedIndex ? "block" : "none";
                        return (
                            <iframe key={index} loading="lazy" src={link} style={{ display: displayStyle }} allowFullScreen></iframe>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default GbmSlides;