import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FireIcon = (props) => {
    const Img = styled.img`
        width: 100%;
        height: ${props.height ? props.height : '50px'};
        filter: invert(100%);
    `;


    const handleClick = () => {
        // Change to default category
        props.setCategory('Main');
        
        //Smooth scroll to top if already on the home page
        if (window.location.pathname === '/')
            window.scrollTo({ top: 0, behavior: 'smooth' });
        else 
            window.scrollTo(0, 0);
    }

    return (
        <Link to='/' onClick={() => handleClick()}>
                <Img src='/icons/flame.svg'/>
        </Link>
    )
}

export default FireIcon;