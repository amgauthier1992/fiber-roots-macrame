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
      picture: '',
      error: null
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login = (response) => {
    const id_token = response.getAuthResponse().id_token;

    if(response.accessToken){
      this.setState(state => ({
        // isSignedIn: true,
        accessToken: response.accessToken
      }));
    }
    
    if(response.tokenId){
      let payload = JSON.parse(atob(response.tokenId.split('.')[1]))
      this.setState({
        picture: payload.picture
      });
    }

    fetch(`${config.REACT_APP_API_ENDPOINT}/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'session_token': id_token,
      },
      withCredentials: true,
      credentials: 'include'
    })
      .then(res => {
        if(!res.ok) {
          // throw new Error('Authentication failed');
          this.handleLoginFailure();
        }
      })
      .then(() => {
        console.log('Signed in')
        this.setState({
          isSignedIn: true
        })
      })
      .catch((err) => {
        this.setState({
          error: err.message
        })
      })
  }

  logout = (response) => {
  // logout = (response) => {

    fetch(`${config.REACT_APP_API_ENDPOINT}/logout`, {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
      credentials: 'include'
    })
      .then(res => {
        if(!res.ok){
          this.handleLogoutFailure();
        }
      })
      .then(() => {
        console.log('Logging out')
        this.setState({
          isSignedIn: false,
          accessToken: ''
        })
        // this.setState(state => ({
        //   isSignedIn: false,
        //   accessToken: ''
        // }))
      })
      .catch((err) => {
        this.setState({
          error: err.message
        })
      })
  }

  //**this also triggers a login somehow when using enter on the logout button/image**
  onKeyDown = (e) => {
    console.log(e.keyCode)
    if (e.keyCode === 13) {
      this.logout();
      // e.preventDefault();
      // e.stopPropagation();
    }
  };

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
            <img className='google-profile-picture' src={this.state.picture} title='Log Out' alt='google-profile-icon' tabIndex={0} onKeyDown={(e) => this.onKeyDown(e)} onClick={renderProps.onClick}/>
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
            <a href='#' tabIndex={0} onClick={renderProps.onClick}>Login</a>
          )}
        />
      }
    </div>
    )
  }
}

export default GoogleBtn;