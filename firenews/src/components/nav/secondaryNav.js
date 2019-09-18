import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    position: absolute;
    width: 370px;
    height: 225px;
    /* padding-top: 15px; */
    right: 0;
    top: 0;
    background: linear-gradient(180deg, #F1F1F9 0%, rgba(241, 241, 249, 0) 100%);

    @media screen and (min-width: 1200px) {
        width: 500px;
    }
`;

const LinkWrapper = styled.div`
    position: relative;
    width: 200px;
    top: 15px;
    left: 150px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
`;

const StyledLink = styled(props => <Link {...props} />)`
    font-size: 12px;
    font-weight: 500;
    color: var(--color-main);  
    text-decoration: none;
    transition: all 500ms ease;
`;

const Refresh = styled.img`
    height: 18px;
    cursor: pointer;
    transition: all 400ms ease;
    transform: 'rotate(${props => props.rotate ? props.rotate : 0})';

    :hover {
        transform: rotate(50deg);
    }

    :active {
        transform: rotate(330deg);
    }
`;

const SecondaryNav = (props) => {
    // Handle refresh icon click
    let handleClick = () => {
        // Fetch new data
        props.refreshData();

        // Rotate icon 
        document.getElementById('refreshIcon').style.transform = 'rotate(360deg)';
    }

    return (
        <Container>
            <LinkWrapper>
                <StyledLink to='/add'>New article</StyledLink>
                <StyledLink to='/edit'>Edit</StyledLink>
                
                <Refresh 
                    src='/icons/refresh.svg'
                    id='refreshIcon'
                    onMouseUp={() => handleClick()}
                />
            </LinkWrapper>
        </Container>
    );
}

export default SecondaryNav;