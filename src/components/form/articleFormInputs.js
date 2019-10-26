import React from 'react';
import styled from 'styled-components'

const namePlaceHolder = 'John Doe';
const titlePlaceHolder = 'The title of the article';
const summarylaceHolder = 'A short summary of the article. Should give the reader an idea of the contents of the article. The brief should only be a few sentences long.';
const imgLinkPlaceHolder = 'Link to image'
const imgDesPlaceHolder = 'Image Description';
const contentPlaceHolder = 'The main content of the article.\n\n Paragraphs can be created by using the "enter" key';

const Wrapper = styled.div`
    padding: 80px;

    @media screen and (max-width: 1000px) {
        padding: 40px;
    }
`;

const Spacing = styled.div`
    height: ${props => props.size ? props.size : '70px'};
    width: 100%;
`;

const InputTitle = styled.h3`
    font-size: 30px;
    font-weight: 700;
    margin: 20px 0;
`;

const WarningText = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: #EB7C74;
    display: ${props => props.show ? 'block' : 'none'};
`;

const Input = styled.input`
    font-family: 'Rubik';
    font-size: ${props => props.fontSize ? props.fontSize : '36px'}; 
    font-weight: 500;
    width: 100%;
    height: 60px;
    outline: none;
    padding-left: 10px;
    border-radius: 5px;
    border: ${props => props.warning ? '1px solid #EB7C74' : '1px solid #999'};
    color: #555

    // Prevent user from using input while loading or finished
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};

    ::placeholder {
        color: var(--color-form-contrast);
    }
`;

const TextArea = styled.textarea`
    font-family: 'Rubik';
    font-size: 24px; 
    font-weight: 500;
    line-height: 140%;
    width: 100%;
    height: ${props => props.height ? props.height: '160px'};
    outline: none;
    border: none;
    resize: none;
    padding: 10px;
    border-radius: 5px;
    border: ${props => props.warning ? '1px solid #EB7C74' : '1px solid #999'};
    color: #555
    
    // Prevent user from using input while loading or finished
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};

    ::placeholder {
        color: var(--color-form-contrast);
    }
`;

const ArticleFormInputs = props => (
    <Wrapper>
        <InputTitle>Author</InputTitle>
        <Input 
            name='author'
            placeholder={namePlaceHolder}
            onChange={e => props.handleChange(e)}
            value={props.inputs['author'].value}
            warning={props.inputs['author'].warning}
            disabled={props.disabled}
        />
        <WarningText show={props.inputs['author'].warning}>
            Author name is required
        </WarningText>

        <Spacing />
        <InputTitle>Title</InputTitle>
        <Input 
            name='title'
            placeholder={titlePlaceHolder}
            onChange={e => props.handleChange(e)}
            value={props.inputs['title'].value}
            warning={props.inputs['title'].warning}
            disabled={props.disabled}
        />
        <WarningText show={props.inputs['title'].warning}>
            Title is required
        </WarningText>

        <Spacing />
        <InputTitle>The brief</InputTitle>
        <TextArea 
            name='summary'
            placeholder={summarylaceHolder}
            onChange={e => props.handleChange(e)}
            value={props.inputs['summary'].value}
            warning={props.inputs['summary'].warning}
            disabled={props.disabled}
        />
        <WarningText show={props.inputs['summary'].warning}>
            A brief summary is required
        </WarningText>
        
        <Spacing />
        <InputTitle>Image</InputTitle>
        <Input 
            name='img'
            placeholder={imgLinkPlaceHolder}
            onChange={e => props.handleChange(e)}
            value={props.inputs['img'].value}
            warning={props.inputs['img'].warning}
            fontSize='20px'
            disabled={props.disabled}
        />
        <WarningText show={props.inputs['img'].warning}>
            An image is required for an image description
        </WarningText>

        <Spacing size='20px'/>
        <Input 
            name='imgDescription'
            placeholder={imgDesPlaceHolder}
            onChange={e => props.handleChange(e)}
            value={props.inputs['imgDescription'].value}
            warning={props.inputs['imgDescription'].warning}
            fontSize='20px'
            disabled={props.disabled}
        />
        <WarningText show={props.inputs['imgDescription'].warning}>
            A description of the image is required
        </WarningText>

        <Spacing />
        <InputTitle>Content</InputTitle>
        <TextArea 
            name='content'
            placeholder={contentPlaceHolder}
            onChange={e => props.handleChange(e)}
            value={props.inputs['content'].value}
            warning={props.inputs['content']['warning']}
            height='750px'
            disabled={props.disabled}
        />
        <WarningText show={props.inputs['content'].warning}>
            An article is required to have some content
        </WarningText>
    </Wrapper>
);

export default ArticleFormInputs;