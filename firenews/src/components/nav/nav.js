import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import sideNav from '../nav/sideNav';

const Nav = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (

    );
}

export default Nav;