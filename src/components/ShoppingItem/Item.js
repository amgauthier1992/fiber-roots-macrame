import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './Item.css';

class ShoppingItem extends React.Component {

  state = {
    isFlipped: false
  }

  //prevent addToCart button click event from bubbling up and triggering cardFlip
  handleAddToCart = (e) => {
    e.stopPropagation();
    console.log(e.currentTarget);
    this.props.addCartItem(e.currentTarget)
  }

  render(){
    let statusJSX = <></>;
    let buttonJSX = <></>;

    if(this.props.status){
      statusJSX = <div className='green'>In stock</div>
      buttonJSX = <button id='add-cart-btn' className='btn-enabled' type='button' onClick={(e) => {this.handleAddToCart(e)}}>Add To Cart</button>
    } else {
      statusJSX = <div className='red'>Out of stock</div>
      buttonJSX = <button id='add-cart-btn' className='btn-disabled' type='button' disabled>Add To Cart</button>
    };

    return (
      <Flippy 
        // flipOnHover={true}
        flipOnClick={true}
        flipDirection="horizontal"
        ref={(r) => this.flippy = r}
      >
      <div className={`shopping-item item${this.props.id}`}>
        <FrontSide>
          <div className='item-header'>
            <h2 id='item-h2'>{this.props.name}</h2>
          </div>
          <div className='item-details card-front'>
            <img id='item-thumbnail' src={this.props.image} alt='macrame-product'/>
            <div id='i-price'>${this.props.price}</div>
            <div id='i-status'>{statusJSX}</div>
          </div>
          {buttonJSX}
        </FrontSide>
        <BackSide>
          <div className='item-details card-back'>
            <h3>Product Description:</h3>
            <div id='item-description'>{this.props.description}</div>
          </div>
        </BackSide>
      </div>
      </Flippy>
    )
  }
};

export default ShoppingItem;
