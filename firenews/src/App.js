import React, { useState, useEffect } from 'react';
import Layout from './layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages for react router
import Home from './components/pages/home';
import Article from './components/pages/article';
import Add from './components/pages/add';

const App = () => {
  const [category, setCategory] = useState('Main');
  const [newsFeedData, setNewsFeedData] = useState('');
  const [articleData, setArticleData] = useState([]);

  // Get article data when component mounts
  useEffect(() => {
    setNewsFeedData({"summary": "The rainforest is burning at 50x faster rate than expected", "date": "12:53"})
    // setTimeout(() => {
        // Get all categories from DB
        fetch('http://localhost:4000/articles', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify()
        })
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log('Error: ', err));
    // }, 3000);
  }, []);

  // Set data if DB responded
  let setData = (data) => {
    if (data.message && data.message === 'pool destroyed') return;
    else setArticleData(data);
  }

  return (
    <Router>
      <Layout
        category={category}
        setCategory={setCategory}
        newsFeedData={newsFeedData}
      >
        <Switch>
          <Route path='/' exact render={(props) => <Home {...props} data={articleData} category={category} />} />
          <Route path='/article/:id' render={(props) => <Article {...props} data={articleData} />} />
          <Route path='/add' component={Add} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
