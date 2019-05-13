import React from 'react';

class Stats extends React.Component{
  render(){
    return(
      <div className='stats'>
      <h1>These are your stats:</h1>
      <h3>Current Weight: </h3>
      <h3>Goal Weight: </h3>
      <h3>Calorie Limit: </h3>
      </div>
    )
  }
}

export default Stats