import React, { useState } from 'react';
import styled from 'styled-components';
import Spinner from 'react-spinner-material';
import { Redirect, Link } from 'react-router-dom';
import LogoButton from '../btn/logoBtn';
import LoadingBtn from '../btn/loadingBtn';

const Container = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    padding-bottom: 50px;
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
    }

    // Redirect to article after a delay
    if (finished) {
        let delay = 800;

        setTimeout(() => {
            setRedirect(true);
        }, delay);
    }

    return (
        <Container>
            <LoadingBtn 
                name={props.name}
                loading={loading}
                finished={finished}
                handleClick={handleClick}
                disabled={props.disabled}
            />

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