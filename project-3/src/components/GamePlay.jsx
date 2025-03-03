import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button, OutLineButton } from '../styled/Button'
import Rules from './Rules'
const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [selectedNumber,setSelectedNumber]=useState();
  const [currentDice, setCurrentDice]= useState(1);
  const [showRules, setShowRules] = useState()

  const generateRandomNumber = (min,max)=>
    {
        // console.log(Math.floor(Math.random()*(max-min) + min));
    return Math.floor(Math.random()*(max-min) + min);
    };
 

    const roleDice = ()=>{
      if (!selectedNumber) {
      setError("You have not selected any number")
        return;
      }
      setError("")
        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev)=>randomNumber);
    
      if (selectedNumber===randomNumber) {
        setScore((prev)=>prev +randomNumber) ;
      }
      else{
        setScore((prev)=>prev - randomNumber);
      }
      setSelectedNumber(undefined);
    };
    const resetScore=()=>{
    setScore(0)
    }
    
  return (
    <MainContainer>
<div className='top-section'>
   <TotalScore score={score}/>
   <NumberSelector
   error={error}
   setError={setError}
    selectedNumber={selectedNumber}
    setSelectedNumber={setSelectedNumber}
   />
</div>
<RoleDice
  currentDice={currentDice}
  roleDice={roleDice}
/>
<div className="btns">
  <OutLineButton
  onClick={resetScore}
  >Reset</OutLineButton>
  <Button
  onClick={()=>setShowRules((prev)=>!prev)}
  >{showRules?"Hide":"Show"} Rule</Button>
  </div>
  {showRules && <Rules/>}

    </MainContainer>
  )
}

export default GamePlay
const MainContainer = styled.main`
padding:10px 20px 0 30px;

.top-section{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btns{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
align-items: center;
gap: 10px;


}

`;