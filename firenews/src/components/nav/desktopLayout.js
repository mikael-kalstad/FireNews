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
        width: calc(100vw - ${SideNavWidth} - ${NewsFeedWidth} - 30px);
    `;

    return (
        <Container id='layout-container'>    
            <SideNav
                category={props.data.category}
                categoryData={props.data.categoryData}
                setCategory={props.data.setCategory}
            />

            <SecondaryNav refreshData={props.data.refreshData} margin={NewsFeedWidth} />

            {/* Render children inside layout component */}
            <Content>
                {props.data.children}
            </Content>
            
            <NewsFeed data={props.data.articleData}/>
        </Container>
    );
}

export default DesktopLayout;