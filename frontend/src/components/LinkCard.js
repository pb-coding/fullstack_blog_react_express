import React from 'react';

class LinkCard extends React.Component {
  
  render(props) {
    let jumperEntry = this.props.links.map((val, key) => {
      return (
        <p key={key} className="card-title"><a href={val.link} className="">{val.name}</a></p>
      )
    })

    return (
      <div className='jumperEntries'>
        <div className="card shadow">
          <div className="card-body">
            <h5 className="card-title">Follow me on:</h5>
            {jumperEntry}
          </div>
        </div>
      </div>
    );
  }

  
}
export default LinkCard;


  
    
    
  

