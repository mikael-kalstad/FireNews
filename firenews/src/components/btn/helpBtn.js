import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    positon: relative;
    width: fit-content;
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
    max-width: 250px;
    border-radius: 10px;
    background-color: #FB7A42;
    padding: 15px;
    z-index: 99;
    display: ${props => props.show ? 'block' : 'hidden'};;
    opacity: ${props => props.show ? 1 : 0};
    transition: all 100ms ease;
`;

const Text = styled.p`
    line-height: 160%;
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    color: white;
    transition: all 100ms ease;
`;

const HelpBtn = (props) => { 
    const [display, setDisplay] = useState(false);

    return (
        <Wrapper onMouseLeave={() => setDisplay(false)} >
            <Circle onMouseOver={() => setDisplay(true)} onClick={() => setDisplay(true)}>
                <Img src='/icons/help.svg' />
            </Circle>
            
            <TextContainer show={display}>
                <Text>{props.text}</Text>
            </TextContainer>
        </Wrapper>
    );
}

export default HelpBtn;