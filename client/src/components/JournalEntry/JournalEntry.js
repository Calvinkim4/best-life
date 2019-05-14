import React from 'react';
import Food from '../Food/Food';
import Exercise from '../Exercise/Exercise';
<<<<<<< HEAD
import '../JournalEntry'

import { getAllEntries, createEntry } from '../../services/entryApi';
=======
import './JournalEntry.css'
>>>>>>> 753143a2c0d829eb4e3eb4b4928ffb1b5d37101b

class JournalEntry extends React.Component{
  constructor(){
    super();
    this.state = {
      entries: [],
    }
  }

// hardcoded user id
  async componentDidMount() {
    this.setState({
      entries: await getAllEntries(1)
    });
  }

  render(){

    const allEntries = this.state.entries ? this.state.entries.map(entry => {
      return (
        <div className='journal-entry'>
          <h1>{entry.date}</h1>
          <div className='entry-container'>
          <Food />
          <Exercise />
          </div>
          <h3>{entry.total_amount}</h3>
        </div>
      )
    }): null;

    return(
<<<<<<< HEAD
      <div>
        {allEntries}
=======
      <div className='journal-entry'>
        <h1>Date</h1>
        <div className='entry-container'>
        <Food />
        <Exercise />
        </div>
        <h3>Total:</h3>
>>>>>>> 753143a2c0d829eb4e3eb4b4928ffb1b5d37101b
      </div>
    )
  }
}

export default JournalEntry;