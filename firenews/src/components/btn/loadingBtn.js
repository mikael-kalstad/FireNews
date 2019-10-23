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
    background: ${props => props.backgroundColor ? props.backgroundColor : '#84DB76'}
    transition: all 200ms ease;
    display: grid;
    justify-items: center;
    align-items: center;
    cursor: ${props =>  props.loading || props.finished || props.disabled ? 'default' : 'pointer'};
    box-shadow: ${props => !props.disabled && '0px 4px 4px rgba(0, 0, 0, 0.25)'};
    opacity: ${props => props.disabled ? 0.75 : 1};

    :hover {
        filter: 
            ${props => 
                !props.loading && 
                !props.finished &&
                !props.disabled &&
                'brightness(95%)'
            };
     }

    :active {
        ${props => 
            !props.loading && 
            !props.finished &&
            !props.disabled &&
            'filter: brightness(100%); box-shadow: none;'
            };
    
        
    }
`;

const Logo = styled.img`
    height: 70%;
`;

const LoadingBtn = props => {
    const getBackgroundColor = () => {
        if (props.error) return '#df2e06';
        else if (props.loading) return props.backgroundColor ? props.backgroundColor : '#80D7EA';
        else if (props.finished) return '#84DB76';
        else return props.backgroundColor;
    }

    return (
        <Button 
            onClick={() => 
                !props.disabled && 
                !props.loading && 
                !props.finished && 
                !props.error &&
                props.handleClick()
            }
            loading={props.loading}
            finished={props.finished}
            error={props.error}
            backgroundColor={getBackgroundColor()}
            fontColor={props.fontColor}
            disabled={props.disabled}
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