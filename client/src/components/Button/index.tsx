import React from "react";
import { ButtonContainer, ButtonText } from './styles';

type ButtonProps = {
	text: string;
  color: string;
  hoverColor: string;
  onClick: () => void;
}

export const Button = ({ text, color, hoverColor, onClick } : ButtonProps) => {
	return(
		<ButtonContainer
    color={color}
    hoverColor={hoverColor}
    onClick={onClick}
    >
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
	)
}