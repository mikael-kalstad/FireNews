import React from 'react';
import styled from 'styled-components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

// Overlay to make it easier to read text over any picture
const Overlay = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(rgba(0,0,0, 0.0), rgb(0,0,0));
    border-radius: 5px;
`;

// Margin for title and time 
let marginLeft = 30;

const ArticleCard = (props) => {
    const Container = styled.div`
        position: relative;
        width: ${(props.size === 'small' ? 225 : 470) + 'px'};
        height: ${(props.size === 'small' ? 180 : 300) + 'px'};
        border-radius: 5px;
        background-color: var(--color-light);
        background-image: url(${props.img});
        background-size: cover;
    `;

    const Logo = styled.div`
        position: absolute;
        width: ${(props.size === 'small' ? 45 : 90) + 'px'};
        height: ${(props.size === 'small' ? 45 : 90) + 'px'};
        border-radius: 50%;
        background-color: white;
        margin-left: ${marginLeft + 'px'};
        top: ${marginLeft + 'px'};
    `;

    const Title = styled.h2`
        position: absolute;
        bottom: 30px;
        font-size: ${(props.size === 'big' ? 30 : 14) + 'px'};
        font-weight: 500;
        width: 70%;
        margin-left: ${marginLeft + 'px'};
        color: ${props.img ? 'white' : '#44519e'};
    `;

    const Time = styled.p`
        position: absolute;
        bottom: 10px;
        font-size: ${(props.size === 'big' ? 14 : 7) + 'px'};
        font-weight: ${props.img ? 200 : 700};
        width: 30%;
        margin-left: ${marginLeft + 'px'};
        color: ${props.img ? 'white': '#B9C0D3'};
    `;
        
    return (
        <SkeletonTheme color={'#F9FAFC'}>
            <Container>
                {(props.title || props.time) && <Logo></Logo>}

                {props.img && <Overlay></Overlay>}

                {/* Lazy load image until props.img is defined */}
                {props.img ? null :
                    <SkeletonTheme color={'#F1F1F9'}>
                        <Skeleton height={props.size === 'big' ? 300 : 180} />
                    </SkeletonTheme>
                }

                <Title>{props.title || <Skeleton /> }</Title>
                <Time>{props.time || <Skeleton />}</Time>
            </Container>
        </SkeletonTheme>
    ); 
}

export default ArticleCard;