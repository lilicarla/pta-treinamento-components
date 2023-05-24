import styled from "styled-components";

interface ContainerProps{
	color: string;
}

export const Container = styled.div<ContainerProps>`
  width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
	background-color: ${(props)=> props.color};
  margin: 20px;
  border-radius: 5%;
  padding: 20px;
`

export const CardTitle = styled.h1`
	font-size: 36px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  margin-bottom: 20px;
`;

export const CardText = styled.p`
		font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
`;