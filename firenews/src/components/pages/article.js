import React from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

// import {timeFormat} from '../timeFormat';

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

const AuthorWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 3px;
`

const Author = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #7A7A7A;
`;

const Line = styled.div`
    width: 80%;
    height: 5px; 
    border-radius: 10px;
    background-color: #F85757;
    transition: all 250ms ease;

    ${AuthorWrapper}:hover & {
        width: 70%;
    }
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
    max-height: 350px;
    object-fit: cover;
    transition: max-height 300ms ease;
    cursor: pointer;
`;  

const ImageDescription = styled.p`
    font-size: 14px;
    font-weight: 300;
    line-height: 150%;
    color: #7A7A7A;
`;

const Text = styled.p`
    font-size: 18px;
    /* font-weight: 300; */
    line-height: 170%;
    margin-top: 60px;

    ::first-letter {
        font-size: 70px;
        font-weight: 700;
        line-height: 50px;
        color: #f9a404;
        float:left;
        /* padding-top: 2px; */
        padding-right: 10px;
        padding-left: 3px;
    }
`;

const Article = (props) => {
    let imgLarge = false;
  
    // Find aricle with the given id
    const article = props.data.find(a => a._id === props.match.params.id);
    let render = article !== undefined;

    let handleImgClick = () => {
        let img = document.getElementById('article-img');
        img.style.maxHeight = imgLarge ? '350px' : '600px';
        
        imgLarge = !imgLarge;
    }

    return (
        <Container>
            <Title>{render && article.title || <Skeleton count={3} />}</Title>
            
            <AuthorWrapper>
                {render && <Author>By {article.author}, {props.time}</Author> || <Skeleton width={'30%'} />}  
                <Line></Line>
            </AuthorWrapper>

            <Summary>{render && article.summary || <Skeleton count={3}/>}</Summary>
            
            {render &&
                <Image 
                    src={article.img} id='article-img' 
                    onClick={() => handleImgClick()}
                /> 
                || <Skeleton height={300} />
            }

            {render &&
                <ImageDescription>{article.imgDescription}</ImageDescription>
                || <Skeleton />
            }
            <Text>{render && article.content || <Skeleton count={5}/>}</Text>
            
            {/* Extra component only for loading */}
            <Text>{render || <Skeleton count={5}/>}</Text>
        </Container>
    );
};

export default Article;