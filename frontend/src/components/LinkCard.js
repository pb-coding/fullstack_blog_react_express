import React from 'react';

function LinkCard(props) {

  let jumperEntry = props.links.map((val, key) => {
    return (
      <p key={key} className="card-title"><a href={val.link} className="">{val.name}</a></p>
    )
  })

  return (
    <div className={props.className}>
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          {jumperEntry}
        </div>
      </div>
    </div>
  );



}
export default LinkCard;







