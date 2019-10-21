import React from 'react';
import styled from 'styled-components';
import Spinner from 'react-spinner-material';

const Button = styled.button`
    width: ${props => props.loading || props.finished ? '50px' : '150px'};;
    height: 50px;
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.fontColor ? props.fontColor : 'white'};
    border-radius: ${props => props.loading || props.finished ? '50%' : '5px'};
    outline: none;
    border: none;
    background-color: ${props => 
        props.loading 
        ? '#80D7EA' 
        : props.finished 
            ? '#84DB76' :
            (props.backgroundColor 
                ? props.backgroundColor 
                : '#84DB76')
    };
    transition: all 200ms ease;
    display: grid;
    justify-items: center;
    align-items: center;
    cursor: ${props =>  props.loading || props.finished ? 'default' : 'pointer'};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    :hover {
        filter: 
            ${props => 
                !props.loading && 
                !props.finished &&
                'brightness(95%)'
            };
     }

    :active {
        filter: 
            ${props => 
                !props.loading && 
                !props.finished &&
                'brightness(100%)'
            };
    
        box-shadow: none;
    }
`;

const Logo = styled.img`
    height: 70%;
`;

const LoadingBtn = props => {

    return (
        <Button 
            onClick={() => props.handleClick()}
            loading={props.loading}
            finished={props.finished}
            backgroundColor={props.backgroundColor}
            fontColor={props.fontColor}
        >
            {props.loading
            ? <Spinner size={35} spinnerColor='#FFF' spinnerWidth={4} visible={props.loading}/>
            : (props.finished 
                ? <Logo src='/icons/check.svg'/>
                : props.name)}
        </Button>
    );
}

export default LoadingBtn;