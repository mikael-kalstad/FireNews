import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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



const Upload = (props) => {
    const [loading, setLoading] = useState(false);
    const [finished, setFinished] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [warning, setWarning] = useState(false);
    const [error, setError] = useState(false);
    const [id, setId] = useState('');

    const StyledLink = styled(props => <Link {...props} />)`
        transition: all 500ms ease;
        display: ${redirect ? 'block' : 'hidden'};
        opacity: ${redirect ? '1' : '0'};
        transform: translateY(${redirect ? '0px' : '50px'});
        text-decoration: none;
    `;
    
    const handleClick = async() => {
        if (!props.checkInputs()) {
            setWarning(true);
            return;
        }
        // Remove any error that may be active
        setWarning(false);

        // Set state to loading
        setLoading(true);

        // Upload article to API server
        const res = await props.request(props.data, props.id)
       
        if (!(res instanceof Error)) {
            if (res._id != null) setId(res._id);
            else setId(props.id);
            
            setFinished(true);
            setLoading(false);
        } else {
            setError(true);
            setLoading(false);
            setFinished(true);
        }
    }

    // Redirect to article after a delay
    if (finished) {
        let delay = 800;
        props.setDisabled(true);

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
                disabled={props.disabled || finished || loading}
                error={error}
            />

            <Text>
                {loading && 'Please wait'}
                {finished && props.finishedMsg}
            </Text>

            <WarningText show={warning}>Check all inputs, some are required</WarningText>

            <StyledLink to={'/article/' + id} onClick={() => props.updateArticles()}>
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