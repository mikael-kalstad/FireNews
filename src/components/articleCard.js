import React from 'react';
import styled from 'styled-components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

// Overlay to make it easier to read text over any picture
const Overlay = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60%;
    background-image: linear-gradient(rgba(0,0,0, 0.0), rgb(0,0,0));
    border-radius: 5px;
`;

// Margin for title and time 
let marginLeft = 30;

const ArticleCard = (props) => {
    const Container = styled.div`
        position: relative;
        padding-bottom: ${(props.size === 'small' ? 75 : 62) + '%'};
        border-radius: 5px;
        background-color: var(--color-light);
        background-image: url(${props.img});
        background-size: cover;
        transition: all 150ms ease;

        :hover {
            box-shadow: ${props.editMode && '0px 5px 5px rgba(0, 0, 0, 0.3)'};
        }
    `;

    const Logo = styled.div`
        position: absolute;
        width: ${(props.size === 'small' ? 45 : 90) + 'px'};
        height: ${(props.size === 'small' ? 45 : 90) + 'px'};
        border-radius: 50%;
        background-color: white;
        margin-left: ${marginLeft + 'px'};
        top: ${marginLeft + 'px'};
    `;

    const Title = styled.h2`
        position: absolute;
        bottom: 30px;
        font-size: ${(props.size === 'big' ? 30 : 14) + 'px'};
        font-weight: 500;
        width: 70%;
        margin-left: ${marginLeft + 'px'};
        color: ${props.img ? 'white' : '#44519e'};
        transition: all 200ms ease;

        /* Hover should only work when the title is loaded */
        ${Container}:hover & {
            bottom: ${props.editMode ? 'none' : '50px'};
        }

        @media screen and (min-width: 1400px) {
            font-size: ${(props.size === 'big' ? 40 : 25) + 'px'};
        }
    `;

    const ReadMore = styled.div`
        position: absolute;
        bottom: 45px;
        margin-left: ${marginLeft + 'px'};
        height: ${(props.size === 'big' ? 40 : 20) + 'px'};
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 5px;
        align-items: center;
        opacity: 0;
        transition: all 200ms ease;

        /* Hover should only work when the title is loaded */
        ${Container}:hover & {
            opacity: ${props.editMode ? 0 : 1};
        }
    `;

    const ArrowLogo = styled.img`
        height: 40%;
        transition: all 200ms ease;

        ${Container}:active & {
            margin-left: 10px;
        }
    `

    const Text = styled.p`
        font-size: ${(props.size === 'big' ? 14 : 7) + 'px'};
        font-weight: ${props.img ? 200 : 700};
        color: ${props.img ? 'white': '#B9C0D3'};
    `;

    const Time = styled.p`
        position: absolute;
        bottom: 10px;
        font-size: ${(props.size === 'big' ? 14 : 7) + 'px'};
        font-weight: ${props.img ? 200 : 700};
        width: 30%;
        margin-left: ${marginLeft + 'px'};
        color: ${props.img ? 'white': '#B9C0D3'};
    `;
    
    const card = (
        <SkeletonTheme color={'#F9FAFC'}>
            <Container>
                {props.img ? <Overlay></Overlay> : <Logo></Logo>}

                {/* Lazy load image until props.img is defined */}
                {!props.img && !props.title &&
                    <SkeletonTheme color={'#F1F1F9'}>
                        <Skeleton />
                    </SkeletonTheme>
                }
                <Title>{props.title || <Skeleton count={2}/>}</Title>

                <ReadMore>
                    <Text>Read more</Text> 
                    <ArrowLogo src='/icons/arrow.svg'></ArrowLogo>
                </ReadMore>

                <Time>{props.time || <Skeleton />}</Time>
            </Container>
        </SkeletonTheme>
    );

    // console.log("Title: " + props.title + ", Img: " + props.img);
        

    if (props.link) 
        return (
            <Link to={props.link} onClick={() => window.scrollTo(0, 0)}>
                {card}
            </Link>
        );

    return card;
}

export default ArticleCard;