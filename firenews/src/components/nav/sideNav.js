import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../../colors.css';
import CategoryBox from './categoryBox';

// Width of side-nav
let width = 100;

const Container = styled.div`
    /* position: relative; */
    width: ${width + 'px'};
    height: 100vh;
    border-right: 2px solid var(--color-border);
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

const SideNav = (props) => {
    const [data, setCategoryData] = useState([]);

    // Get category data when component mounts
    useEffect(() => {
        // Get all categories from DB
        fetch('http://localhost:4000/categories', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify()
        })
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log('Error: ', err));
    }, []);

    // Set data if DB responded
    let setData = (data) => {
        if (data.message && data.message === 'pool destroyed') return;
        else setCategoryData(data);
      }

    // Array for category-boxes
    let boxes = [];

    // Add skeleton data for loading
    for (let i = 0; i < 8; i++) {
        boxes.push(
            <CategoryBox
                key={i}
                width={width}
            />
        )
    }

    if (data !== null && data !== undefined && data.length !== 0) {
        // Clear skeleton data
        boxes = [];

        // Add categories with data from DB
        data.forEach(c => {
            boxes.push(
                <CategoryBox 
                    key={c._id}
                    active={props.category === c.name}
                    setCategory={props.setCategory}
                    img='icons/flame.svg'
                    name={c.name}
                    width={width}
                />
            );
        });
    }

    const handleIconClick = () => {
        // Change to default category
        props.setCategory('Main');
        
        //Smooth scroll to top if already on the home page
        if (window.location.pathname === '/')
            window.scrollTo({ top: 0, behavior: 'smooth' });
        else 
            window.scrollTo(0, 0);
    }

    return (
        <Container>
            <Link to='/'>
                <Icon onClick={() => handleIconClick()}>
                    <Img src='/icons/icon.svg'/>
                </Icon>
            </Link>

            {/* Render all category boxes */}
            {boxes}
        </Container>
    );
}

export default SideNav;