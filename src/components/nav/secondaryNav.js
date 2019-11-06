import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RefreshIcon from '../btn/refreshIcon';

const LinkWrapper = styled.div`
    position: relative;
    width: 240px;
    top: 15px;
    left: 150px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
`;

const StyledLink = styled(props => <Link {...props} />)`
    font-size: 15px;
    font-weight: 500;
    color: var(--color-main);  
    text-decoration: none;
    transition: all 100ms ease;

    :hover {
        filter: brightness(50%);
    }
`;

const SecondaryNav = (props) => {
    const Container = styled.div`
        position: absolute;
        margin-right: ${props.margin};
        width: 370px;
        height: 225px;
        right: 0;
        top: 0;
        background: linear-gradient(180deg, #F1F1F9 0%, rgba(241, 241, 249, 0) 100%);

        @media screen and (min-width: 1200px) {
            width: 500px;
        }
    `;


    return (
        <Container>
            <LinkWrapper>
                <StyledLink to='/add'>New article</StyledLink>
                <StyledLink to='/edit'>Edit</StyledLink>
                
                <RefreshIcon refreshData={props.refreshData} dark={true}/>
            </LinkWrapper>
        </Container>
    );
}

export default SecondaryNav;