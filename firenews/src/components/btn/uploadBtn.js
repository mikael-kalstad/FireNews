import React, { useState } from 'react';
import styled from 'styled-components';
import Spinner from 'react-spinner-material';

const Container = styled.div`

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

    :hover {
        background-color: 
            ${props => 
                !props.loading && 
                !props.finished &&
                '#6DC6DA'
            };
     }

    :active {
        background-color: 
            ${props => 
                !props.loading && 
                !props.finished &&
                '#80D7EA'
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
                    : 'Upload')}
            </Button>

            <Text>
                {loading && 'Please wait'}
                {finished && 'Article published'}
            </Text>
        </Container>
    );
}

export default UploadBtn;