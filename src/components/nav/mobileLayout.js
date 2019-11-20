import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import SideNav from './sideNav';
import FireIcon from '../btn/fireIcon';
import RefreshIcon from '../btn/refreshIcon';
import NewsFeed from '../feed/newsFeed';
import FloatButton from '../btn/floatButton';

const Container = styled.div`

`;

const Icon = styled.img`
    height: 70%;
    filter: invert(100%);
    justify-self: ${props => props.align ? props.align : 'auto'};
    cursor: pointer;
`;

const Content = styled.div`
    margin-top: 70px;
`;

const MobileLayout = (props) => {
    const [scrollPos, setScrollPos] = useState(0);
    const [sideNavOpen, setSideNavOpen] = useState(false);

    useEffect(() => {
        setScrollPos(document.documentElement.scrollTop);

        window.addEventListener('scroll', () => setScrollPos(document.documentElement.scrollTop));
        return () => window.removeEventListener('scroll', setScrollPos(document.documentElement.scrollTop));
    }, []);

    // Toggle sidenav open and close
    const toggleSideNav = () => {
        setSideNavOpen(!sideNavOpen);

        let overlay = document.getElementById('overlay');
        overlay.style.display = sideNavOpen ? 'none' : 'block';
        overlay.style.cursor = 'pointer';
        overlay.onclick = () => {
            overlay.style.display = 'none';
            setSideNavOpen(false);
        }
    }
    

    const Header = styled.div`
        position: fixed;
        z-index: 999;
        top: 0;
        width: 100%;
        height: 60px;
        background-color: var(--color-main);

        box-shadow: ${`0px 1px 5px rgba(0, 0, 0, ${
            scrollPos >= 20
            ? `0.25`
            : 0.0125 * scrollPos})`
        };
    `;

    const BtnWrapper = styled.div`
        width: 90%;
        height: 100%;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
    `;

    const SideNavWrapper = styled.div`
        position: fixed;
        left: ${sideNavOpen ? 0 : '-100px'};
        z-index: 9999;
        top: 0;
        transition: all 300ms ease;
    `;

    return (
        <Container>
            <SideNavWrapper>
                <SideNav 
                    mobile={true} 
                    toggleSideNav={toggleSideNav}
                    category={props.data.category}
                    categoryData={props.data.categoryData}
                    setCategory={props.data.setCategory}
                />
            </SideNavWrapper>

            <Header>
                <BtnWrapper>
                    <Icon src='/icons/category.svg' align='left' onClick={() => toggleSideNav()} />
                    
                    <FireIcon setCategory={props.data.setCategory} />

                    <RefreshIcon size='70%' align='right' refreshData={props.data.refreshData}/>
                </BtnWrapper>
            </Header>

            <Content>
                <NewsFeed mobile={true} />
                {props.data.children}
            </Content>

            <FloatButton mobile={true} />
        </Container>
    );
}

export default MobileLayout;