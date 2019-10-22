import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 5px;
    cursor: pointer;
`;

const Text = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: black;
`;

const Arrow = styled.img`
    position: relative;
    filter: invert(100%);
    transform: rotate(180deg);
    height: 20px;
    transition: all 200ms ease;

    ${Container}:hover & {
        transform: translateX(-7px) rotate(180deg);
    }
`;

const Back = props => {
    return (
        <Link to={props.to || '/'} style={{ textDecoration: 'none' }}>
            <Container>
                <Arrow src='/icons/arrow.svg' />
                <Text>{props.name || 'Back'}</Text>
            </Container>
        </Link>
    )
}

export default Back;