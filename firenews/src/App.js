import React, { useState } from 'react';
//import SideNav from './components/SideNav';
import Layout from './layout';

const App = () => {
  const [category, setCategory] = useState('all');

  return (
    <Layout
      category={category}
      setCategory={setCategory}
    >
      {/* <div>Hello World!</div> */}
    </Layout>
  );
};

export default App;
