import React from 'react';
import styled from 'styled-components';
import '../../colors.css';

const CategorySelector = (props) => {
    const Container = styled.div`
        width: 100px;
        height: 70px;
        padding: 20px;
        border-radius: 5px;
        background-color: ${props.active ? '#2ABC7E' : '#F1F1F1'};
        display: grid;
        grid-template-rows: 1fr 1fr;
        cursor: ${props => props.disabled ? 'default' : 'pointer'};

        :hover {
            background-color: ${props.active ? '#2AB67B' : '#ebebeb'};
        }
    `;

    const Icon = styled.img`
        height: 25px;
        filter: ${props.active ? 'invert(100%)' : ''};
    `;

    const Text = styled.p`
        font-size: 18px;
        font-weight: 500;
        color: ${props.active ? 'white' : '#2E2F41'};
    `;

    return (
        <Container onClick={() => !props.disabled && props.setActive(props.name)} disabled={props.disabled}>
            <Icon src={'/icons/flame.svg'} />
            <Text>{props.name}</Text>
        </Container>
    );
}

export default CategorySelector;