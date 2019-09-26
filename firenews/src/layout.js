import React, { useEffect, useState } from 'react';
import MobileLayout from './components/nav/mobileLayout';
import DesktopLayout from './components/nav/desktopLayout';

const Layout = (props) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);

        window.addEventListener('resize', () => setWidth(window.innerWidth));
        return () => window.removeEventListener('resize', setWidth(window.innerWidth));
    }, []);

    let mobileView = width < 600;

    return (
        <div id='layout-container'>    
             {mobileView 
                ? 
                <MobileLayout 
                    children={props.children} 
                    setCategory={props.setCategory}
                    categoryData={props.categoryData}
                    refreshData={props.refreshData}
                />
                : 
                <DesktopLayout 
                    children={props.children} 
                    setCategory={props.setCategory}
                    categoryData={props.categoryData}
                    newsFeedData={props.newsFeedData}
                    refreshData={props.refreshData}
                />
            }    
        </div>
    );
}

export default Layout;