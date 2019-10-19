import React from 'react';
import styled from 'styled-components';

let titlePlaceHolder = 'The rain forest is burning';
let summarylaceHolder = 'This area will contain the brief. A few sentences that summaries and explains the content of the article. The length of the brief should not be much longer than this.';
let imagePlaceHolder = 'Image description';

const Container = styled.div`

`;

const TitleInput = styled.textarea`
    font-family: 'Rubik';
    font-size: 60px; 
    font-weight: 500;
    text-transform: uppercase;
    width: 75%;
    height: 200px;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    resize: none;
    
    :hover { 
        background-color: var(--color-light);
    }
`;

const TextInput = styled.textarea`
    font-family: 'Rubik';
    font-size: 22px;
    font-weight: 300;
    line-height: 150%;
    margin-top: 30px;
    width: 100%;
    height: 100px;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    resize: none;
`;

const Summary = styled.p`
    font-size: 22px;
    font-weight: 300;
    line-height: 150%;
    margin-top: 30px;
`;

const Image = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 5px;
    background-color: #D3B112;
`

const Edit = (props) => {
    return (
        <Container>
            <TitleInput
                placeholder={titlePlaceHolder}
            />
            
            <TextInput placeholder={summarylaceHolder} />
        

            <Image></Image>
            <TextInput placeholder={imagePlaceHolder} />
        </Container>
    );
} 

export default Edit;