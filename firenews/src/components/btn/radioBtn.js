import React, { useState } from 'react';
import styled from 'styled-components';

const Circle = styled.div`
    width: 30px;
    height: 30px;
    transform: ${props => props.active ? 'scale(1.2)' : 'scale(1.0)'};
    border-radius: 50%;
    background-color: ${props => props.active ? '#57B1CE' : '#F1F1F1'};
    display: grid;
    justify-items: center;
    align-items: center;
    transition: all 80ms ease;
    cursor: pointer;

    :hover {
        background-color: ${props => props.active ? '#47A9C9' : '#EAEAEA'};
    }
`;

const Logo = styled.img`
    height: 60%;
`;

const RadioBtn = props => {
    const handleClick = () => {
        if (props.handleClick)
            props.handleClick(!props.active);
    }

    return (
        <Circle active={props.active} onClick={handleClick}>
            {props.active && <Logo src='/icons/check.svg'/>}
        </Circle>    
    );
}

export default RadioBtn;