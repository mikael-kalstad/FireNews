import React from 'react';
import styled from 'styled-components';
import PublishTopPanel from '../form/publishTopPanel';
import ImageUpload from '../form/imageUpload';
import UploadBtn from '../btn/uploadBtn';

let titlePlaceHolder = 'The rain forest is burning';
let summarylaceHolder = 'This area will contain the brief. A few sentences that summaries and explains the content of the article. The length of the brief should not be much longer than this.';
let imagePlaceHolder = 'Image description';

const Wrapper = styled.div`
    padding: 60px;
    background-color: var(--color-form-background);
`;

const TitleInput = styled.textarea`
    font-family: 'Rubik';
    font-size: 60px; 
    font-weight: 500;
    text-transform: uppercase;
    width: 60%;
    height: 200px;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    resize: none;
    background-color: var(--color-form-background);
    overflow: hidden;
    padding-bottom: 30px;

    ::placeholder {
        color: var(--color-form-contrast);
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
    color: var(--color-form-contrast);
    background-color: var(--color-form-background);
`;

const Summary = styled.p`
    font-size: 22px;
    font-weight: 300;
    line-height: 150%;
    margin-top: 30px;
`;



const Edit = (props) => {
    return (
        <>
            <UploadBtn />
            <PublishTopPanel data={props.categoryData}/>

            <Wrapper>
                <TitleInput placeholder={titlePlaceHolder}/>
                <TextInput placeholder={summarylaceHolder} />
        
                <ImageUpload />
                <TextInput placeholder={imagePlaceHolder} />
            </Wrapper>
        </>
    );
} 

export default Edit;