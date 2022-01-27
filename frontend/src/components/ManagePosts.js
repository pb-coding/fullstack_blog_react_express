import React from 'react';
import DataAndState from './DataAndState';

class ManagePosts extends DataAndState {
    
  render() {

    let editPosts = this.state.posts.map((val, key) => {
      return (
        <React.Fragment key={key}>
          <div className="post mt-2">
            <h2>{val.post_title}</h2>
            <p>Posted on:{new Date(Date.parse(val.timestamp)).toLocaleString()}</p>
            <p>{val.post_content}</p>
            <textarea id="tb-update-post-content" className="form-control" name='contentUpdate' onChange={this.stateUIValueChanges} placeholder='Update Content' ></textarea>
            <button className='btn btn-outline-warning btn-small my-2 me-2' onClick={() => { this.edit(`/api/posts/update/${val.id}`) }}>Edit</button>
            <button className='btn btn-outline-danger btn-small my-2 me-2' onClick={() => { this.delete(`/api/posts/delete/${val.id}`) }}>Delete</button>
          </div>
        </React.Fragment>
      )
    })

    return (
      <div className="component-ManagePosts">
        <div className="create-entry">
          <h1>Write Post</h1>
          <textarea id="tb-post-title" className="form-control" name='setPostTitle' placeholder='Enter Post Title' onChange={this.stateUIValueChanges}></textarea>
          <br></br>
          <textarea id="tb-post-content" className="form-control" name='setPostContent' placeholder='Enter Post Content' onChange={this.stateUIValueChanges} ></textarea>
          <button className='btn btn-outline-success btn-small my-2 me-2' variant="primary" onClick={() => { this.insert('/api/posts/insert') }}>Submit</button>
          <br /><br />
        </div>
        <div className="edit-Posts">
          {editPosts}
        </div>
      </div>
    )
  }

  
}
export default ManagePosts;

