import React from 'react';
import styled from 'styled-components';
import '../../colors.css';

const CategorySelector = (props) => {
    const Container = styled.div`
        width: 100px;
        height: 70px;
        padding: 20px;
        border-radius: 5px;
        background-color: ${props.active === props.name ? 'var(--color-main)' : '#F1F1F1'};
        display: grid;
        grid-template-rows: 1fr 1fr;
        cursor: pointer;

        :hover {
            background-color: ${props.active === props.name ? '#4d5bb0' : '#ebebeb'};
        }
    `;

    const Icon = styled.img`
        height: 20px;
    `;

    const Text = styled.p`
        font-size: 18px;
        font-weight: 500;
        color: ${props.active === props.name ? 'white' : '#2E2F41'};
    `;

    return (
        <Container onClick={() => props.setActive(props.name)}>
            <Icon src={props.icon} />
            <Text>{props.name}</Text>
        </Container>
    );
}

export default CategorySelector;