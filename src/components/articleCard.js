import React from 'react';
import styled from 'styled-components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

// Overlay to make it easier to read text over any picture
const Overlay = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70%;
    background-image: linear-gradient(rgba(0,0,0, 0.0), rgb(0,0,0));
    border-radius: 5px;
`;

// Margin for title and time 
let marginLeft = 10;

const ArticleCard = props => {
    const Container = styled.div`
        position: relative;
        padding-bottom: ${(props.size === 'small' ? 75 : 62) + '%'};
        border-radius: 5px;
        background-color: var(--color-light);
        transition: all 100ms ease;

        :hover {
            box-shadow: ${!props.loading && '0px 5px 5px rgba(0, 0, 0, 0.3)'};
            transform: ${!props.loading && 'scale(1.005)'};
        }

        @media screen and (min-width: 1700px) {
            font-size: ${(props.size === 'big' ? 40 : 25) + 'px'};
        }

        @media screen and (min-width: 1400px and max-width: 1700px) {
            font-size: ${(props.size === 'big' ? 30 : 15) + 'px'};
        }

        @media screen and (max-width: 1400px) {
            font-size: ${(props.size === 'big' ? 32 : 14) + 'px'};
        }

        @media screen and (max-width: 750px) {
            font-size: ${(props.size === 'big' ? 32 : 18) + 'px'};
        }
    `;

    const Logo = styled.div`
        position: absolute;
        width: 20%;
        height: ${(props.size === 'small' ? 27 : 35) + '%'};
        border-radius: 50%;
        background-color: white;
        margin-left: ${marginLeft + '%'};
        top: ${marginLeft + '%'};
        display: grid;
        justify-items: center;
        align-items: center;
    `;

    const Title = styled.h2`
        position: absolute;
        bottom: 30px;
        //font-size: ${(props.size === 'big' ? 1.2 : 3) + 'vi'};
        font-size: 100%;
        font-weight: 500;
        width: 80%;
        margin-left: ${marginLeft + '%'};
        color: ${props.img ? 'white' : '#44519e'};
        transition: all 200ms ease;
    `;

    const Time = styled.p`
        position: absolute;
        bottom: 10px;
        // font-size: ${(props.size === 'big' ? 14 : 9) + 'px'};
        font-size: 60%;
        font-weight: ${props.img ? 200 : 700};
        width: 50%;
        margin-left: ${marginLeft + '%'};
        color: ${props.img ? 'white': '#838794'};
    `;

    const Icon = styled.img`
        width: ${props => props.width ? props.width : '40%'};
        object-fit: cover;
    `;

    const Img = styled.img`
        width: 100%;
        height: 100%;
        position: absolute;
        background-size: cover;
        border-radius: 5px;
    `;
    
    const card = (
        <SkeletonTheme color={'#F9FAFC'}>
                <Container>
                    {props.img 
                        ? (
                            <>
                                <Img src={props.img} alt={props.imgDescription} />
                                <Overlay></Overlay> 
                            </>
                        )
                        : <Logo>
                            <Icon src={props.category && `/icons/categories/${props.category.toLowerCase()}.svg`} alt={props.category && (props.category + " icon")} />
                        </Logo>
                    }

                    {/* Lazy load image until props.img is defined */}
                    {!props.img && !props.title &&
                        <SkeletonTheme color={'#F1F1F9'}>
                            <Skeleton />
                        </SkeletonTheme>
                    }
                    <Title>{props.title || <Skeleton count={2}/>}</Title>

                    <Time>{props.time || <Skeleton />}</Time>
                </Container>
        </SkeletonTheme>
    );  

    if (props.link) 
        return (
            <Link to={props.link} onClick={() => window.scrollTo(0, 0)}>
                {card}
            </Link>
        );

    return card;
}

export default ArticleCard;