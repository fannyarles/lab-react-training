import { useState } from "react";

function ClickablePicture(props) {

    const { img, imgClicked } = props;
    const [ image, setImage ] = useState(img)
    const changeImage = () => image === img ? setImage(imgClicked) : setImage(img);

    return (
        <div className="clickablePic" onClick={ changeImage } style={ { backgroundImage: `url("${ image }")` } }></div>
    );

}

export default ClickablePicture;