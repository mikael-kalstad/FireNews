import React, { useEffect, useState } from 'react';
import MobileLayout from './components/nav/mobileLayout';
import DesktopLayout from './components/nav/desktopLayout';

const Layout = props => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        // Set width
        setWidth(window.innerWidth);

        window.addEventListener('resize', () => setWidth(window.innerWidth));
        return () => window.removeEventListener('resize', setWidth(window.innerWidth));
    }, []);

    // Check for mobileview if width is defined, default view is desktop
    let mobileView = width ? width < 1000 : false;

    // The same data will be passed to both layouts
    let data = {
        children: props.children,
        category: props.category,
        setCategory: props.setCategory,
        categoryData: props.categoryData,
        refreshData: props.refreshData,
    };

    return (
        <div id='layout-container'>    
             {mobileView 
                ? <MobileLayout data={data} />
                : <DesktopLayout data={data} />
            }    
        </div>
    );
}

export default Layout;