import React from 'react';
import { Container, Row } from 'react-bootstrap';
import DataAndState from './DataAndState';

class Posts extends DataAndState {
  
  render() {
    let post = this.state.posts.map((val, key) => {
      return (
        <div id={"post-" + val.id} key={key}>
          <h1>{val.post_title}</h1>
          <p>{val.post_content}</p>
        </div>
      )
    })

    return (
      <div className='posts'>
        {post}
      </div>
    );
  }

  
}
export default Posts;

