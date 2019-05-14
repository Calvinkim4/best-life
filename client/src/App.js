import React from 'react';
import './App.css';
import axios from 'axios';
import { Router } from 'react-router-dom';

//components
import LoginForm from './components/LoginForm/LoginForm';

import Dashboard from './components/Dashboard/Dashboard'
  import RegisterPage from './components/RegisterPage/RegisterPage';




class App extends React.Component {
  constructor(){
    super();
    this.state={
      signedIn: false
    }
  }

  handleSignIn = () =>{
    this.setState({
      signedIn: true
    })
  }

  render(){
    return (
      <div className="App">
        <h1 className='best-life'>BestLife</h1>
        {/* { !this.state.signedIn && <LoginForm signIn = {this.handleSignIn} />}
        { this.state.signedIn && <Dashboard/>} */}
        <RegisterPage />
      </div>
    );
  }
  
}

export default App;
