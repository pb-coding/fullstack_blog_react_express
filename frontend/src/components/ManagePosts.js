import React, { useState, useEffect } from 'react';
import { deleteRequest, editRequest, insertRequest, fetchFromAPI } from '../api'


function ManagePosts(props) {
  const [postsData, setPostsData] = useState({ posts: [] });
  const [contentUpdate, setContentUpdate] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');

  useEffect(() => {


    fetchFromAPI(setPostsData, "/api/posts/get", "posts")


  }, []);



  if (postsData.posts.length === 0) {
    var editPosts = <p className="mt-3 fs-6">No Posts in Database..</p>

  }
  else {
    var editPosts = postsData.posts.map((val, key) => {
      return (
        <div className="post mt-2" key={key}>
          <h2>{val.post_title}</h2>
          <p>Posted on:{new Date(Date.parse(val.timestamp)).toLocaleString()}</p>
          <p>{val.post_content}</p>
          <textarea id="tb-update-post-content" className="form-control" name='contentUpdate' value={contentUpdate} onChange={event => setContentUpdate(event.target.value)} placeholder='Update Content' ></textarea>
          <button className='btn btn-outline-warning btn-small my-2 me-2' onClick={async () => {
            let data = {}
            data.contentUpdate = contentUpdate
            const result = await editRequest(`/api/posts/update/${val.id}`, data)
            if (result.status != 200) alert("Edit request failed.")
            else if (result != null) fetchFromAPI(setPostsData, "/api/posts/get", "posts")
            setContentUpdate('')
          }}>Edit</button>
          <button className='btn btn-outline-danger btn-small my-2 me-2' onClick={async () => { 
            const result = await deleteRequest(`/api/posts/delete/${val.id}`)
            if (result.status != 200) alert("Delete request failed.")
            else if (result != null) fetchFromAPI(setPostsData, "/api/posts/get", "posts")
          }}>Delete</button>
        </div>
      )
    })
  }

  return (
    <div className={props.className}>
      <h1>Manage Posts</h1>
      {editPosts}

      <h3>Write Post</h3>
      <textarea id="tb-post-title" className="form-control" name='setPostTitle' placeholder='Enter Post Title' value={postTitle} onChange={event => setPostTitle(event.target.value)}></textarea>
      <br></br>
      <textarea id="tb-post-content" className="form-control" name='setPostContent' placeholder='Enter Post Content' value={postContent} onChange={event => setPostContent(event.target.value)} ></textarea>
      <button className='btn btn-outline-success btn-small my-2 me-2' variant="primary" onClick={async () => {
          let data = {}
          data.setPostTitle = postTitle
          data.setPostContent = postContent
          const result = await insertRequest('/api/posts/insert', data)
          if (result.status != 200) alert("Insert request failed.")
          else if (result != null) fetchFromAPI(setPostsData, "/api/posts/get", "posts")
          setPostTitle('')
          setPostContent('')
        }}>Add</button>
      <br /><br />
    </div>
  )

}
export default ManagePosts;

