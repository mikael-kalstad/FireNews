import React from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

import {timeFormat} from '../timeFormat';

const Container = styled.div`
    padding: 40px;
`;

const Title = styled.h1`
    font-size: 40px; 
    font-weight: 700;
`
const Summary = styled.p`

`;

const Text = styled.p`

`;

const Box = styled.div`
    height: 1200px;
`

const Article = (props) => {
    // Find aricle with the given id
    const article = props.data.find(a => a._id == props.match.params.id);
    let render = article !== undefined;

    return (
        <Container>
            <Title>{render && article.title || <Skeleton />}</Title>
            <Summary>{render && article.summary || <Skeleton />}</Summary>
            <Text>{render && article.content || <Skeleton />}</Text>

            <Box></Box>
        </Container>
    );
};

export default Article;