import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SideNav from './components/nav/sideNav';
import NewsFeed from './components/feed/newsFeed';

const SizeWrapper = styled.div`
    position: fixed;
    top: 0; 
    left: ${props => props.left ? '0' : 'auto'};
    right: ${props => props.right ? '0' : 'auto'};
    width: fit-content;
    height: fit-content;
`; 

const Layout = (props) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);

        window.addEventListener('resize', () => setWidth(window.innerWidth));
        return () => window.removeEventListener('resize', setWidth(window.innerWidth));
    }, []);

    const Container = styled.div`
        display: grid; 
        grid-template-columns: 100px 1fr 240px;
    `;

    const Content = styled.div`
        /* overflow-x: scroll; */
        position: relative;
    `;

    const SideNavBox = styled.div`
        width: 100px;
        height: 100vh;
    `;

    const NewsFeedBox = styled.div`
        width: 240px;
        height: 100vh;
    `;

    let mobileView = width < 600;

    return (
        <Container id='layout-container'>
            <SizeWrapper left={true} id='sideNav-wrapper'>
                <SideNav
                    category={props.category}
                    setCategory={props.setCategory}
                ></SideNav>
            </SizeWrapper>
            
            <SideNavBox />

            {/* Render children inside layout component */}
            <Content>
                {props.children}
            </Content>
            

            <SizeWrapper right={true} id='newsFeed-wrapper'>
                <NewsFeed data={props.newsFeedData}></NewsFeed>
            </SizeWrapper>   

            <NewsFeedBox />      
        </Container>
    );
}

export default Layout;