import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../colors.css';

// Width of side-nav
let width = 100;

const Container = styled.div`
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

// Text below category icon
const Text = styled.p`
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--color-main);
`

const Image = styled.img`
    width: ${props => props.width ? props.width : '50%'};
    object-fit: cover;
`;

const SideNav = (props) => {
    const [data, setData] = useState([]);

    // Get category data when component mounts
    useEffect(() => {
        async function getData() {
            // Get all categories from DB
            const res = await fetch('http://localhost:4000/categories', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify()
            })
            .catch(err => console.log('Error: ', err));
    
            const data = await res.json();
            setData(data);
        }

        getData();
    }, []);

    // Container box for each category
    const Box = styled.div`
        width: 100%;
        height: ${width + 'px'};
        background-color: ${props => props.active ? '#F1F1F9' : 'white'};
        border-bottom: 2px solid var(--color-border);
        cursor: pointer;

        :hover {
            background-color: var(--color-light);
        }

        display: grid;
        grid-template-rows: 70% 30%;
        align-items: center;
        justify-items: center;
    `;

    // Create category-boxes based on data
    const boxes = data.map(e => {
        return (
            <Box 
                key={e._id}
                active={props.category === e.name}
                onClick={() => props.setCategory(e.name)}
            >
                <Image src={'icons/flame.svg'}></Image>
                <Text>{e.name}</Text>
            </Box>
        );
    });

    const handleIconClick = (e) => {
        props.setCategory('all');

        // Smooth scroll to top if already on the home page
        // if (page === this.currentPath) {
        //     e.preventDefault();
        //     window.scrollTo({ top: 0, behavior: 'smooth' });
        // }
    }

    return (
        <Container>
            <Link to='/'>
                <Icon
                    onClick={(e) => handleIconClick(e)}
                >
                    <Image src={'icons/icon.svg'} width={'60%'}></Image>
                </Icon>
            </Link>

            {/* Render all category boxes */}
            {boxes}
        </Container>
    );
}

export default SideNav;