import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: auto;
    width: 130px;
    height: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10000px;
    background-color: ${props => props.color ? props.color : '#84DB76'};
    display: grid;
    grid-template-columns: 40px auto;
    justify-items: center;
    align-items: center;
    padding-right: 10px;
    text-decoration: none;
    transition: all 170ms ease;

    display: grid; 
    justify-items: center;
    align-items: center;
    cursor: pointer;

    :hover {
        filter: brightness(103%);
    }

    :active {
        box-shadow: none;
    }
`;  

const Text = styled.p`
    text-align: start;
    font-size: 14px;
    color: ${props => props.color ? props.color : 'white'};
    font-weight: 500;
    justify-self: start;
    transition: all 200ms ease;
    margin-right: 8px;
`;

const Logo = styled.img`
    height: 50%;
`;

const LogoBtn = props => (
    <Container onClick={props.handleClick} color={props.color}>
        <Logo src={props.logo}/>
        <Text color={props.textColor}>{props.text}</Text>
    </Container>
);

export default LogoBtn;