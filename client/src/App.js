import React from 'react';
import './App.css';

// import { Router } from 'react-router-dom';
import authService from './services/authService';
import { login, getProfile, signUp } from './services/apiService';
// import Home from './components/Home'
// import Login from './components/Login'
// import SignUp from './components/SignUp'
//import Dashboard from './components/Dashboard'
// import PrivateRoute from './components/PrivateRoute'
// import { Route, Link, Redirect } from 'react-router-dom'

//components
// import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/Dashboard/Dashboard';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
// import RegisterPage from './components/RegisterPage/RegisterPage';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSignedIn: false,
      user: {}
    }

    this.signOut = this.signOut.bind(this)
    this.loginUser = this.loginUser.bind(this)
    this.signUpUser = this.signUpUser.bind(this)
  }

  async componentDidMount () {
    try {
      const fetchedUser = await getProfile()

      this.setState({
        isSignedIn: authService.isAuthenticated(),
        user: fetchedUser
      })
    } catch (e) {
      console.log('Issue fetching token')
    }

    this.signOut = this.signOut.bind(this)
    this.loginUser = this.loginUser.bind(this)
    this.signUpUser = this.signUpUser.bind(this)
  }

  signOut () {
    authService.signOut()
    this.setState({
      isSignedIn: false,
      user: {}
    })
  }

  async loginUser (credentials) {
    try {
      const user = await login(credentials)

      this.setState({
        isSignedIn: true,
        user: user
      })
    } catch (e) {
      throw e
    }
  }

  async signUpUser (credentials) {
    try {
      const user = await signUp(credentials)

      this.setState({
        isSignedIn: true,
        user: user
      })
    } catch (e) {
      throw e
    }
  }

  render () {
    // const { isSignedIn, user } = this.state
    const { isSignedIn } = this.state    

    // const PrivateRoute = ({ component: Component, ...rest }) => {
    //   return (
    //     <Route
    //       {...rest}
    //       render={props =>
    //         authService.isAuthenticated() ? (
    //           <Component {...props} {...rest} userId={this.state.user.id} />
    //         ) : (
    //           <Redirect
    //             to={{
    //               pathname: '/login',
    //               state: { from: props.location }
    //             }}
    //           />
    //         )
    //       }
    //     />
    //   )
    // }

    return (
      <div className='App'>
        <nav>
          
          { !isSignedIn &&
            <div>
              {/* <Link to='/login'>Login</Link> */}
              <LoginForm isSignedIn={isSignedIn} handleLogin={this.loginUser}/>


              {/* <Link to='/signup'>Sign up</Link> */}
              <SignUpForm isSignedIn={isSignedIn} handleSignUp={this.signUpUser}/>
            </div>
          }

          { isSignedIn &&
            <div>
               <button onClick={this.signOut}> Sign out</button>
              {/* <Link to='/dashboard'>Dashboard</Link> */}
              <Dashboard userId={this.state.user.id}/>
            </div>
          }
        </nav>

        <main>
          {/* <Route exact path='/' component={Home} /> */}
          {/* <Route
            path='/login'
            render={
              (props) =>
                <Login
                  {...props}
                  isSignedIn={isSignedIn}
                  handleLogin={this.loginUser}
                />
            }
          /> */}

          {/* <Route
            path='/signup'
            render={
              (props) =>
                <SignUp
                  {...props}
                  isSignedIn={isSignedIn}
                  handleSignUp={this.signUpUser}
                />
            }
          /> */}

          {/* <PrivateRoute
            path='/dashboard'
            component={Dashboard}
          /> */}

        </main>

        <h6>https://github.com/Calvinkim4/best-life</h6>
      </div>
    )
  }
}


// class App extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       signedIn: false
//     }
//   }

//   handleSignIn = () =>{
//     this.setState({
//       signedIn: true
//     })
//   }

//   render(){
//     return (
//       <div className="App">
//         <h1 className='best-life'>BestLife</h1>
//         { !this.state.signedIn && <LoginForm signIn = {this.handleSignIn} />}
//         { this.state.signedIn && <Dashboard/>}
//         {/* <RegisterPage /> */}
//       </div>
//     );
//   }
  
// }

export default App;
