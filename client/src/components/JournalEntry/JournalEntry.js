import React from 'react';
import Food from '../Food/Food';
import Exercise from '../Exercise/Exercise';

import { getAllEntries, createEntry } from '../../services/entryApi';
// import { getAllFood } from '../../services/foodApi';

import './JournalEntry.css';

class JournalEntry extends React.Component{
  constructor(){
    super();
    this.state = {
      entries: [],
      foods: [],
      exercises: [],
      calorie_amount: 0
    }
  }

// hardcoded user id
  async componentDidMount() {
    const entries = await getAllEntries(1);
    entries.reverse();
    this.setState({
      entries: entries
    });
    //console.log(this.state.entries)
  }

  addEntry = async (event) => {
    event.preventDefault();
    
    await createEntry(1);
    const entries = await getAllEntries(1);
    entries.reverse();
    this.setState({
      entries: entries
    });
  }

  render(){


    const allEntries = this.state.entries ? this.state.entries.map((entry) => {
      let id = entry.id;
      return (
        <div key={entry.id} className='journal-entry'>
          <h1>{entry.date}</h1>
          <div className='entry-container'>
          <Food foods={entry.food} userId={1} entryId={id}/>
          <Exercise exercises={entry.exercises} userId={1} entryId={id}/>

          </div>
          <h3>Total calories for the day: {entry.total_amount}</h3>
        </div>
      )
    }): null;

    return(
      <div>
        <button onClick={this.addEntry}>Add Entry</button>
        {allEntries}
      </div>
    )
  }
}

export default JournalEntry;