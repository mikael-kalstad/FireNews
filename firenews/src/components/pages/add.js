import React from 'react';
import styled from 'styled-components'

import ArticleForm from '../form/articleForm';

const Add = props => (
    <ArticleForm
        title='Publish an article'
        text='Write an article below and publish something you would like to share with the world.'
        btnName='Publish'
        categoryData={props.categoryData}
    />
);

export default Add;