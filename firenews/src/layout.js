import React, { useEffect } from 'react';
import styled from 'styled-components';
import SideNav from './components/sideNav';
import NewsFeed from './components/feed/newsFeed';
import FloatButton from './components/floatButton/floatButton';

let sideNavWidth = 0;
let newsFeedWidth = 0;

const SizeWrapper = styled.div`
    position: fixed;
    top: 0; 
    left: ${props => props.left ? '0' : 'auto'};
    right: ${props => props.right ? '0' : 'auto'};
    width: fit-content;
    height: fit-content;
`; 

const Layout = (props) => {
    useEffect(() => {
        sideNavWidth = document.getElementById('sideNav-wrapper').clientWidth;
        newsFeedWidth = document.getElementById('newsFeed-wrapper').clientWidth;
    });

    const Content = styled.div`
        position: relative;
        margin-left: ${sideNavWidth + 'px'};
        margin-right: ${newsFeedWidth + 'px'};
    `;

    return (
        <>
            <SizeWrapper left={true} id='sideNav-wrapper'>
                <SideNav
                    category={props.category}
                    setCategory={props.setCategory}
                ></SideNav>
            </SizeWrapper>

            {/* Render children inside layout component */}
            <Content>
                {props.children}
                <FloatButton></FloatButton>
            </Content>

            <SizeWrapper right={true} id='newsFeed-wrapper'>
                <NewsFeed data={props.newsFeedData}></NewsFeed>
            </SizeWrapper>            
        </>
    );
}

export default Layout;