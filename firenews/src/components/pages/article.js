import React, { useState } from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

import {timeFormat} from '../timeFormat';

const Container = styled.div`
    max-width: 900px;
    margin: auto;
    padding: 40px;
`;

const Title = styled.h1`
    font-size: 60px; 
    font-weight: 500;
    text-transform: uppercase;
    width: 75%;
`

const Author = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #7A7A7A;
    width: 30%;
`;

const Line = styled.div`
    width: 10%;
    height: 2px; 
    border-radius: 10px;
    background-color: #F85757;
`;

const Summary = styled.p`
    font-size: 22px;
    font-weight: 300;
    line-height: 150%;
    margin-top: 30px;
`;

const Image = styled.img`
    border-radius: 5px;
    width: 100%;
    max-height: ${props => props.imageLarge ? '1000px' : '350px'};
    object-fit: cover;
    margin: 30px 0;
    transition: max-height 400ms ease;
    cursor: ${props => props.imageLarge ? 'zoom-out' : 'zoom-in'};
`;

const Text = styled.p`
    font-size: 18px;
    /* font-weight: 300; */
    line-height: 170%;
`;

const Box = styled.div`
    height: 1200px;
`

const Article = (props) => {
    const [imageLarge, setImageLarge] = useState(false);

    // Find aricle with the given id
    // const article = undefined
    const article = props.data.find(a => a._id == props.match.params.id);
    let render = article != undefined;

    return (
        <Container>
            <Title>{render && article.title || <Skeleton count={3} />}</Title>
            {render && <Author>By {article.author}, {props.time}</Author> || <Skeleton width={'30%'} />}  
            <Line></Line>

            <Summary>{render && article.summary || <Skeleton count={3}/>}</Summary>
            {render && 
                <Image src={article.img} large={imageLarge} onClick={() => setImageLarge(!setImageLarge)}/> || <Skeleton height={300} />}
            <Text>{render && article.content || <Skeleton count={5}/>}</Text>
            <Text>{render || <Skeleton count={5}/>}</Text>
        </Container>
    );
};

export default Article;