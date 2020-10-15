import React from 'react';

import Header from './components/header/Header';
import Search from './components/search/Search';
import Contents from './components/funds/Contents';
import Footer from './components/footer/Footer';

import './styles/App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Search />
      <Contents />
      <Footer />
    </div>
  );
};

export default App;
