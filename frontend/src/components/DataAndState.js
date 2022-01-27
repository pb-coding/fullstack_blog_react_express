import React from 'react';

class DataAndState extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        setPostTitle: '',
        setPostContent: '',
        posts: [],
        contentUpdate: '',
        navigation: [],
        setNavName: '',
        setNavLink: '',
        navNameUpdate: ''
      }
  }

  stateUIValueChanges = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({
      [nam]: val
    })
  }

  componentDidMount() {
    this.fetchFromAPI("/api/posts/get", "posts")
    this.fetchFromAPI("/api/navigation/get", "navigation")
  }

  fetchFromAPI = (url, nam) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        [nam]: data
      }, console.log("set state callback"))
    })
    .catch(error => console.error(error))
  }

  insert(url) {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(() => {
      document.location.reload()
    })
    .catch(error => {
      console.error(error)
    })
  }

  delete(url) {
    if (window.confirm("Do you want to delete? ")) {
      fetch(url, { method: 'DELETE'})
      .then(() => {
        document.location.reload()
      })
      .catch(error => alert(error))
    }
  }

  edit(url) {
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(this.state)
    })
    .then(() => { 
      document.location.reload()
    })
    .catch(error => console.error(error))
  } 
}
export default DataAndState;

