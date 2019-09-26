import React from 'react';
import styled from 'styled-components';
import NewsFeedCard from './newsFeedCard';

const Container = styled.div`
    width: 240px;
    height: 100vh;
    background-color: var(--color-light);
    border-left: 2px solid var(--color-border);
    padding-top: 20px;
`;

const Title = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: var(--color-main);
    margin-left: 40px;
    padding-bottom: 10px;
`;

const NewsFeed = (props) => {
    return (
        <Container>
            <Title>Latest news</Title>
            {/* <NewsFeedCard
                time={props.data.date}
                content={props.data.summary}
            ></NewsFeedCard> */}
        </Container>
    );
}

export default NewsFeed;