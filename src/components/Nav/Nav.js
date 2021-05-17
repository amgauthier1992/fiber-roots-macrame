import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import GoogleBtn from '../GoogleBtn/GoogleBtn';
import './Nav.css'

export default function Nav(props){
  return (
    <nav id='nav'>
      <Link to='/' title='Home'><Logo /></Link>
      <GoogleBtn/>
      <Link to='/about' title='About'>About</Link>
      <Link to='/browse' title='Shop'>Shop</Link>
      <Link to='/cart' title='Cart'><FaShoppingBag /><span id='cart-span'>{props.cartQty}</span></Link>
    </nav>
  );
};
