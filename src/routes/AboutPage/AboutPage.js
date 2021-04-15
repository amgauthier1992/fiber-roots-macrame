import React from 'react';

import Nav from '../../components/Nav/Nav';
import './AboutPage.css'

export default function AboutPage(props){
  return (
    <div className='about-container'>
      <Nav />
      <header>
        <h1>About</h1>
      </header>
    </div>
  )
}