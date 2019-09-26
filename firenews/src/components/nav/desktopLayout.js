import React from 'react';
import styled from 'styled-components';
import SideNav from './sideNav';
import NewsFeed from '../feed/newsFeed';
import SecondaryNav from './secondaryNav';


const SizeWrapper = styled.div`
    position: fixed;
    z-index: 9;
    top: 0; 
    left: ${props => props.left ? '0' : 'auto'};
    right: ${props => props.right ? '0' : 'auto'};
    width: fit-content;
    height: fit-content;
`; 

const DesktopLayout = (props) => {
    const Container = styled.div`
        display: grid; 
        grid-template-columns: 100px 1fr 240px;
    `;

    const Content = styled.div`
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

    return (
        <Container id='layout-container'>    
            <SizeWrapper left={true} id='sideNav-wrapper'>
                <SideNav
                    category={props.category}
                    categoryData={props.categoryData}
                    setCategory={props.setCategory}
                />
            </SizeWrapper>
            
            <SideNavBox />

            {/* Render children inside layout component */}
            <Content>
                {props.children}
            </Content>

            <SecondaryNav refreshData={props.refreshData} />
            
            <SizeWrapper right={true} id='newsFeed-wrapper'>
                <NewsFeed data={props.newsFeedData}/>
            </SizeWrapper>   

            <NewsFeedBox />  
        </Container>
    );
}

export default DesktopLayout;