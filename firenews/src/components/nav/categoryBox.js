import React from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import '../../colors.css';

// Text below category icon
const Text = styled.p`
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    color: var(--color-main);
    width: 60%;
`

const Image = styled.img`
    width: ${props => props.width ? props.width : '50%'};
    object-fit: cover;
`;

const ImageBox = styled.div`
    width: 50%;
    padding-bottom: 50%;
    border-radius: 50%;
    background-color: var(--color-light);
`;

const CategoryBox = (props) => {
    // Container box for each category
    const Container = styled.div`
        /* padding-top: 50%; */
        height: ${props.width + 'px'};
        background-color: ${props.active ? '#F1F1F9' : 'white'};
        border-bottom: 2px solid var(--color-border);
        cursor: ${props.name ? 'pointer' : 'default'};

        :hover {
            background-color: var(--color-light);
        }

        display: grid;
        grid-template-rows: ${props.name ? '70% 30%' : '1fr'};
        align-items: center;
        justify-items: center;
    `;

    const Box = (
        <Container onClick={() => props.handleClick(props.name)}>
            {props.img 
                ? <Image src={props.img}></Image>
                : <ImageBox />
            }

            <Text>{props.name || <Skeleton />}</Text>
        </Container>
    );

    if (props.name !== 'undefined' || props.name === null) {
        return (
            <Link to='/' style={{ textDecoration: 'none' }}>
                {Box}
            </Link>
        )
    }

    return {Box};

}

export default CategoryBox;