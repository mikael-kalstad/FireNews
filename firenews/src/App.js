import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import Layout from './layout';

// Pages for react router
import Home from './components/pages/home';
import Article from './components/pages/article';
import Add from './components/pages/add';
import Edit from './components/pages/edit';
import EditArticle from './components/pages/editArticle';
import PageNotFound from './components/pages/pageNotFound';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');
    font-family: 'Rubik', sans-serif;
  }
`

const Overlay = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: none;
`;

const App = () => {
  // Current category
  const [category, setCategory] = useState('Main');

  // States that hold data
  // const [newsFeedData, setNewsFeedData] = useState('');
  const [articleData, setArticleData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);


  // Get article data when component mounts
  useEffect(() => {
    // setTimeout(() => {
      getArticles();
      getCategories();
    // }, 3000);
  }, []);

  // Function for updating article data, can be imported from any component
  let getArticles = () => {
    fetch('http://localhost:4000/articles', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify()
    })
    .then(res => res.json())
    .then(data => checkData(data) && setArticleData(data))
    .catch(err => console.log('Error: ', err));
  }

  let getCategories = () => {
    fetch('http://localhost:4000/categories', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify()
        })
        .then(res => res.json())
        .then(data => checkData(data) && setCategoryData(data))
        .catch(err => console.log('Error: ', err));
  }

  // Method to check if data is valid
  let checkData = (data) => {
    if (!data) return false;
    if (data.message && data.message === 'pool destroyed') return false;
    return true;
  }

  const RouteWithLayout = ({layout, component, render, ...rest}) => (
    <Layout
      category={category}
      setCategory={setCategory}
      categoryData={categoryData}
      refreshData={getArticles}
      articleData={articleData}
    >
      <Route {...rest} render={render} component={component}/>
    </Layout>
  );

  return (
    <Router>
      <Overlay id='overlay'/>
      <GlobalStyles />
        <Switch>
          <RouteWithLayout path='/' exact render={(props) => 
            <Home {...props} 
              data={articleData} 
              category={category} 
              refreshData={getArticles}
            />
          }/>

          <RouteWithLayout path='/article/:id' render={(props) => <Article {...props} data={articleData} />}/>
          <RouteWithLayout path='/edit' exact render={(props) => <Edit {...props} data={articleData} />}/>
          <RouteWithLayout path='/edit/:id' render={(props) => <EditArticle {...props} data={articleData} updateArticles={getArticles} categoryData={categoryData} />}/>
          <RouteWithLayout path='/add' render={(props) => <Add {...props} updateArticles={getArticles} categoryData={categoryData} />} />

           {/* 404 page not found */}
          <Route component={PageNotFound} />
        </Switch>
    </Router>
  );
};

export default App;
