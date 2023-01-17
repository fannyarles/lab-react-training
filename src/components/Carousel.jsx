import { useState } from "react";

function Carousel(props) {

    const { images } = props;
    const [ bgImgIndex, setBgImgIndex ] = useState(0);
    const divStyle = { backgroundImage: `url("${ images[bgImgIndex] }")` };
    const changeImg = (param) => {
        let idx;
        if ( param === 'next' ) { idx = bgImgIndex + 1; if (idx === 4) { idx = 0 }
        } else if ( param === 'previous' ) { idx = bgImgIndex - 1; if (idx === -1) { idx = 3 } }
        setBgImgIndex(Math.abs(idx))
    }

    return(
        <div className="carousel" style={ divStyle }>
            <button onClick={ () => changeImg('previous') }>Previous</button>
            <button onClick={ () => changeImg('next') }>Next</button>
        </div>
    )
}

export default Carousel;