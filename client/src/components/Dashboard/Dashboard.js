import React from 'react';
import JournalEntry from '../JournalEntry/JournalEntry'
import Stats from '../Stats/Stats'
import './Dashboard.css'

class Dashboard extends React.Component{
  constructor(){
    super();
    this.state={
      addEntry: false
    }
  }
  render(){
    return(
      <div className='dashboard'> 
        <h1> Dashboard</h1>
        <div className='content-container'>
          <Stats />
          <JournalEntry />
          <button className='new-entry-btn'>+</button>
        </div>
      </div>
    )
  }
}

export default Dashboard;