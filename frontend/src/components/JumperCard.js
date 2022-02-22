import React from 'react';

function JumperCard(props) {

  let jumperEntry = props.postsData.posts.map((val, key) => {
    return (
      <p key={key} className="card-title"><a href={"#post-" + val.id} className="">{val.post_title}</a></p>
    )
  })

  return (
    <div className='jumperEntries'>
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">Posts:</h5>
          {jumperEntry}
        </div>
      </div>
    </div>
  );


}
export default JumperCard;







