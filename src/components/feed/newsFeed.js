import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsFeedCard from './newsFeedCard';
import ArticleDAO from '../../dao/articleDAO';

// Initiate DAO class
const articleDAO = new ArticleDAO();

const Container = styled.div`
    position: fixed;
    right: 0;
    width: 240px;
    height: 100vh;
    background-color: var(--color-light);
    border-left: 2px solid var(--color-border);
    padding-top: 20px;

    overflow-y: overlay;

    ::-webkit-scrollbar {
        width: 5px;
        position: absolute;
        display: none;
    }

    :hover {
        ::-webkit-scrollbar {
            width: 5px;
            display: block;
        }
    }

    /*  The draggable scrolling element resizes depending on the size of the scrollable element. */
    ::-webkit-scrollbar-thumb {
        background-color: #cfcfcf;
        border-radius: 10px;
    }
`;

const MobileContainer = styled.div`
    margin: 80px 30px 0 30px;
    padding: 15px;
    border-radius: 5px;
    background: #F1F1F9;
`;

const CardWrapper = styled.div`
    width: fit-content;
    display: grid;
    grid-gap: 20px;
    grid-auto-flow: column;
`;

let scroll_color = 'lightgrey';
let scroll_borderRadius = '5px';

const Slider = styled.div`
    max-width: 100%;
    padding-bottom: 30px;
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;        

    ::-webkit-scrollbar {
        height: 10px; 
    }

    /* The empty space “below” the progress bar. */
    ::-webkit-scrollbar-track {
        background-color: #F5F5F5;
        border: 1px solid ${scroll_color};
        border-radius: ${scroll_borderRadius};
    }

    /*  The draggable scrolling element resizes depending on the size of the scrollable element. */
    ::-webkit-scrollbar-thumb {
        background-color: ${scroll_color};
        border-radius: ${scroll_borderRadius};
    }
`;

const Title = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: var(--color-main);
    margin-left: 40px;
    padding-bottom: 10px;
`;

const NewsFeed = props => {
    const [newsFeedData, setNewsFeedData] = useState([]);

    const fetchData = async() => setNewsFeedData(await articleDAO.getArticles());

    // Get newsfeeddata every 10 seconds
    useEffect(() => {
        fetchData();

        setInterval(() => {
            fetchData();
        }, 10000);
    }, []); 

    let cards = [];

    for (let i = 0; i < 8; i++) {
        cards.push(
            <NewsFeedCard key={i} loading={true} mobile={props.mobile} />
        )
    }

    if (newsFeedData && newsFeedData.length !== 0) {
        cards = [];
        
        // Newest article should appear on the top
        for (let i = newsFeedData.length; i--; i >= 0) {
            // Limit nummber of newsfeed cards
            if (newsFeedData - i > 10) break;

            let a = newsFeedData[i];
            cards.push(
                <NewsFeedCard
                    key={a._id}
                    link={'/article/' + a._id}
                    time={a.date}
                    content={a.title}
                    category={a.category}
                    mobile={props.mobile}
                />
            )
        }
    }

    if (props.mobile) {
        return (
            <MobileContainer>
                <Title>Latest news</Title>
                
                <Slider>
                    <CardWrapper>
                        {cards}
                    </CardWrapper>
                </Slider>
            </MobileContainer>
        )
    }

    return (
        <Container>
            <Title>Latest news</Title>
            {cards}
        </Container>
    );
}

export default NewsFeed;