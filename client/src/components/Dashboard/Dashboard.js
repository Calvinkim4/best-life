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

  handleNewEntry = () =>{
    this.setState({
      addEntry: true
    })
  }
  render(){
    return(
      <div className='dashboard'> 
        <h1> Dashboard</h1>
        <div className='content-container'>
          <Stats />
          <JournalEntry addEntry = {this.props.addEntry}/>
          <button className='new-entry-btn' onClick={this.handleNewEntry}>+</button>
        </div>
      </div>
    )
  }
}

export default Dashboard;