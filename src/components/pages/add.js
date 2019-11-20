import React from 'react';
import ArticleForm from '../form/articleForm';
import ArticleDAO from '../../dao/articleDAO';

const articleDAO = new ArticleDAO();

const Add = props => (
    <ArticleForm
        title='Publish an article'
        text='Write an article below and publish something you would like to share with the world.'
        btnName='Publish'
        finishedMsg='Article published'
        preSetCategory={props.match.params.category}
        categoryData={props.categoryData}
        updateArticles={props.updateArticles}
        request={articleDAO.newArticle}
    />
);

export default Add;