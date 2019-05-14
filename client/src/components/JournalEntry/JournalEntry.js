import React from 'react';
import Food from '../Food/Food';
import Exercise from '../Exercise/Exercise';
import './JournalEntry.css'

class JournalEntry extends React.Component{
  render(){
    return(
      <div className='journal-entry'>
        <h1>Date</h1>
        <div className='entry-container'>
        <Food />
        <Exercise />
        </div>
        <h3>Total:</h3>
      </div>
      
    )
  }
}

export default JournalEntry;