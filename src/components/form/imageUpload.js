import React from 'react';
import styled from 'styled-components';
import TabSplit from './tabSplit';

const Wrapper = styled.div`
    margin-top: 70px;
`;

const Title = styled.h3`
    font-size: 30px;
    font-weight: 700;
    margin: 20px 0;
`;

const TabWrapper = styled.div`
    // border: 1px solid #6a6a6a;
    border-radius: 10px;
`;

const ImgBox = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 5px;
    background-color: #D3B112;
    display: grid;
    justify-items: center;
`

const Logo = styled.img`
    height: 100px;
`;

const Input = styled.input`
    font-family: 'Rubik';
    font-size: 18px; 
    font-weight: 500;
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    padding-left: 10px;
    margin-top: 15px;
    border-radius: 5px;

    ::placeholder {
        color: var(--color-form-contrast);
    }
`;

const LinkInput = styled.input`
    font-family: 'Rubik';
    font-size: 18px; 
    font-weight: 500;
    width: 80%;
    height: 40px;
    outline: none;
    border: none;
    padding-left: 10px;
    margin: 15px;
    // border-radius: 5px;
    background-color: transparent;
    border-bottom: 1px solid white;
    color: white;

    ::placeholder {
        color: lightgrey;
    }
`;  

const Text = styled.p`
    font-size: 18px;
    font-size: 400;
    color: #6A6A6A;
`;

let Upload = (
    <ImgBox>
        <Logo src='icons/imagePlaceholder.svg' />
        <input type='file'/>
    </ImgBox>
);



const ImageUpload = (props) => {
    let Link = (
        <LinkInput placeholder='Link to image' value={props.linkValue} onChange={props.linkHandleChange} />
    );

    return (
        <Wrapper>
            <Title>Image</Title>
            <Text>Upload an image from your computer, or provide a link to a image on the internet</Text>

            <TabWrapper>
                <TabSplit 
                    componentLeft={Upload}
                    componentRight={Link}
                    tabLeftName='Upload'
                    tabRightName='Link'
                    backgroundColor='#D3B112'
                    textColor='#333'
                />
            </TabWrapper>
        </Wrapper>
    );  
}

export default ImageUpload;