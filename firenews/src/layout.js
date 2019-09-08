import React from 'react';
import SideNav from './components/sideNav';
import NewsFeed from './components/feed/newsFeed';

const Layout = (props) => (
    <>
        <SideNav
            category={props.category}
            setCategory={props.setCategory}
        ></SideNav>

        <NewsFeed>
            
        </NewsFeed>

        {/* Render children inside layout component */}
        {props.children}

    </>
);

export default Layout;