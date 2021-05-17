import React from 'react';
import config from '../../config';
import { Route, Switch, withRouter } from 'react-router-dom';
import StoreContext from '../../contexts/StoreContext';

import Nav from '../../components/Nav/Nav';
import LandingPage from '../../routes/LandingPage/LandingPage';
import AboutPage from '../../routes/AboutPage/AboutPage';
import ShoppingPage from '../../routes/ShoppingPage/ShoppingPage';
import ViewCartPage from '../../routes/ViewCartPage/ViewCartPage';

import './App.css';

class App extends React.Component { 

  state = {
    products: [],
    cart: [] || JSON.parse(localStorage.getItem('dataCart')),
    total: 0 || JSON.parse(localStorage.getItem('dataTotal')),
    error: null
  };

  setProducts = (products) => {
    this.setState({ products });
  };

  // setCart = () => {
  //   const prevCart = JSON.parse(localStorage.getItem('dataCart'));
  //   console.log(prevCart)

  //   if(prevCart > 0){
  //     console.log('yes')
  //     this.setState({
  //       cart: prevCart
  //     })
  //   }
  // }

  // setTotal = () => {
  //   const prevTotal = JSON.parse(localStorage.getItem('dataTotal'));
  //   console.log(prevTotal)

  //   if(prevTotal > 0){
  //     console.log('yes')
  //     this.setState({
  //       total: prevTotal
  //     })
  //   }
  // }

  addCartItem = (id) => {
    const item = this.state.products[id - 1];
    const itemPrice = item.price;
    const updatedCart = [...this.state.cart];
    let currTotal = this.state.total;
    const updatedTotal = currTotal += itemPrice;

    updatedCart.push(item);

    this.setState({
      cart: updatedCart,
      total: updatedTotal
    }, () => setTimeout(1000, console.log(this.state.cart, this.state.cart.length)));
  };

  removeCartItem = (id) => {
    const itemToRemove = this.state.products[id - 1];
    const itemPrice = itemToRemove.price;
    const updatedCart = this.state.cart.filter((item) => item.id !== itemToRemove.id);
    let currTotal = this.state.total;
    const updatedTotal = currTotal -= itemPrice;

    this.setState({
      cart: updatedCart,
      total: updatedTotal
    }, () => setTimeout(1000, console.log(this.state.cart, this.state.cart.length)));
  };

  componentDidMount() {
    //Get products from API
    fetch(`${config.REACT_APP_API_ENDPOINT}/products`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        // "Authorization": `Bearer ${config.REACT_APP_API_KEY}`
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((products) => {
        this.setProducts(products);
      })
      .catch((error) => this.setState({ error }));
  };
  
  componentDidUpdate(){
    localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
    localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
  };

  render(){
    const contextValue = {
      products: this.state.products,
      cart: this.state.cart,
      total: this.state.total,
      addCartItem: this.addCartItem,
      removeCartItem: this.removeCartItem
    };

    return (
      <div className="App">
        <Nav cartQty={this.state.cart.length}/>
        <StoreContext.Provider value={contextValue}>
          <Switch>
            <Route 
              exact path='/' 
              component={LandingPage}
            />
            <Route 
              path='/about' 
              component={AboutPage}
            />
            <Route 
              path='/browse' 
              component={ShoppingPage}
            />
            <Route 
              path='/cart' 
              component={ViewCartPage}
            />
          </Switch>
        </StoreContext.Provider>
      </div>
    );
  };
};

export default withRouter(App);