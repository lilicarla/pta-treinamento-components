import React from "react";
import { HomeContainer, CardContainer } from './styles';
import { Card, Button } from '../../components';

export const Home: React.FC = () => {
    
const [count, setCount] = React.useState(0);
const [selected, setSelected] = React.useState(false);

    return (
        <HomeContainer>
            <CardContainer>
                <Card 
                    title="Titulo" 
                    description={count.toString()}
                    color="#830672"
                    selected={selected}
                />

            </CardContainer>

            <Button text="Somar" color="#3cc591" hoverColor="#000000"  onClick={() => setCount(count + 1)}/>

            <Button text="Subtrair" color="#f02b2b" hoverColor="#b10303"  onClick={() => setCount(count - 1)}/>

            <Button text="Selecionar" color="#f0f02b" hoverColor="#a0a003"  onClick={() => setSelected(!selected)}/>
            <h1>Components + Props</h1>
            <p>
                Made with
                {' '}
                <strong>&lt; &#x0002F; &gt;</strong>
                {' '}
                and
                {' '}
                <strong>&hearts;</strong>
                {' '}
                by Mari & Lili
            </p>
        </HomeContainer>
    );
}