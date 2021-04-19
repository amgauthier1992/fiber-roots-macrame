import React from 'react';

import MacrameImg from '../../images/macrame-background.png'
import './LandingPage.css'

export default function LandingPage(props){ 
  return (
    <div className='landing-container'>
      {/* <span id='landing-description'> Bohemian Macramé Decor. Handcrafted with Love.</span> */}
      <h2 id='landing-description'> Bohemian Macramé Decor. Handcrafted with Love.</h2>
      <img id='macrame-img' className='responsive-img' alt='macrame-wall-hanging' src={MacrameImg}/>
    </div>
  );
};

