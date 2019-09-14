import React, { useEffect, useState} from 'react';
import ArticleCard from '../articleCard';
import { timeFormat } from '../timeFormat';
import styled from 'styled-components';
import FloatButton from '../floatButton';
import '../../colors.css';

// Main container
const Container = styled.div`
    border: 1px dotted black;
    margin: 40px;
`;

// Container for all articles on front page
const FrontPage = styled.div`
    position: relative;

    display: grid;
    grid-gap: 40px;
    grid-template-columns: 1fr 1fr 1fr;

    border: 1px solid red;
  
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start; */
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
    /* grid-template-rows: 200px 200px; */
    grid-gap: 40px;
    border: 1px solid yellow;
`;

// Container for side articles on the front page
const SideArticles = styled.div`
    border: 1px solid blue;
    display: grid; 
    grid-auto-rows: max-content;
    /* grid-template-rows: 200px 200px; */
    grid-gap: 40px;
`

// Container for the large article on the front page
const BigArticle = styled.div`
    grid-column: 1/3;
`;

const SizeWrapper = styled.div`
    /* max-width: 100%; */
    width: fit-content;
    height: fit-content;
`; 

const Box = styled.div`
    background-color: lightblue;
    font-size: 40px;
    color: white;
    text-align: center;

    width: auto;
    height: auto;
`

const Home = (props) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        window.addEventListener('resize', updateWidth());
    }, []);

    let updateWidth = () => setWidth(document.getElementById('frontPage-container').clientWidth);

    console.log("width: " + width);

    // Render "skeleton" articles for loading
    let articles = [];
    for (let i = 0; i < 6; i++) {
        articles.push(
            <ArticleCard 
                key={i}
                size={i === 0 ? 'big' : 'small'}
            ></ArticleCard>
        );
    }

    // for (let i = 0; i < 5; i++){
    //     articles.push(
    //         <Box key={i}>{i}</Box>
    //     )
    // }

    // Render articles if data exists
    if (props.data) {
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
                    time={timeFormat(new Date(a.date))}
                    size={i === 0 ? 'big' : 'small'}
                    width={width}
                >
                </ArticleCard>
            );
        }
    }

    return (
        // <SizeWrapper id='content-container'>
        <Container>
            <Title><span style={{fontWeight: 700}}>{props.category}</span> news</Title>

            {/* <SizeWrapper id='frontPage-container'> */}
                <FrontPage id='frontPage-container'>
                    <MainArticles>
                        <BigArticle>
                            {articles[0]}
                        </BigArticle>


                        {articles.slice(1, 3)}
                    </MainArticles>

                    <SideArticles>
                        {articles.slice(3, 5)}
                    </SideArticles>

                    <FloatButton></FloatButton>
                </FrontPage>
            {/* </SizeWrapper> */}
        </Container>


            
    );
}

export default Home;