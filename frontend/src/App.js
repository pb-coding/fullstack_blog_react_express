import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Button, Container, Row } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        setPostTitle: '',
        setPostContent: '',
        fetchData: [],
        contentUpdate: ''
      }
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value
    this.setState({
      [nam]: val
    })
  }

  handleChange2 = (event) => {
    this.setState({
      contentUpdate: event.target.value
    })
  }

  componentDidMount() {
  axios.get("/api/posts/get")
    .then((response) => {
      if (typeof(response.data) == "object") {
        this.setState({
          fetchData: response.data
      })
      }
    })
  }

  submit = () => {
    axios.post('/api/posts/insert', this.state)
      .then(() => { alert('success post') })
    console.log(this.state)
    document.location.reload();
  }

  delete = (id) => {
    if (window.confirm("Do you want to delete? ")) {
      axios.delete(`/api/posts/delete/${id}`)
      document.location.reload()
    }
  }

  edit = (id) => {
    axios.put(`/api/posts/update/${id}`, this.state)
    document.location.reload();
  }

  render() {
    console.log(this.state.fetchData);
    let post = this.state.fetchData.map((val, key) => {
      return (
        <React.Fragment>
          <span class="post">
            <h1>{val.post_title}</h1>
            <p>{val.post_content}</p>
            <input name='contentUpdate' onChange={this.handleChange2} placeholder='Update Content' ></input>
            <Button className='m-2' onClick={() => { this.edit(val.id) }}>Update</Button>
            <Button onClick={() => { this.delete(val.id) }}>Delete</Button>
          </span>
        </React.Fragment>
      )
    })

    return (
      <div className='App'>
        <h1>SickTechTips!</h1>
        <div className='form'>
          <input name='setPostTitle' placeholder='Enter Post Title' onChange={this.handleChange} />
          <input name='setPostContent' placeholder='Enter Content' onChange={this.handleChange} />
        </div>
        <Button className='my-2' variant="primary" onClick={this.submit}>Submit</Button> <br /><br />
        <Container>
          <Row>
            {post}
          </Row>
        </Container>
      </div>
    );
  }

  
}
export default App;

