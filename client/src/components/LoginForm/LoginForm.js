import React from 'react';
import './LoginForm.css'

class LoginForm extends React.Component{
  render(){
    return(
      // <form className='login-form' onSubmit={this.props.signIn}>
      //   <label className='username' htmlFor='username'>
      //     Username: 
      //     <input className='username'type='text' name='username' />
      //   </label>
      //   <label className='password'htmlFor='password'>
      //     Password: 
      //     <input className='password'type='password' name='password' />
      //   </label>
      //   <button className='login-btn'type='submit'>Login</button>
      // </form>
      <button className='login-btn'onClick={this.props.signIn}>Login</button>
    )
  }
}

export default LoginForm;
