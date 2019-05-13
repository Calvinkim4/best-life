import React from 'react';

class LoginForm extends React.Component{
  render(){
    return(
      <form className='login-form'>
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' />
        <button type='submit'>Login</button>
      </form>
    )
  }
}

export default LoginForm;
