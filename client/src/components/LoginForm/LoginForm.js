import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './LoginForm.css'

class LoginForm extends Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
      showError: false
    }

  }

  handleSubmitForm = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    const { handleLogin } = this.props;

    this.setState({ 
      showError: false 
    })

    try {
      await handleLogin({ 
        email, password
      })
    } catch (e) {
      this.setState({ 
        showError: true 
      })
    }
  }

  handleTextInput = async (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;

    this.setState(state => {
      return { [fieldName]: value }
    })
  }

  render () {
    const { showError } = this.state;
    const { isSignedIn } = this.props;

    let errorMessage

    if (showError) {
      errorMessage = (
        <div className='error-message'>
          <span>Incorrect credentials</span>
        </div>
      )
    }

    if (isSignedIn) {
      return <Redirect to='/dashboard' />
    }

    return (
      <div>
        { errorMessage }
        <form className='login-form' onSubmit={this.handleSubmitForm}>
          <div>
            <input className='login-input' type='text' name='email' onChange={this.handleTextInput} value={this.state.email} placeholder='Email'/>
          </div>

          <div>
            <input className='login-input' type='password' name='password' onChange={this.handleTextInput} value={this.state.password} placeholder='Password'/>
          </div>

          <button className='login-btn'>Login</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;
