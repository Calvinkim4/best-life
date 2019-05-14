import React from 'react'

class NewJournalEntry extends React.Component{
  render(){
    return(
      <div>
        <form className='new-entry-form' onSubmit={this.props.signIn}>
        <label className='new-food' htmlFor='food'>
          Food: 
          <input className='new-food' type='text' name='food'/>
          <input className='new-food-cals' type='text' name='food'/>
        </label>
        <label className='new-exercise' htmlFor='exercise'>
          Exercise: 
          <input className='new-exercise' type='text' name='exercise' />
          <input className='new-exercise-cals' type='text' name='exercise' />
        </label>
        <button className='login-btn'type='submit'>Add New Post</button>
      </form>
      </div>
    )
  }
}

export default NewJournalEntry;