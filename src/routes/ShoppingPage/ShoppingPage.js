import React from 'react';
// import StoreContext from '../../contexts/StoreContext';

import Nav from '../../components/Nav/Nav';
import ShoppingList from '../../components/ShoppingList/List';
import './ShoppingPage.css'

export default function ShoppingPage(props) {
  return (
    <div className='shopping-container'>
      <Nav />
      <ShoppingList />
    </div> 
  );
};

