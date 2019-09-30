/**
 * Component that will split the screen in two tabs.
 * The content of the two tabs will be the components passed as a prop.
 * 
 */

import React, { useState } from 'react';
import styled from 'styled-components';

const TabWrapper = styled.div`
    height: 40px;
    background-color: #E8E8E8;
    display: grid;
    grid-template-columns: 1fr 1fr;
    display: grid;
    justify-items: center;
    align-items: center;
    cursor: pointer;
`;

// Tab that "floats" on top of the others, is used for transition
const FloatTab = styled.div`
    position: relative;
    top: 40px;
    z-index: 1;
    width: 50%;
    height: 40px;
    cursor: pointer;
    background-color: ${props => props.color ? props.color : 'white'};;
    transform: ${props => props.tabOpen === 2 ? 'translateX(100%)' : 'translateX(0)'};
    transition: all 200ms ease;
`;

const Text = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #5E5E5E;
    margin: 0;
    z-index: 2;
`;

const TabSplit = (props) => {
    // Tabs are indexed with 1 for left and 2 for right
    const [tabOpen, setTabOpen] = useState(1);

    const Container = styled.div`
        position: relative;
        background-color: ${props.backgroundColor ? props.backgroundColor : 'white'};
    `;

    const handleClick = () => setTabOpen(tabOpen === 1 ? 2 : 1);

    return (
        <>
            <FloatTab 
                tabOpen={tabOpen} 
                color={props.backgroundColor} 
                onClick={() => handleClick()}
            />
            
            <Container>
                <TabWrapper onClick={() => handleClick()}>
                    <Text>{props.tabLeftName || 'tab1'}</Text>
                    <Text>{props.tabRightName || 'tab2'}</Text>
                </TabWrapper>

                {/* Display components based on which tab is open */}
                {tabOpen === 1
                    ? props.componentLeft
                    : props.componentRight
                }
            </Container>
        </>
    )
}

export default TabSplit;