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
  const [category, setCategory] = useState('Main');
  // const [newsFeedData, setNewsFeedData] = useState('');
  const [articleData, setArticleData] = useState([]);

  // Get article data when component mounts
  useEffect(() => {
    // setTimeout(() => {
    refreshData();
    // }, 3000);
  }, []);

  let refreshData = () => {
    fetch('http://localhost:4000/articles', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify()
    })
    .then(res => res.json())
    .then(data => {
      setData(data);
    })
    .catch(err => console.log('Error: ', err));
  } 

  // Set data if DB responded
  let setData = (data) => {
    if (data.message && data.message === 'pool destroyed') return;
    else setArticleData(data);
  }

  return (
    <Router>
      <GlobalStyles />
      <Layout
        category={category}
        setCategory={setCategory}
        newsFeedData={articleData}
      >
        <Switch>
          <Route path='/' exact render={(props) => 
            <Home {...props} 
              data={articleData} 
              category={category} 
              refreshData={refreshData}
            />} 
          />
          <Route path='/article/:id' render={(props) => <Article {...props} data={articleData} />} />
          <Route path='/add' component={Add} />
          <Route path='/edit' component={Edit} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
