import React, { Component } from 'react';
import JournalEntry from '../JournalEntry/JournalEntry';
import Stats from '../Stats/Stats';
import './Dashboard.css';

class Dashboard extends Component{
  constructor(){
    super();
    this.state={
      addEntry: false
    }
  }

  addNewEntry = () =>{
    this.setState({
      addEntry: true
    })
  }

  submitNewEntry= () =>{
    this.setState({
      addEntry: false
    })
  }

  render(){
    return(
      <div className='dashboard'>
        <h2> Dashboard</h2>
        
        <div className='content-container'>
          <Stats userId={this.props.userId} />
          <JournalEntry userId={this.props.userId}/>

        </div>
      </div>
    )
  }
}

export default Dashboard;
