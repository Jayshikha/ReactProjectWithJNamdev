import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  width: 220px;  /* Fixed width */
  height: 44px;  /* Fixed height */
  gap: 10px;
  border-radius: 5px 0px 0px 0px;
  background: black;
  color: white;
  font-size: 16px;
  transition: 0.4s background ease-in;
  
  &:hover {
    background-color: white;
    cursor: pointer;
    border: 1px solid black;  /* Fixed border-color property */
    color: black;
    transition: 0.3s background ease-in;
  }
`;


export const OutLineButton = styled(Button)`

background-color: white;
color: black;
border-color: 1px solid black;
&:hover{

  background-color: black;
  cursor: pointer;
  border-color: 1px solid transparent;
  color: white;
  transition: 0.3s background ease-in;
}

`;