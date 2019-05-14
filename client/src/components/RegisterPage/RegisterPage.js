import React, { Component } from 'react';

class RegisterPage extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            current_weight: 0,
            goal_weight: 0
        }
    }


    onRegisterFormChange = (event) => {
        const element = event.target
        const name = element.name
        let value = element.value

        if (name === 'current_weight' || name === 'goal_weight') {
            value = parseInt(value);
            console.log('asdfasdfa');
        }
  
        const newState = {}
        newState[name] = value
  
        this.setState(newState)

    }

    render () {
        return (
            <div>
                <form className='login-form' onSubmit={this.props.signIn}>
                    <label className='username' htmlFor='email'>
                    <input className='username'type='text' name='email' placeholder='email' onChange={ this.onRegisterFormChange }/>
                    </label>
                    <label className='password'htmlFor='password'>
                    <input className='password'type='password' name='password' placeholder='password' onChange={ this.onRegisterFormChange }/>
                    </label>
                    {/* <label className='password'htmlFor='retypepassword'>
                    <input className='password'type='password' name='retypepassword' placeholder='re-type password'/>
                    </label> */}
                    <label className='weight'htmlFor='weight'>
                    <input className='weight'type='text' name='current_weight' placeholder='current weight'onChange={ this.onRegisterFormChange }/>
                    </label>
                    <label className='weight'htmlFor='weight'>
                    <input className='weight'type='text' name='goal_weight' placeholder='goal weight'onChange={ this.onRegisterFormChange }/>
                    </label>
                    <button className='login-btn'type='submit'>Register</button>
                </form>
            </div>
        )
    }
}

export default RegisterPage;