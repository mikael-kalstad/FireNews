import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import PublishSettings from '../form/publishSettings';
import Upload from '../form/upload';
import TabSplit from '../form/tabSplit';
import Article from './article';

const titlePlaceHolder = 'The title of the article';
const summarylaceHolder = 'A short summary of the article. Should give the reader an idea of the contents of the article. The brief should only be a few sentences long.';
const contentPlaceHolder = 'Some content';


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
    border: ${props => props.warning ? '1px solid #EB7C74' : 'none'};
    color: #555

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
    border: ${props => props.warning ? '1px solid #EB7C74' : 'none'};
    color: #555
    
    ::placeholder {
        color: var(--color-form-contrast);
    }
`;

const Add = (props) => {
    const [inputs, setInputs] = useState({
        'title': {
            value: '',
            required: true,
            warning: false
        },
        'summary': {
            value: '',
            required: true,
            warning: false
        },
        'img': {
            value: '',
            required: false
        },
        'imgDescription': {
            value: '',
            required: false,
            warning: false
        },
        'content': {
            value: '',
            required: true,
            warning: false
        },
        'author': {
            value: '',
            required: true,
            warning: false
        }
    });
    
    const [frontPage, setFrontPage] = useState(false);
    const [category, setCategory] = useState('');
    const [categoryWarning, setCategoryWarning] = useState(false);

    // If article data is provided as a prop find article and set inputs
    useEffect(() => {
        let articleData = null;
        if (props.data && props.id) {
            articleData = props.data.find(a => a._id === props.id);
        }

        if (!articleData) return;

         // Convert object into array
         const arr = Object.entries(inputs);

        // Check every inpuut in array
        for (let i in arr) {
            // Only update input if articleData is defined
            if (articleData[arr[i][0]])
                arr[i][1].value = articleData[arr[i][0]];
        }

        if (articleData.category)
            setCategory(articleData.category);

        if (articleData.frontPage)
            setFrontPage(articleData.frontPage);
    }, [])

    // Handle change for all inputs
    const handleChange = e => {
        const obj = inputs[e.target.name];
        obj.value = e.target.value;

        // If warning is enabled and the input is not empty, the warning should be disabled
        if (inputs[e.target.name].warning && e.target.value != '') {
            obj.warning = false;
        }

        // Update input with the new value
        setInputs({...inputs, [e.target.name]: obj});
    }

    // Handle click for category slider
    const handleCategoryClick = category => {
        if (categoryWarning) setCategoryWarning(false);
        setCategory(category);
    }

    // Check that all inputs with required is not empty
    const checkInputs = () => {
        // Will be false if any input does not meet requirements
        let check = true;

        // Check if category is selected
        if (category === '') {
            setCategoryWarning(true);
            check = false;
        }

        // Convert object into array
        const arr = Object.entries(inputs);

        const updateWarning = (name, value) => {
            const obj = inputs[name];
            obj.warning = value; 

            // Update inputs with new object
            setInputs({...inputs, [name]: obj});
            check = false;
        }
       
        // Check every inpuut in array
        for (let i in arr) {
            // Check if input has a value if its required
            if ((arr[i][1]['required'] && arr[i][1]['value'].length === 0)) {
                // const obj = inputs[arr[i][0]];
                // obj.warning = true; 

                // // Update inputs with new object
                // setInputs({...inputs, [arr[i][0]]: obj});
                // check = false;
                updateWarning(arr[i][0], true);
            }
        }

        if (arr[2][1].value !== '' && arr[3][1].value === '')
            updateWarning(arr[3][0], true);
    
        else if (arr[3][1].value !== '' && arr[2][1].value === '')
            updateWarning(arr[2][0], true);

        return check;
    }

    // Format the data into a object suitable for POST request
    const formatData = () => {      
        return {
            'author': inputs['author'].value,
            'date': Date.now(),
            'title': inputs['title'].value,
            'summary': inputs['summary'].value,
            'content': inputs['content'].value,
            'img': inputs['img'].value !== '' ? inputs['img'].value : null,
            'imgDescription': inputs['imgDescription'].value !== '' ? inputs['imgDescription'].value : null,
            'frontPage': frontPage,
            'category': category
        };
    }

    // Left tab component with all form inputs
    let edit = (
        <>
            <Wrapper>
                <InputTitle>Your name</InputTitle>
                <Input 
                    name='author'
                    placeholder='John Doe'
                    onChange={handleChange}
                    value={inputs['author'].value}
                    warning={inputs['author'].warning}
                />
                <WarningText show={inputs['author'].warning}>Author name is required</WarningText>

                <Spacing />
                <InputTitle>Title</InputTitle>
                <Input 
                    name='title'
                    placeholder={titlePlaceHolder}
                    onChange={handleChange}
                    value={inputs['title'].value}
                    warning={inputs['title'].warning}
                />
                <WarningText show={inputs['title'].warning}>Title is required</WarningText>

                <Spacing />
                <InputTitle>The brief</InputTitle>
                <TextArea 
                    name='summary'
                    placeholder={summarylaceHolder}
                    onChange={handleChange}
                    value={inputs['summary'].value}
                    warning={inputs['summary'].warning}
                />
                <WarningText show={inputs['summary'].warning}>A brief summary is required</WarningText>
                
                <Spacing />
                <InputTitle>Image</InputTitle>
                <Input 
                    name='imageLink'
                    placeholder='Link to image'
                    onChange={handleChange}
                    value={inputs['img'].value}
                    warning={inputs['img'].warning}
                    fontSize='20px'
                />
                <WarningText show={inputs['img'].warning}>An image is required for an image description</WarningText>

                <Spacing size='20px'/>
                <Input 
                    name='imageDescription'
                    placeholder='Image description'
                    onChange={handleChange}
                    value={inputs['imgDescription'].value}
                    warning={inputs['imgDescription'].warning}
                    fontSize='20px'
                />
                <WarningText show={inputs['imgDescription'].warning}>A description of the image is required</WarningText>

                <Spacing />
                <InputTitle>Content</InputTitle>
                <TextArea 
                    name='content'
                    placeholder={contentPlaceHolder}
                    onChange={handleChange}
                    value={inputs['content'].value}
                    warning={inputs['content']['warning']}
                    height='750px'
                />
                <WarningText show={inputs['content'].warning}>An article without content is not a good article!</WarningText>
            </Wrapper>
            
            <Upload 
                name='Publish' 
                checkInputs={checkInputs}
                data={formatData()}
                updateArticles={props.updateArticles}
            />
        </>
    );

    // Right tab component, article
    const article = <Article preview={true} previewData={formatData()} />

    return (
        <>
            <PublishSettings 
                data={props.categoryData}
                category={category}
                setCategory={handleCategoryClick}
                frontPage={frontPage}
                setFrontPage={setFrontPage}
                warning={categoryWarning}
            />
            <TabSplit 
                componentLeft={edit}
                componentRight={article}
                tabLeftName='Edit'
                tabRightName='Preview'
                backgroundColor='#F8F8F8'
            />
        </>
    );
} 

export default Add;