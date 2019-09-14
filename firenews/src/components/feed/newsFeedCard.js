import React from 'react';
import styled from 'styled-components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 90px;
    background-color: var(--color-light-secondary);
    border-top: 2px solid var(--color-border);
    padding: 20px;
`;

const Time = styled.p`
    font-size: 12px;
    font-weight: 700;
    color: var(--color-main);
    width: 30%;
`;

const Content = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: #646464;
    width: 80%;
`;

const ReadArticle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    align-items: center;
    opacity: 0;
    transition: all 200ms ease;

    /* Hover should only work when the title is loaded */
    ${Container}:hover & {
        opacity: 1;
    }
`;

const ArrowLogo = styled.img`
    height: 40%;
    transition: all 200ms ease;
    filter: brightness(0%);

    ${Container}:active & {
        margin-left: 10px;
    }
`;

const NewsFeedCard = (props) => (
    <Link to={props.link} style={{ textDecoration: 'none' }}>
        <Container>
            {/* <SkeletonTheme color={'#F1F1F9'}> */}
            <Time>{props.time || <Skeleton />}</Time>
            <Content>{props.content || <Skeleton count={3} />}</Content>
            {/* </SkeletonTheme> */}

            <ReadArticle>
                <Time>Read article</Time>
                <ArrowLogo src='/icons/arrow.svg'></ArrowLogo>
            </ReadArticle>
        </Container>
    </Link>
);

export default NewsFeedCard