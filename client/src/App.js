import React, { Component } from 'react';
import './App.css';
import authService from './services/authService';
import { login, getProfile, signUp } from './services/apiService';
import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/Dashboard/Dashboard';
import RegisterPage from './components/RegisterForm/RegisterForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false,
      user: {}
    }
  }

  async componentDidMount () {
    try {
      const fetchedUser = await getProfile();

      this.setState({
        isSignedIn: authService.isAuthenticated(),
        user: fetchedUser
      })
    } catch (error) {
      console.log('Issue fetching token')
    }
  }

  signOut = () => {
    authService.signOut();
    this.setState({
      isSignedIn: false,
      user: {}
    })
  }

  loginUser = async (credentials) => {
    try {
      const user = await login(credentials)

      this.setState({
        isSignedIn: true,
        user: user
      })
    } catch (error) {
      throw error
    }
  }

  signUpUser = async (credentials) => {
    try {
      const user = await signUp(credentials)

      this.setState({
        isSignedIn: true,
        user: user
      })
    } catch (error) {
      throw error
    }
  }

  render () {
    const { isSignedIn } = this.state    

    return (
      <div className='App'>
    
          <h1 className='best-life'>BestLife</h1>
          { !isSignedIn &&
            <div className='register'>
              <LoginForm isSignedIn={isSignedIn} handleLogin={this.loginUser}/>

              <RegisterPage isSignedIn={isSignedIn} handleSignUp={this.signUpUser}/>
            </div>
          }

          { isSignedIn &&
            <div>
               <button className='signout-btn' onClick={this.signOut}> Sign out</button>
              <Dashboard userId={this.state.user.id}/>
            </div>
          }
        <div className='back-image'></div>

        <a className='github-link' href='https://github.com/Calvinkim4/best-life'>Github Page</a>
      </div>
    )
  }
}

export default App;
