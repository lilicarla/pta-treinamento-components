import React from "react";
import { HomeContainer, CardContainer } from './styles';
import { LogoCITi } from '../../assets';
import { Card } from '../../components';

export const Home: React.FC = () => {
    return (
        <HomeContainer>
            {/* <img src={LogoCITi} alt="" /> */}
            <CardContainer>
                <Card 
                    title="Titulo" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in odio sed felis dictum pharetra." 
                    color="#830672"
                />
            </CardContainer>
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