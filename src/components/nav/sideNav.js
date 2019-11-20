import React from 'react';
import styled from 'styled-components';
import FireIcon from '../btn/fireIcon';
import CategoryBox from './categoryBox';
import '../../colors.css';

// Width of side-nav
let width = 100;

const Container = styled.div`
    position: fixed;
    width: ${width + 'px'};
    height: 100vh;
    border-right: 2px solid var(--color-border);
    background-color: white;
    overflow-y: overlay;

    ::-webkit-scrollbar {
        width: 5px;
        position: absolute;
        display: none;
    }

    :hover {
        ::-webkit-scrollbar {
            width: 5px;
            display: block;
        }
    }

    /*  The draggable scrolling element resizes depending on the size of the scrollable element. */
    ::-webkit-scrollbar-thumb {
        background-color: #cfcfcf;
        border-radius: 10px;
    }
`;

// Container for icon box
const Icon = styled.div`
    width: 100%;
    height: ${width + 'px'};
    background-color: var(--color-main);
    cursor: pointer;

    display: grid;
    justify-items: center;
    align-items: center;
`;

const Img = styled.img`
    width: ${props => props.width ? props.width : '50%'};
    object-fit: cover;
`;

const SideNav = props => {
    const handleBoxClick = name => {
        // Set category
        props.setCategory(name);

        // Toggle side-nav if on mobile
        if (props.mobile) props.toggleSideNav();
    }

    // Array for category-boxes
    let boxes = [];

    // Add skeleton data for loading
    for (let i = 0; i < 8; i++) {
        boxes.push(
            <CategoryBox
                key={i}
                width={width}
                loading={true}
            />
        )
    }

    if (props.categoryData !== null && 
        props.categoryData !== undefined && 
        props.categoryData.length !== 0) {
       
            // Clear skeleton data
        boxes = [];

        // Add categories with data from DB
        props.categoryData.forEach(c => {
            boxes.push(
                <CategoryBox 
                    key={c._id}
                    active={props.category === c.name}
                    handleClick={handleBoxClick}
                    img={`/icons/categories/${c.name.toLowerCase()}.svg`}
                    name={c.name}
                    width={width}
                />
            );
        });
    }

    return (
        <Container>
            {/* Render a different logo and onclick for mobile view */}
            {props.mobile ? 
                <Icon onClick={() => props.toggleSideNav()}>
                    <Img src='/icons/cross.svg' />
                </Icon>
            :
                <Icon>
                    <FireIcon setCategory={props.setCategory}/>
                </Icon>
            }

            {/* Render all category boxes */}
            {boxes} 
        </Container>
    );
}

export default SideNav;