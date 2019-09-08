import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    right: 0; top: 0;
    width: 240px;
    height: 100vh;
    background-color: var(--color-light);
    border-left: 2px solid var(--color-border);
`
const Title = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: var(--color-main);
`

const NewsFeed = () => {
    return (
        <Container>
            <Title>Latest news</Title>
        </Container>
    );
}

export default NewsFeed;