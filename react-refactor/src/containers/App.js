import React, { useState } from 'react';
import Modal from 'react-modal';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Bio from '../components/Bio';
import Experience from '../components/Experience';
import '../styles/App.scss'

export default () => {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Bio />
      <Experience />
    </div>
  );
};
