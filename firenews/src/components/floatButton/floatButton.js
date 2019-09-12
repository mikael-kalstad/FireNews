import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
    position: absolute;
    top: 0;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #54C5EB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: grid; 
    justify-items: center;
    align-items: center;
`;

const Logo = styled.img`
    width: 60%;
    transition: transform 200ms ease;

    ${Circle}:hover  & {
        transform: rotate(45deg);
    }
`

const handleHover = (e) => {
    
}

const handleClick = (e) => {

}

const FloatButton = (props) => {
    return (
        <Circle
            onhover={handleHover}
            onClick={handleClick}
        >
            <Logo src={'/icons/add.svg'} />
        </Circle>
    );
}

export default FloatButton;