import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SignUpForm extends Component {
  constructor () {
    super();

    this.state = {
      email: '',
      password: '',
      showError: false
    }
  }

  handleSubmitForm = async (event) => {
    event.preventDefault()

    const { email, password } = this.state;
    const { handleSignUp } = this.props;

    try {
      await handleSignUp({
        email, password
      })
    } catch (e) {
      console.log(e.message)
    }
  }

  handleTextInput = (event) => {
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
          <span>An error occured, please try again</span>
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
            <input type='text' name='email' onChange={this.handleTextInput} value={this.state.email} placeholder='Email'/>
          </div>

          <div>
            <input type='password' name='password' onChange={this.handleTextInput} value={this.state.password} placeholder='Password'/>
          </div>

          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUpForm;
