import React from 'react';
import styled from 'styled-components';
import ArticleCard from '../articleCard';
import { shortHandTimeFormat } from '../../scripts/timeFormat';

const Container = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 60px;

    @media screen and (max-width: 1000px) {
        padding: 30px;
    }
`;

const Title = styled.h2`
    font-size: 50px;
    font-weight: 600;
`;

const Text = styled.p`
    font-size: 20px;
    font-weight: 300;
    color: #6A6A6A;
    margin-bottom: 100px;
`;

const ArticleGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`;

const Edit = props => {
    // Render "skeleton" articles for loading
    let articles = [];
    for (let i = 0; i < 12; i++) {
        articles.push(
            <ArticleCard 
                key={i}
                size='small'
                loading={true}
            />
        );
    }

    // Render articles if data exists
    if (props.data !== null && props.data !== undefined && props.data.length !== 0) {
        // Remove skeleton data
        articles = [];

        for (let i = props.data.length; i--; i >= 0) {
            let a = props.data[i];

            articles.push(
                <ArticleCard
                    key={a._id}
                    link={`/edit/${a._id}`}
                    img={a.img}
                    title={a.title}
                    time={shortHandTimeFormat(new Date(a.date))}
                    size={'small'}
                    editMode={true}
                />
            );
        }
    }

    return (
        <Container>
            <Title>Edit</Title>        
            <Text>Select an article to edit or delete</Text>

            <ArticleGrid>
                {articles}
            </ArticleGrid>
        </Container>
    );
} 

export default Edit