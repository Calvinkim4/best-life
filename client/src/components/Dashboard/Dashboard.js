import React from 'react';
import JournalEntry from '../JournalEntry/JournalEntry'
import NewJournalEntry from '../NewJournalEntry/NewJournalEntry'
import Stats from '../Stats/Stats'
import './Dashboard.css'

class Dashboard extends React.Component{
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

  submitNewEntry=() =>{
    this.setState({
      addEntry: false
    })
  }

  render(){
    return(
      <div className='dashboard'> 
        <h1> Dashboard</h1>
        <div className='content-container'>
          <Stats />
          <JournalEntry addEntry={this.state.addEntry}/>
          <button className='new-entry-btn' onClick={this.addNewEntry}>+</button>
          {/* { this.state.addEntry && <NewJournalEntry submitNewEntry={this.submitNewEntry}/>} */}
        </div>
      </div>
    )
  }
}

export default Dashboard;