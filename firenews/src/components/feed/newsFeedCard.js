import React from 'react';
import styled from 'styled-components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Container = styled.div`
    width: 100%;
    height: 90px;
    background-color: var(--color-light-secondary);
    border-top: 2px solid var(--color-border);
    padding: 20px;
`;

const Time = styled.p`
    font-size: 10px;
    font-weight: 700;
    width: 30%;
`;

const Content = styled.p`
    font-size: 10px;
    font-weight: 200;
    width: 80%;
`;

const NewsFeedCard = (props) => (
    <Container>
        {/* <SkeletonTheme color={'#F1F1F9'}> */}
        <Time>{props.time || <Skeleton />}</Time>
        <Content>{props.content || <Skeleton count={3} />}</Content>
        {/* </SkeletonTheme> */}
    </Container>
);

export default NewsFeedCard