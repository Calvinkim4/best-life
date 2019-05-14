import React, { Component } from 'react';
import { createUser } from '../../services/userApi';

class RegisterPage extends Component {
    constructor(){
        super();
        this.state = {
            user: {},
            created: false
    }
}

    onRegisterFormChange = (event) => {
        const element = event.target
        const name = element.name
        let value = element.value

        if (name === 'current_weight' || name === 'goal_weight') {
            value = parseInt(value);
        }
  
        const newState = {}
        newState[name] = value
  
        this.setState(newState)

    }

    onRegisterFormSubmit = async (event) => {
        event.preventDefault()

        let newUser = {
            email: this.state.email,
            password: this.state.password,
            current_weight: this.state.current_weight,
            goal_weight: this.state.goal_weight
        }

        const user = await createUser(newUser);
  
        this.setState({
            user: user,
            created: true
        })
      }

    render () {
        return (
            <div>
                <form className='login-form' onSubmit={this.onRegisterFormSubmit}>
                    <label className='username' htmlFor='email'>
                    <input className='username'type='text' name='email' placeholder='email' onChange={ this.onRegisterFormChange }/>
                    </label>
                    <label className='password'htmlFor='password'>
                    <input className='password'type='password' name='password' placeholder='password' onChange={ this.onRegisterFormChange }/>
                    </label>
                    <button className='login-btn'type='submit'>Register</button>
                </form>
            </div>
        )
    }
}

export default RegisterPage;