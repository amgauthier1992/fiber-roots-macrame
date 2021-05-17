import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store';
import { connect } from 'react-redux';
import { fetchProducts } from './actions/productActions';
import Nav from './components/Nav/Nav';
import LandingPage from './routes/LandingPage/LandingPage';
import AboutPage from './routes/AboutPage/AboutPage';
import ShoppingPage from './routes/ShoppingPage/ShoppingPage';
import ViewCartPage from './routes/ViewCartPage/ViewCartPage';

class App extends React.Component {
  
  state = {
    error: null
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render(){
    return (
      <div className="App">
        {/* <Nav cartQty={this.state.cart.length}/> */}
        <Nav />
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
      </div>
    );
  };
};

export default connect(
  (state) => ({ products: state.products }),
  { fetchProducts }
)(withRouter(App));


