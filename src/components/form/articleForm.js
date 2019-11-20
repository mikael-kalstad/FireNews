import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Upload from './upload';
import TabSplit from './tabSplit';
import Article from '../pages/article';
import ArticleFormInputs from './articleFormInputs';
import ArticleFormSettings from './articleFormSettings';

const Container = styled.div`
    max-width: 1200px;
    margin: auto;
`;

const ArticleForm = props => {
    // State object that holds all values to the inputs
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
    const [category, setCategory] = useState(props.preSetCategory || '');
    const [categoryWarning, setCategoryWarning] = useState(false);
    const [disabled, setDisabled] = useState(false);

    // If article data is provided as a prop find article and set inputs
    useEffect(() => {
        let articleData = null;

        // Find the specific article if the data and id is specified
        if (props.data && props.id) 
            articleData = props.data.find(a => a._id === props.id);

        // The rest of the code should only run if the articleData is defined
        if (!articleData) return;
    
        // Convert object into array
        const arr = Object.entries(inputs);

        // Check every input in array
        for (let i in arr) {
            // Only update input if articleData is defined
            if (articleData[arr[i][0]]) {
                const obj = arr[i];
                obj[1].value = articleData[arr[i][0]];
        
                // Update inputs with new object
                setInputs({...inputs, [arr[i][0]]: obj[1]});
            }  
        }

        // Set other settings in state
        if (articleData.category)
            setCategory(articleData.category);

        if (articleData.frontPage)
            setFrontPage(articleData.frontPage);
    }, [])

    // Handle change for all inputs
    const handleChange = e => {
        // Get object reference to specific input
        const obj = inputs[e.target.name];

        // Change to new value
        obj.value = e.target.value;

        // If warning is enabled and the input is not empty, the warning should be disabled
        if (inputs[e.target.name].warning && e.target.value !== '') 
            obj.warning = false;

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
            let name = arr[i][0];

            // Check if input has a value if its required
            if ((arr[i][1]['required'] && arr[i][1]['value'].length === 0)) {
                // updateWarning(arr[i][0], true);
                // Update warning in state
                const obj = inputs[name];
                obj.warning = true; 

                // Update inputs with new object
                setInputs({...inputs, [name]: obj});
                check = false;
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
    let form = (
        <>
            <ArticleFormInputs 
                inputs={inputs}
                handleChange={handleChange}
                disabled={disabled}
            />
            <Upload 
                name={props.btnName} 
                checkInputs={checkInputs}
                data={formatData()}
                updateArticles={props.updateArticles}
                finishedMsg={props.finishedMsg}
                disabled={props.disabled}
                request={props.request}
                id={props.id}
                setDisabled={setDisabled}
            />
        </>
    );

    // Right tab component, article
    const preview = <Article preview={true} previewData={formatData()} />

    return (
        <Container>
            <ArticleFormSettings 
                title={props.title}
                text={props.text}
                data={props.categoryData}
                category={category}
                setCategory={handleCategoryClick}
                frontPage={frontPage}
                setFrontPage={setFrontPage}
                warning={categoryWarning}
                disabled={props.disabled || disabled}
                backTo={props.backTo}
            />
            <TabSplit 
                componentLeft={form}
                componentRight={preview}
                tabLeftName='Edit'
                tabRightName='Preview'
                backgroundColor='#F8F8F8'
            />
        </Container>
    );
} 

export default ArticleForm;