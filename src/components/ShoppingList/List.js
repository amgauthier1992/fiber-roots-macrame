import React from 'react';
import StoreContext from '../../contexts/StoreContext';

import ShoppingItem from '../ShoppingItem/Item';
import './List.css'

class ShoppingList extends React.Component {

  static contextType = StoreContext;

  render(){

    const { products, addCartItem } = this.context;

    return (
      <div className='list-container'>
        <div className='list-items-container'>
          {products.map((p, i) => (
            <ShoppingItem 
              key={i} 
              id={p.id}
              name={p.product_name}
              description={p.description}
              image={p.image}
              price={p.price}
              status={p.status}
              addCartItem={addCartItem}
            />
          ))}
        </div>
      </div>
    );
  };
};

export default ShoppingList;