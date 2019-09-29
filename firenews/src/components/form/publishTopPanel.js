import React, { useState } from 'react';
import styled from 'styled-components';
import CategoryChooser from './categoryChooser';
import RadioBtn from '../btn/radioBtn';

const Container = styled.div`
    background-color: white;
    padding: 150px 60px 70px 60px;
`;

const Title = styled.h2`
    font-size: 42px;
    font-weight: 600;
    color: black;
`;

const UnderTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
    color: black;
`;

const Text = styled.p`
    font-size: 18px;
    font-weight: 300;
    color: #6A6A6A;
    margin-bottom: 100px;
`;

const CheckWrapper = styled.div`
    display: grid; 
    grid-template-columns: auto 1fr;
    align-items: center;
    grid-gap: 50px;
    margin-top: 80px;
`;

const PublishTopPanel = (props) => {
    const [category, setCategory] = useState('');

    return (
        <Container>
            <Title>Publish something awsome!</Title>

            <Text>Write an article below and publish something you would like to share with the world.</Text>

            <UnderTitle>Category</UnderTitle>
    
            <CategoryChooser 
                data={props.data}
                active={category}
                setActive={setCategory}
            />

            <CheckWrapper>
                <UnderTitle>Show on front page</UnderTitle>
                <RadioBtn />
            </CheckWrapper>
        </Container>
    );
}

export default PublishTopPanel;