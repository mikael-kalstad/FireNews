import React, { useState } from 'react';
import styled from 'styled-components';
import Spinner from 'react-spinner-material';
import { Redirect, Link } from 'react-router-dom';
import LogoButton from '../btn/logoBtn';

const Container = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    padding-bottom: 50px;
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
    background-color: ${props => props.loading ? '#80D7EA' : '#84DB76'};
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
                'brightness(105%)'
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

const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: black;
`;

const WarningText = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: #EB7C74;
    display: ${props => props.show ? 'block' : 'none'};
`;

const StyledLink = styled(props => <Link {...props} />)`
    transition: all 500ms ease;
    display: ${props => props.redirect ? 'block' : 'hidden'};
    opacity: ${props => props.redirect ? '1' : '0'};
    transform: translateY(${props => props.redirect ? '0px' : '50px'});
    text-decoration: none;
`;

const Upload = (props) => {
    const [loading, setLoading] = useState(false);
    const [finished, setFinished] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState(false);
    const [id, setId] = useState('');
    
    const handleClick = () => {
        if (!props.checkInputs()) {
            setError(true);
            return;
        }
        setError(false);

        // // Set state to loading
        setLoading(true);
        console.log('props data', props.data)

        // Upload article to API server
        fetch('http://localhost:4000/articles', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(props.data)
        })
        .then(res => res.json())
        .then(data => {
            setId(data._id);
            setFinished(true);
            setLoading(false);
        })
        .catch(err => console.log('Error: ', err));

        // setTimeout(() => {
        //     setFinished(true);
        //     setLoading(false);
        // }, 1500);
    }

    // Redirect to article after a delay
    if (finished) {
        let delay = 1000;

        setTimeout(() => {
            setRedirect(true);
        }, delay);
    }

    if (finished && redirect) {
        // return <Redirect to={'/article/' + id} />
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

            <WarningText show={error}>Check all inputs, some are required</WarningText>

            <StyledLink to={'/article/' + id} redirect={redirect} onClick={() => props.updateArticles()}>
                <LogoButton 
                    logo='/icons/exit.svg' 
                    text='Go to article' 
                    color='#80D7EA'
                />
            </StyledLink>
        </Container>
    );
}

export default Upload;