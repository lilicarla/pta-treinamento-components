import React from "react";
import { Container, CardTitle, CardText } from './styles';

type CardProps = {
	title: string;
	description: string;
	color: string;
}

export const Card = ({ title, description, color } : CardProps) => {
	return(
		<Container color={color}>
				<CardTitle>{title}</CardTitle>
				<CardText>{description}</CardText>
		</Container>
	)
}