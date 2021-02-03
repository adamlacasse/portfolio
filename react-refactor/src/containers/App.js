import React from 'react';
import Header from '../components/Header';
import Bio from '../components/Bio';
import Nav from '../components/Nav';
import '../styles/App.scss'

export default () => {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Bio />
    </div>
  );
}
