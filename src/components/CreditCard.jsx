import visaLogo from './../assets/images/visa.png';
import mastercardLogo from './../assets/images/master-card.png';

function CreditCard(props) {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

    let bankLogo;
    const divStyle = { color: color, backgroundColor: bgColor };
    type === "Visa" ? bankLogo = visaLogo : bankLogo = mastercardLogo;
    const cryptedNumber = `${"•".repeat(number.length - 4)} ${ number.slice(number.length - 4, number.length)}`;

    return(
        <div className="creditCard" style={ divStyle }>
            <img src={ bankLogo } alt={ type } /><br/>
            <p>{ cryptedNumber }</p><br/>
            Expires { expirationMonth }/{ expirationYear }<span>{ bank }</span><br />
            { owner }
        </div>
    );


}

export default CreditCard;