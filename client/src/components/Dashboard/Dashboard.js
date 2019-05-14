import React from 'react';
import JournalEntry from '../JournalEntry/JournalEntry'
import Stats from '../Stats/Stats'
import './Dashboard.css'

class Dashboard extends React.Component{
  render(){
    return(
      <div className='dashboard'> 
        <h1> Dashboard</h1>
        <div className='content-container'>
          <Stats />
          <JournalEntry />
        </div>
      </div>
    )
  }
}

export default Dashboard;