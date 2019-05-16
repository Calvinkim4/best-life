import React from 'react';
import Food from '../Food/Food';
import Exercise from '../Exercise/Exercise';

import { getAllEntries, createEntry, deleteEntry  } from '../../services/entryApi';

import './JournalEntry.css';

class JournalEntry extends React.Component{
  constructor(){
    super();
    this.state = {
      entries: [],
      foods: [],
      exercises: [],
      calorie_amount: 0,
      userId: 0
    }
  }

  async componentDidMount() {
    const entries = await getAllEntries(this.props.userId);
    await entries.reverse();
    this.setState({
      entries: entries,
      userId: this.props.userId
    });
  }

  addEntry = async (event) => {
    event.preventDefault();

    await createEntry(this.state.userId);
    const entries = await getAllEntries(this.state.userId);
    await entries.reverse();
    this.setState({
      entries: entries
    });
  }

  onDeleteClick = async (event) => {
    event.preventDefault();
    const id = event.target.value;
    await deleteEntry(this.state.userId, id);
    const allEntries = await getAllEntries(this.state.userId);
      this.setState({
        entries: allEntries
      })
  }

  render(){

    const allEntries = this.state.entries ? this.state.entries.map((entry) => {
      let id = entry.id;
      return (
        <div key={entry.id} className='journal-entry'>
          <h1>{entry.date}</h1>
          <div className='entry-container'>
          <Food foods={entry.food} userId={this.state.userId} entryId={id}/>
          <Exercise exercises={entry.exercises} userId={this.state.userId} entryId={id}/>

          </div>
          <h3>Total calories for the day: {entry.total_amount}</h3>
          <button value={entry.id} onClick={this.onDeleteClick}>Delete</button>
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
