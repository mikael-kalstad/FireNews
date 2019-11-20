import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    position: ${props => props.mobile ? 'fixed' : 'absolute'};
    z-index: 9999;
    bottom: 0; 
    right: 0;
    margin: ${props => props.mobile && '30px'};
    display: grid;
    grid-gap: 5px;
    grid-template-columns: auto auto auto;
    justify-items: center;
    align-items: center;
`;

const Circle = styled.div`
    margin-left: 5px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #54C5EB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: grid; 
    justify-items: center;
    align-items: center;
    cursor: pointer;
`;

const Logo = styled.img`
    height: ${props => props.heigth ? props.heigth : '60%'};
    transition: transform 100ms ease;
    transform: rotate(${props => props.menuopen === 'true' ? '45deg' : 0});
`;

const StyledLink = styled(props => <Link {...props} />)`
    position: relative;
    width: ${props => props.width ? props.width + 'px': 'auto'};
    height: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10000px;
    background-color: black;
    display: grid;
    grid-template-columns: 40px auto;
    justify-items: center;
    align-items: center;
    padding-right: 15px;
    transition: all 200ms ease;
    text-decoration: none;

    opacity: ${props => props.menuopen === 'true' ? 1 : 0};
    transform: scale(${props => props.menuopen === 'true' ? 1 : 0.3});
    left: ${props => props.menuopen === 'true' ? 0 : '40px'};
`;

const Text = styled.p`
    text-align: start;
    font-size: 12px;
    color: white;
    font-weight: 500;
    justify-self: start;
    transition: all 200ms ease;
    margin-right: 8px;

    ${StyledLink}:hover & {
        margin-top: 5px;
    }
`;

const FloatButton = props => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        // Close menu if it is opened with click and anything on the screen is clicked
        document.getElementById('layout-container').onclick = () => {
            if (!clicked) setMenuOpen(false);
        };
    });

    const onHover = () => {
        // Toogle the menu
        if (!clicked) setMenuOpen(true);
    }

    const onHoverLeave = () => {
        // Only toggle the menu if it is not open and it is not clicked to close
        if (!clicked) setMenuOpen(false);

         // Reset menu closed with click variable
         setClicked(false);
    }

    const handleClick = () => {
        // Hide the menu
        setMenuOpen(!menuOpen);
        setClicked(true);
    }

    return (
        // Menu can only be actived by hovering the circle component
        // Menu can only be hidden by leaving the mouse from the container component
        <Container onMouseLeave={onHoverLeave} mobile={props.mobile}>
            {/* Render if the current location is not the same as the link*/}
            {window.location.pathname !== '/add' &&
                <StyledLink menuopen={menuOpen.toString()} to='/add' onclick={() => setMenuOpen(false)}>
                    <Logo src={'/icons/add.svg'}></Logo>
                    <Text>Add article</Text>
                </StyledLink>
            }

            {/* Render if the current location is not the same as the link*/}
            {window.location.pathname !== '/edit' &&
                <StyledLink menuopen={menuOpen.toString()} to='/edit' onclick={() => setMenuOpen(false)}>
                    <Logo src={'/icons/edit.svg'} heigth='50%'></Logo>
                    <Text>Edit</Text>
                </StyledLink>
            }

            <Circle
                onMouseEnter={onHover}
                onClick={handleClick}
            >
                <Logo src={'/icons/add.svg'} menuopen={menuOpen.toString()}/>
            </Circle>
        </Container>
    );
}

export default FloatButton;