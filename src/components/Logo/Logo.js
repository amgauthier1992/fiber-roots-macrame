import React from 'react';
import FiberRootsLogo from '../../images/fiber-logo.png'
import './Logo.css';  

export default function Logo(props){
  return <img className='logo' src={FiberRootsLogo} alt='Fiber-and-Roots-Logo'/>;
}