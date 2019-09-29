import React, { useState, useEffect } from 'react';
import Layout from './layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";


// Pages for react router
import Home from './components/pages/home';
import Article from './components/pages/article';
import Add from './components/pages/add';
import Edit from './components/pages/edit';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');
    font-family: 'Rubik', sans-serif;
  }
`

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

  return (
    <Router>
      <GlobalStyles />
      <Layout
        category={category}
        setCategory={setCategory}
        categoryData={categoryData}
        refreshData={getArticles}
        articleData={articleData}
      >
        <Switch>
          <Route path='/' exact render={(props) => 
            <Home {...props} 
              data={articleData} 
              category={category} 
              refreshData={getArticles}
            />} 
          />
          <Route path='/article/:id' render={(props) => <Article {...props} data={articleData} />} />
          <Route path='/add' component={Add} />
          <Route path='/edit' render={(props) => <Edit {...props} categoryData={categoryData} />} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
