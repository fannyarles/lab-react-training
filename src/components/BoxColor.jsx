function BoxColor(props) {

    const { r, g, b } = props;

    const componentToHex = (c) => {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    
    const rgbToHex = (r, g, b) => {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    const rgbColor = `rgb(${ r }, ${ g }, ${ b })`;
    const hexColor = rgbToHex(r, g, b);
    const divStyle = { backgroundColor: hexColor }

    return(
        <div className="card" style={ divStyle }>
            <span>
                { rgbColor }<br/>{ hexColor }
            </span>
        </div>
    );


}

export default BoxColor;