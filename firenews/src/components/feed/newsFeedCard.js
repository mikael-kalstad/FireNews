import React from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { shortHandTimeFormat } from '../../scripts/timeFormat';

const Container = styled.div`
    position: relative;
    height: 70px;
    background-color: var(--color-light-secondary);
    border-top: 2px solid var(--color-border);
    padding: 15px;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 20% 70%;
    grid-column-gap: 10px;
`;

const Logo = styled.img`
    width: 80%;
    margin: auto;
    grid-row: 2/3;
`;

const Time = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: #646464;
    width: 50%;
    grid-column: 2/3;
    margin: 0;
`;

const Content = styled.p`
    font-size: 12px;
    font-weight: 700;
    color: var(--color-main);
    width: 80%;
    align-self: center;
`;

const ReadArticle = styled.div`
    position: absolute;
    bottom: 2px;
    left: calc(20% + 20px);
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

const Text = styled.p`
    font-size: 10px;
    font-weight: 500;
    color: black;
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
            <Logo src={'/icons/flame.svg'}/>

            <Time>{shortHandTimeFormat(props.time) || <Skeleton />}</Time>
            <Content>{props.content || <Skeleton count={3} />}</Content>

            <ReadArticle>
                <Text>Read article</Text>
                <ArrowLogo src='/icons/arrow.svg'></ArrowLogo>
            </ReadArticle>
        </Container>
    </Link>
);

export default NewsFeedCard