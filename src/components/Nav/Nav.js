import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import './Nav.css'

export default function Nav(props){
  return (
    <nav id='nav'>
      <Link to='/'><Logo /></Link>
      <Link to='/about'>About</Link>
      <Link to='/browse'>Shop</Link>
      <Link to='/cart'><FaShoppingBag /></Link>
    </nav>
  );
};

