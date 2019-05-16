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
          <Stats userId={this.props.userId} />
          <JournalEntry addEntry={this.state.addEntry} userId={this.props.userId}/>
          <button className='new-entry-btn' onClick={this.addNewEntry}>+</button>

        </div>
      </div>
    )
  }
}

export default Dashboard;
