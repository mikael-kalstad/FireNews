import React, { useEffect, useState} from 'react';
import ArticleCard from '../articleCard';
import { shortHandTimeFormat } from '../../scripts/timeFormat';
import styled from 'styled-components';
import FloatButton from '../floatButton';

// Main container
const Container = styled.div`
    margin: 80px auto;
    max-width: 50vw;
   
    @media screen and (max-width: 600px) {
        max-width: 85vw;
    }
`;

const Title = styled.h2`
    font-size: 40px;
    font-weight: 400;
    color: var(--color-main);
`;

// Container for the main articles on the front page
const MainArticles = styled.div`
    grid-column: 1/3;
    display: grid;
    grid-template-columns: repeat(2, auto-fill);
    grid-auto-rows: max-content;
    grid-gap: 40px;
`;

// Container for side articles on the front page
const SideArticles = styled.div`
    display: grid; 
    grid-auto-rows: max-content;
    grid-gap: 40px;
`

// Container for the large article on the front page
const BigArticle = styled.div`
    grid-column: 1/3;
`;

// Container for all articles that did not fit on the front page
const Articles = styled.div`
    border-top: 4px solid var(--color-border);
    padding-top: 80px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
`

const Home = (props) => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth);

        window.addEventListener('resize', setWidth(window.innerWidth)); 
        return () => window.removeEventListener('resize', setWidth(window.innerWidth));
    }, []);

    // Render "skeleton" articles for loading
    let articles = [];
    for (let i = 0; i < 6; i++) {
        articles.push(
            <ArticleCard 
                key={i}
                size={i === 0 ? 'big' : 'small'}
            />
        );
    }

    // Render articles if data exists
    if (props.data !== null && props.data !== undefined && props.data.length !== 0) {
        // Remove skeleton data
        articles = [];

        for (let i = 0; i < props.data.length; i++) {
            let a = props.data[i];

            articles.push(
                <ArticleCard
                    key={a._id}
                    link={`/article/${a._id}`}
                    img={a.img}
                    title={a.title}
                    time={shortHandTimeFormat(new Date(a.date))}
                    size={i === 0 ? 'big' : 'small'}
                />
            );
        }
    }

    let breakpoint = 1200;

    // Container for all articles on front page
    const FrontPage = styled.div`
        position: relative;
        margin-bottom: 80px;
        display: grid;
        grid-gap: 40px;
        grid-template-columns: ${width > breakpoint ? '1fr 1fr 1fr' : '1fr 1fr'};
    `;

    return (
        <Container>
            <Title><span style={{fontWeight: 700}}>{props.category}</span> news</Title>

            <FrontPage id='frontPage-container'>
                <MainArticles>
                    <BigArticle>
                        {articles[0]}
                    </BigArticle>


                    {width > breakpoint ? articles.slice(1, 3) : articles.slice(1, 5)}
                </MainArticles>

                {width > breakpoint && 
                    <SideArticles>
                        {articles.slice(3, 5)}
                    </SideArticles>
                }

                <FloatButton />
            </FrontPage>

            <Articles>
                {articles.slice(5)}
            </Articles>
        </Container>      
    );
}

export default Home;