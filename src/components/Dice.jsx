import { useState } from "react";
import emptyDice from '../assets/images/dice-empty.png';
import diceOne from '../assets/images/dice1.png';
import diceTwo from '../assets/images/dice2.png';
import diceThree from '../assets/images/dice3.png';
import diceFour from '../assets/images/dice4.png';
import diceFive from '../assets/images/dice5.png';
import diceSix from '../assets/images/dice6.png';

function Dice() {

    const dices = [emptyDice, diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];
    const [ diceImg, setDiceImg ] = useState(emptyDice)
    const rollDice = () => {
        setDiceImg(dices[0]);
        setTimeout(() => {
            const rndNum = Math.floor( Math.random() * 5 + 1);
            setDiceImg(dices[rndNum]);
        }, 1000);
    }

    return(
        <img src={ diceImg } onClick={ rollDice } alt="dice" width="80px" height="auto" />
    );

}

export default Dice;