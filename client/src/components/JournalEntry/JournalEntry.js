import React from 'react';
import Food from '../Food/Food';
import Exercise from '../Exercise/Exercise';

class JournalEntry extends React.Component{
  render(){
    return(
      <div className='journal-entry'>
        <h1>Date</h1>
        <Food />
        <Exercise />
        <h3>Total:</h3>
      </div>
      
    )
  }
}

export default JournalEntry;