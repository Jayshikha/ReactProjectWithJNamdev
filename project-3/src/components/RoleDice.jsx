import { useState } from "react"
import styled from "styled-components"

const RoleDice = ({currentDice, roleDice}) => {

 
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/Image/dice_${currentDice}.png`} alt="" />
        <p>Click on Dice to roll</p>
      </div>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */
margin-top: 20px;
p{
    font-size: 24px;
    padding-left:20px;
}
.dice{
    cursor: pointer;

}

`;