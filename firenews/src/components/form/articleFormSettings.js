import React from 'react';
import styled from 'styled-components';
import CategoryChooser from './categoryChooser';
import RadioBtn from '../btn/radioBtn';
import HelpBtn from '../btn/helpBtn';
import Back from '../btn/back';

const Container = styled.div`
    padding: 80px 60px 70px 60px;

    @media screen and (max-width: 1000px) {
        padding: 30px;
    }
`;

const Title = styled.h2`
    font-size: 50px;
    font-weight: 600;
`;

const UnderTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
`;

const Text = styled.p`
    font-size: 20px;
    font-weight: 300;
    color: #6A6A6A;
    margin-bottom: 100px;
`;

const CheckWrapper = styled.div`
    display: grid; 
    grid-template-columns: auto auto 60px 1fr;
    align-items: center;
    grid-gap: 10px;
    margin-top: 80px;
`;

const WarningText = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: #EB7C74;
    display: ${props => props.show ? 'block' : 'none'};
`;

const WarningWrapper = styled.div`
    border: ${props => props.warning ? '1px solid #EB7C74' : 'none'};
    border-radius: 5px;
`;

const ArticleFormSettings = (props) => {
    return (
        <Container>
            {props.backTo && <Back to={props.backTo} />}
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>

            <UnderTitle>Choose a category</UnderTitle>
        
            <WarningWrapper warning={props.warning}>
                <CategoryChooser 
                    data={props.data}
                    active={props.category}
                    setActive={props.setCategory}
                    disabled={props.disabled}
                />
            </WarningWrapper>
            
            <WarningText show={props.warning}>Please choose a category that is suitable for the article</WarningText>

            <CheckWrapper>
                <UnderTitle>Front page</UnderTitle>
                <HelpBtn text='Select this option if you want the article you are publishing to appear on the front page' />
                <div></div>
                <RadioBtn 
                    handleClick={props.setFrontPage} 
                    active={props.frontPage} 
                    disabled={props.disabled}
                />
            </CheckWrapper>
        </Container>
    );
}

export default ArticleFormSettings;