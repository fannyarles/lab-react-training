import { useState } from "react";

function LikeButton() {

    const [ likes, setLikes ] = useState(0);
    const [ btnColor, setBtnColor ] = useState('yellow');
    const colors = ['purple','blue','green','yellow','orange','red'];
    const addLike = () => setLikes( likes + 1 );
    const changeColor = () => setBtnColor( colors[ Math.floor( Math.random() * colors.length )] );

    return(
        <button className="likeButton" onClick={ () => { addLike(); changeColor(); } } style={ { backgroundColor: btnColor }}>
            { likes } Likes
        </button>
    )

}

export default LikeButton;