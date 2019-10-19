import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    positon: relative;
    width: 200px;
    height: 50px;
`;

const Circle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid black;
    display: grid;
    jusitfy-items: center;
    align-items: center;
    cursor: pointer;
`;

const Img = styled.img`
    height: 70%;
    margin: auto;
`

const TextContainer = styled.div`
    position: absolute;
    width: 100;
    height: 100;
    border-radius: 10px;
    background-color: #999;
    display: hidden;
    opacity: 0;
    transition: all 100ms ease;

    ${Wrapper}:hover & {
        display: block;
        opacity: 1;
    }
`;

const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: black;

    opacity: 0;
    transition: all 100ms ease;

    ${Wrapper}:hover & {
        opacity: 1;
    }
`;

const HelpBtn = (props) => (
    <Wrapper>
        <Circle>
            <Img src='/icons/help.svg' />
        </Circle>
        
        <TextContainer>
        <Text>{props.text}</Text>
        </TextContainer>
    </Wrapper>
);

export default HelpBtn;