import React from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../articleCard';
import { timeFormat } from '../timeFormat';
import styled from 'styled-components';

const Container = styled.div`
    padding: 40px;
    display: grid;
    grid-gap: 40px;
    /* grid-auto-columns: auto; */
    /* grid-auto-flow: column; */
    /* grid-template-columns: repeat(auto-fill, minmax(200px, auto)); */
    grid-template-columns: auto;
    /* grid-template-rows: auto; */
`;

const mainArticles = styled.div`

`;

const sideArticles = styled.div`

`;

const Home = (props) => {
    let articles = [];
    // for (let i = 0; i < 6; i++) 
    //     articles.push(<ArticleCard key={i}></ArticleCard>);

    // Check if data exists
    if (props.data) {
        for (let i = 0; i < props.data.length; i++) {
            let a = props.data[i];

            articles.push(
                // <Link to={`/article/${a._id}`} key={a._id}>
                    <ArticleCard
                        img={a.img}
                        title={a.title}
                        time={timeFormat(new Date(a.date))}
                        size={i === 1 ? 'big' : 'small'}
                    >
                    </ArticleCard>
                // </Link>
            );
        }
    }

    return (
        <Container>
            {articles}
        </Container>
    );
}

export default Home;