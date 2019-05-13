import React from 'react';
import './LoginForm.css'

class LoginForm extends React.Component{
  render(){
    return(
      <form className='login-form' onSubmit={this.props.signIn}>
        <label htmlFor='username'>
          Username
          <input type='text' name='username' />
        </label>
        <label htmlFor='password'>
          Password
          <input type='password' name='password' />
        </label>
        <button className='login-btn'type='submit'>Login</button>
      </form>
    )
  }
}

export default LoginForm;
