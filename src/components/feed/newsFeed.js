import React from 'react';
import styled from 'styled-components';
import NewsFeedCard from './newsFeedCard';

const Container = styled.div`
    position: fixed;
    right: 0;
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
    let cards = [];

    for (let i = 0; i < 6; i++) {
        cards.push(
            <NewsFeedCard key={i} loading={true}/>
        )
    }

    if (props.data && props.data.length !== 0) {
        cards = [];
        props.data.forEach(a => {
            cards.push(
                <NewsFeedCard
                    key={a._id}
                    link={'/article/' + a._id}
                    time={a.date}
                    content={a.title}
                    category={a.category}
                />
            )
        });
    }

    return (
        <Container>
            <Title>Latest news</Title>
            {cards}
        </Container>
    );
}

export default NewsFeed;