import React from 'react';
import config from '../../config';
import { Route, Switch, withRouter } from 'react-router-dom';
import StoreContext from '../../contexts/StoreContext';

import Nav from '../../components/Nav/Nav';
import LandingPage from '../../routes/LandingPage/LandingPage';
import AboutPage from '../../routes/AboutPage/AboutPage';
import ShoppingPage from '../../routes/ShoppingPage/ShoppingPage';

import './App.css';

class App extends React.Component { 

  state = {
    products: [],
    cart: [],
    error: null
  };

  setProducts = (products) => {
    this.setState({ products });
  };

  addCartItem = (item) => {
    const updatedCart = [...this.state.cart];
    updatedCart.push(item);
    this.setState({
      cart: updatedCart,
    });
  };

  removeCartItem = (id) => {
    const updatedCart = this.state.cart.filter((item) => item.id !== id);
    this.setState({
      cart: updatedCart,
    });
  };

  // onSignIn = (googleUser) => {
  //   console.log('google')
  //   let profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }

  // onSignOut = () => {
  //   let auth2 = gapi.auth2.getAuthInstance();
  //     auth2.signOut().then(() => {
  //       console.log('User signed out.');
  //   });
  // }

  componentDidMount() {
    //Get products from API
    fetch(`${config.REACT_APP_API_ENDPOINT}/api/products`, {
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

  render(){
    const contextValue = {
      products: this.state.products,
      cart: this.state.cart,
      addCartItem: this.addCartItem,
      removeCartItem: this.removeCartItem
    };

    return (
      <div className="App">
        <Nav />
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
          </Switch>
        </StoreContext.Provider>
        {/* <div className="g-signin2" tabIndex='0' data-onsuccess="onSignIn"></div> */}
      </div>
    );
  };
};

export default withRouter(App);