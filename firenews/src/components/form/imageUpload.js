import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    /* width: 100%; */
    height: 300px;
    border-radius: 5px;
    background-color: #D3B112;
    display: grid;
    justify-items: center;
`

const Logo = styled.img`
    height: 100px;
`;

const Text = styled.p`

`;

const ImageUpload = () => {
    return (
        <Container>
            <Logo src='icons/imagePlaceholder.svg' />
            <input type='file'/>
        </Container>
    );  
}

export default ImageUpload;