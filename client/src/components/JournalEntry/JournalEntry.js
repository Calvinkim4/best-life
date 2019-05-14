import React from 'react';
import Food from '../Food/Food';
import Exercise from '../Exercise/Exercise';

import { getAllEntries, createEntry } from '../../services/entryApi';
import { getAllFood } from '../../services/foodApi';

import './JournalEntry.css';

class JournalEntry extends React.Component{
  constructor(){
    super();
    this.state = {
      entries: [],
      foods: [],
      exercises: []
    }
  }

// hardcoded user id
  async componentDidMount() {
    const entries = await getAllEntries(1);
    this.setState({
      entries: entries
    });
  }

  //create new entry
  async newEntry(){
    if(this.props.addEntry === true){
      const newEntry = await createEntry();
      this.state.entries.add(newEntry);
    }
    console.log(this.state.entries);
  }

  // async getAllFood(id) {
  //   const foods = await getAllFood(1, id);
  //   this.setState({
  //     food: foods
  //   })
  //   console.log(foods);
  // }

  render(){

    const allEntries = this.state.entries ? this.state.entries.map((entry, index) => {
      let id = entry.id;
      // this.getAllFood(id);
      return (
        <div className='journal-entry'>
          <h1>{entry.date}</h1>
          <div className='entry-container'>
          <Food foods={entry.food} />
          <Exercise  exercises={entry.exercises}/>
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