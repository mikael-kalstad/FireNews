import React from 'react';
import ArticleForm from '../form/articleForm';
import { newArticle } from '../../dao/articleDAO';

const Add = props => (
    <ArticleForm
        title='Publish an article'
        text='Write an article below and publish something you would like to share with the world.'
        btnName='Publish'
        finishedMsg='Article published'
        categoryData={props.categoryData}
        updateArticles={props.updateArticles}
        request={newArticle}
    />
);

export default Add;