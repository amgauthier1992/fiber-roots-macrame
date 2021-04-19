import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import GoogleBtn from '../GoogleBtn/GoogleBtn';
import './Nav.css'

export default function Nav(props){
  return (
    <nav id='nav'>
      <Link to='/'><Logo /></Link>
      <GoogleBtn/>
      <Link to='/about'>About</Link>
      <Link to='/browse'>Shop</Link>
      <Link to='/cart'><FaShoppingBag /></Link>
    </nav>
  );
};
