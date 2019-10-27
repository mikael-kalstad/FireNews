import React from 'react';
import styled from 'styled-components';
import '../../colors.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const CategorySelector = props => {
    const Container = styled.div`
        width: 100px;
        height: 70px;
        padding: 20px;
        border-radius: 5px;
        background-color: ${props.active ? '#2ABC7E' : '#F1F1F1'};
        display: grid;
        grid-template-rows: 1fr 1fr;
        cursor: ${props.disabled || props.loading ? 'default' : 'pointer'};
        opacity: ${props.disabled ? 0.7 : 1};

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
        width: 80%;
        color: ${props.active ? 'white' : '#2E2F41'};
    `;

    return (
        <SkeletonTheme color={'#fafafa'}>
            <Container onClick={() => !props.disabled && !props.loading && props.setActive(props.name)} >
                {(props.name 
                    && <Icon src={props.name && `/icons/categories/${props.name.toLowerCase()}.svg`}/>)
                    || <Skeleton circle={true} height={30} width={30} />
                }
                
                <Text>{props.name || <Skeleton/>}</Text>
            </Container>
        </SkeletonTheme>
    );
}

export default CategorySelector;