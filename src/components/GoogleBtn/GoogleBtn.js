import React from 'react';
import config from '../../config';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './GoogleBtn.css'

// const CLIENT_ID = config.CLIENT_ID;

class GoogleBtn extends React.Component {
   constructor(props) {
    super(props);
   
    this.state = {
      isSignedIn: false,
      accessToken: '',
      picture: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login = (response) => {
    if(response.accessToken){
      this.setState(state => ({
        isSignedIn: true,
        accessToken: response.accessToken
      }));
    }
    
    if(response.tokenId){
      let payload = JSON.parse(atob(response.tokenId.split('.')[1]))
      this.setState({
        picture: payload.picture
      });
    }
  }

  logout = (response) => {
    this.setState(state => ({
      isSignedIn: false,
      accessToken: ''
    }));
  }

  handleLoginFailure = (response) => {
    alert('Failed to log in')
  }

  handleLogoutFailure = (response) => {
    alert('Failed to log out')
  }

  render() {

    const CLIENT_ID = config.CLIENT_ID;
    
    return (
    <div>
      { this.state.isSignedIn ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
          render={renderProps => (
            <img className='google-profile-picture' src={this.state.picture} title='Log Out' alt='google-profile-icon' onClick={renderProps.onClick}/>
          )}
        />
        : 
        <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText='Login'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
          isSignedIn={true}
          render={renderProps => (
            <a href='#' onClick={renderProps.onClick}>Login</a>
          )}
        />
      }
    </div>
    )
  }
}

export default GoogleBtn;