import React from 'react';
import styled from 'styled-components';

const RefreshIcon = (props) => {
    let handleClick = () => {
        // Fetch new data
        props.refreshData();
    
        // Rotate icon 
        document.getElementById('refreshIcon').style.transform = 'rotate(360deg)';
    }

    const Icon = styled.img`
        height: ${props.size ? props.size : '18px'};
        justify-self: ${props.align ? props.align : 'auto'};
        filter: ${props.dark ? '' : 'invert(100%)'};
        cursor: pointer;
        transition: all 400ms ease;
        transform: 'rotate(${props => props.rotate ? props.rotate : 0})';

        :hover {
            transform: rotate(50deg);
        }

        :active {
            transform: rotate(330deg);
        }
    `;

    return (
        <Icon 
            src='/icons/refresh.svg'
            id='refreshIcon'
            onMouseUp={() => handleClick()}
        />
    )
}

export default RefreshIcon;