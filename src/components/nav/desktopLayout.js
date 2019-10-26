import React from 'react';
import styled from 'styled-components';
import SideNav from './sideNav';
import NewsFeed from '../feed/newsFeed';
import SecondaryNav from './secondaryNav';

const SideNavWidth = '100px';
const NewsFeedWidth = '240px';

const DesktopLayout = (props) => {
    const Container = styled.div`
        max-width: 100vw;
        display: grid; 
        grid-template-columns: auto 1fr auto;
    `;

    const Content = styled.div`
        position: relative;
        width: calc(100vw - ${SideNavWidth} - ${NewsFeedWidth} - 17px);
        margin-top: 40px;
    `;

    const SideNavBox = styled.div`
        width: 100px;
        height: 100vh;
    `

    const NewsFeedBox = styled.div`
        width: 240px;
        height: 100vh;
    `;

    return (
        <Container id='layout-container'>    
            <SideNav
                category={props.data.category}
                categoryData={props.data.categoryData}
                setCategory={props.data.setCategory}
            />
            <SideNavBox />

            <SecondaryNav refreshData={props.data.refreshData} margin={NewsFeedWidth} />

            {/* Render children inside layout component */}
            <Content>
                {props.data.children}
            </Content>
            
            <NewsFeed data={props.data.articleData}/>
            <NewsFeedBox />
        </Container>
    );
}

export default DesktopLayout;