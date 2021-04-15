import React from 'react';

import Nav from '../../components/Nav/Nav';
import MacrameImg from '../../images/macrame-background.png'
import './LandingPage.css'

export default function LandingPage(props){ 
  return (
    <div className='landing-container'>
      <Nav />
      <h2 id='landing-description'> Bohemian Macramé Decor. Handcrafted with Love.</h2>
      <img id='macrame-img' className='responsive-img' alt='macrame-wall-hanging' src={MacrameImg}/>
    </div>
  );
};

