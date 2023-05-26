import styled from "styled-components";

interface ButtonProps{
  color: string;
  hoverColor: string;
}

export const ButtonContainer = styled.button<ButtonProps>`
  position: relative;
  margin: 20px;
  border: none;
  border-radius: 10px;
  padding: 0 40px 20px 40px;
  text-align: center;
  background-color: ${(props)=> props.color};

  &:hover{
    background-color: ${(props)=> props.hoverColor};
  }
`

export const ButtonText = styled.p`
  font-size: 16px;
  color: white;
  font-weight: bold;
`