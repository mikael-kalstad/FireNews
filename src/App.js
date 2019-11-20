import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import Layout from './layout';

// DAO methods
import ArticleDAO from './dao/articleDAO';
import { getCategories } from './dao/categoryDAO';

// Pages for react router
import Home from './components/pages/home';
import Article from './components/pages/article';
import Add from './components/pages/add';
import Edit from './components/pages/edit';
import EditArticle from './components/pages/editArticle';
import PageNotFound from './components/pages/pageNotFound';

// Initiate DAO classes
const articleDAO = new ArticleDAO(); 

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');
    font-family: 'Rubik', sans-serif;
  }
`

const Overlay = styled.div`
  position: fixed;
  z-index: 9998;
  width: 100vw;
  height: 100vh;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  display: none;
`;

const App = () => {
  // Current category
  const [category, setCategory] = useState('Main');

  // States that hold data
  const [articleData, setArticleData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  const fetchData = async() => {
    setTimeout(async() => {
      setArticleData(await articleDAO.getArticles());
      setCategoryData(await getCategories());
    }, 1500)
  }

  // Get article data when component mounts
  useEffect(() => {
      fetchData();
  }, []);

  const RouteWithLayout = ({layout, component, render, ...rest}) => (
    <Layout
      category={category}
      setCategory={setCategory}
      categoryData={categoryData}
      refreshData={articleDAO.getArticles}
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
              refreshData={articleDAO.getArticles}
            />
          }/>

          <RouteWithLayout 
            path='/article/:id' 
            render={(props) => <Article {...props} data={articleData} />}
          />
          <RouteWithLayout 
            path='/edit'  
            exact
            render={(props) => <Edit {...props} data={articleData} />}
          />
          <RouteWithLayout 
            path='/edit/:id' 
            render={(props) => <EditArticle {...props} data={articleData} 
            updateArticles={fetchData} 
            categoryData={categoryData} />}
          />
        
          <RouteWithLayout 
            path='/add' 
            exact
            render={(props) => <Add {...props} 
            updateArticles={fetchData} 
            categoryData={categoryData} />} 
          />
          
          <RouteWithLayout 
            path='/add/:category' 
            render={(props) => <Add {...props} 
            updateArticles={fetchData} 
            categoryData={categoryData} />} 
          />

           {/* 404 page not found */}
          <Route component={PageNotFound} />
          
        </Switch>
    </Router>
  );
};

export default App;
