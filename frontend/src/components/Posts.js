import React from 'react';
import DataAndState from './DataAndState';

class Posts extends DataAndState {
  
  render() {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('search');
    const filterPosts = (posts, query) => {
      if (!query) {
        return posts;
      }

      let filteredPosts = []
      posts.filter((post) => {
        const postTitle = post.post_title.toLowerCase();

        if (postTitle.includes(query.toLowerCase())) {
          filteredPosts.push(post)
        }
      });

      if (filteredPosts.length == 0) {
        filteredPosts.push({ id: "0", post_title: "", post_content: "Nothing matched your search request.."})
      }

      return filteredPosts
    };
    
    if(this.state.posts.length == 0) {
      return (
        <div className="noposts m-3">
          <h1>No Posts in Database</h1>
          <p>Go to /backend to add Posts..</p>
        </div>
      )
      
    }
    else {

      let searchText = () => {
        if(query) {
          return <p>Search results:</p>
        }
        else {
          return null
        }
      }

      let posts = filterPosts(this.state.posts, query).map((val, key) => {
        return (
          <div id={"post-" + val.id} key={key}>
            <h1>{val.post_title}</h1>
            <p>{val.post_content}</p>
          </div>
        )
      })

      return (
       <div className="posts m-2">
         {searchText()}
         {posts}
       </div> 
      )
    }
    
  }

  
}
export default Posts;

