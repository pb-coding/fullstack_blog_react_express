import React from 'react';
import DataAndState from './DataAndState';

class JumperCard extends DataAndState {
  
  render() {
    let jumperEntry = this.state.posts.map((val, key) => {
      return (
        <p key={key} className="card-title"><a href={"#post-" + val.id} className="">{val.post_title}</a></p>
      )
    })

    return (
      <div className='jumperEntries'>
        <div className="card shadow">
          <div className="card-body">
            <h5 class="card-title">Posts:</h5>
            {jumperEntry}
          </div>
        </div>
      </div>
    );
  }

  
}
export default JumperCard;


  
    
    
  

