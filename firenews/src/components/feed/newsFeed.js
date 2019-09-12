import React from 'react';
import styled from 'styled-components';
import NewsFeedCard from './newsFeedCard';

const Container = styled.div`
    width: 240px;
    height: 100vh;
    background-color: var(--color-light);
    border-left: 2px solid var(--color-border);
`;

const Title = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: var(--color-main);
    margin-left: 40px;
    margin-top: 0;
`;

const NewsFeed = (props) => {
    return (
        <Container>
            <Title>Latest news</Title>
            <NewsFeedCard
                time={props.data.time}
                content={props.data.content}
            ></NewsFeedCard>
        </Container>
    );
}

export default NewsFeed;