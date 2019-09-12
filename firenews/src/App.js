import React, { useState, useEffect } from 'react';
import Layout from './layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages for react router
import Home from './components/pages/home';
import Article from './components/pages/article';
import Add from './components/pages/add';

const App = () => {
  const [category, setCategory] = useState('all');
  const [newsFeedData, setNewsFeedData] = useState('');
  const [articleData, setArticleData] = useState([]);

  // Get article data when component mounts
  useEffect(() => {
    // setTimeout(() => {
      async function getData() {
        // Get all categories from DB
        const res = await fetch('http://localhost:4000/articles', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify()
        })
        .catch(err => console.log('Error: ', err));

        const data = await res.json();
        setArticleData(data);
    }

    getData();
    // }, 3000);
  }, []);

  return (
    <Router>
      <Layout
        category={category}
        setCategory={setCategory}
        newsFeedData={newsFeedData}
      >
        <Switch>
          <Route path='/' exact render={(props) => <Home {...props} data={articleData} />} />
          <Route path='/article/:id' render={(props) => <Article {...props} data={articleData} />} />
          <Route path='/add' component={Add} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
