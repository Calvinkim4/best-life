import React from 'react';
import Food from '../Food/Food';
import Exercise from '../Exercise/Exercise';
import '../JournalEntry'

import { getAllEntries, createEntry } from '../../services/entryApi';

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
      <div>
        {allEntries}
      </div>
      
    )
  }
}

export default JournalEntry;