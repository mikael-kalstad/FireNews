import React from 'react';
import ArticleForm from '../form/articleForm';

const request = data => {
    return fetch('http://localhost:4000/articles', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
    });
}

const Add = props => (
    <ArticleForm
        title='Publish an article'
        text='Write an article below and publish something you would like to share with the world.'
        btnName='Publish'
        finishedMsg='Article published'
        categoryData={props.categoryData}
        updateArticles={props.updateArticles}
        request={request}
    />
);

export default Add;