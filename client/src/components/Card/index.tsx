import React from "react";
import { Container, CardTitle, CardText } from './styles';

type CardProps = {
	title: string;
	description: string;
	color: string;
	selected: boolean;
}

export const Card = ({ title, description, color, selected } : CardProps) => {
	return(
		<Container color={color} selected={selected}>
				<CardTitle>{title}</CardTitle>
				<CardText>{description}</CardText>
		</Container>
	)
}