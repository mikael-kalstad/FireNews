import React, { useState } from 'react';
import styled from 'styled-components';
import Spinner from 'react-spinner-material';
import { Redirect } from 'react-router-dom';

const Container = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    margin-bottom: 100px;
`;

const Button = styled.button`
    width: ${props => props.loading || props.finished ? '50px' : '150px'};;
    height: 50px;
    font-size: 20px;
    font-weight: 600;
    color: white;
    border-radius: ${props => props.loading || props.finished ? '50%' : '5px'};
    outline: none;
    border: none;
    background-color: ${props => props.finished ? '#84DB76' : '#80D7EA'};
    transition: all 200ms ease;
    display: grid;
    justify-items: center;
    align-items: center;
    cursor: ${props =>  props.loading || props.finished ? 'default' : 'pointer'};

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
    }
`;

const Logo = styled.img`
    height: 70%;
`;

const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: black;
`;

const UploadBtn = (props) => {
    const [loading, setLoading] = useState(false);
    const [finished, setFinished] = useState(false);
    const [redirect, setRedirect] = useState(false);
    
    const handleClick = () => {
        // Set state to loading
        setLoading(!loading);

        // Call parent method
        if(props.handleClick) 
            props.handleUpload();

        setTimeout(() => {
            setFinished(true);
            setLoading(false);
        }, 1500);
    }

    // Redirect to article after a delay
    if (finished) {
        let delay = 1500;

        setTimeout(() => {
            setRedirect(true);
        }, delay);
    }

    if (finished && redirect) {
        return <Redirect to='/article/5d83378e61c870333821818b' />
    }

    return (
        <Container>
            <Button 
                onClick={handleClick}
                loading={loading}
                finished={finished}
            >
                {loading
                ? <Spinner size={35} spinnerColor='#FFF' spinnerWidth={4} visible={loading}/>
                : (finished 
                    ? <Logo src='/icons/check.svg'/>
                    : props.name)}
            </Button>

            <Text>
                {loading && 'Please wait'}
                {finished && 'Article published'}
            </Text>
        </Container>
    );
}

export default UploadBtn;