import React from 'react';
import './App.css';

import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/Dashboard/Dashboard';

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
        { !this.state.signedIn && <LoginForm signIn = {this.handleSignIn} />}
        { this.state.signedIn && <Dashboard/>}
      </div>
    );
  }

}

export default App;
