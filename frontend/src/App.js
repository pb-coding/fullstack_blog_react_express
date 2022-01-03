import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Button, Container, Card, Row } from 'react-bootstrap';

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
  axios.get("/api/get")
    .then((response) => {
      this.setState({
          fetchData: response.data
      })
    })
  }

  submit = () => {
    axios.post('/api/insert', this.state)
      .then(() => { alert('success post') })
    console.log(this.state)
    document.location.reload();
  }

  delete = (id) => {
    if (window.confirm("Do you want to delete? ")) {
      axios.delete(`/api/delete/${id}`)
      document.location.reload()
    }
  }

  edit = (id) => {
    axios.put(`/api/update/${id}`, this.state)
    document.location.reload();
  }

  render() {
    let card = this.state.fetchData.map((val, key) => {
      return (
        <React.Fragment>
          <Card style={{ width: '18rem' }} className='m-2'>
            <Card.Body>
              <Card.Title>{val.post_title}</Card.Title>
              <Card.Text>
                {val.post_content}
              </Card.Text>
              <input name='contentUpdate' onChange={this.handleChange2} placeholder='Update Content' ></input>
              <Button className='m-2' onClick={() => { this.edit(val.id) }}>Update</Button>
              <Button onClick={() => { this.delete(val.id) }}>Delete</Button>
            </Card.Body>
          </Card>
        </React.Fragment>
      )
    })

    return (
      <div className='App'>
        <h1>SickTechTips!!</h1>
        <div className='form'>
          <input name='setPostTitle' placeholder='Enter Post Title' onChange={this.handleChange} />
          <input name='setPostContent' placeholder='Enter Content' onChange={this.handleChange} />
        </div>
        <Button className='my-2' variant="primary" onClick={this.submit}>Submit</Button> <br /><br />
        <Container>
          <Row>
            {card}
          </Row>
        </Container>
      </div>
    );
  }

  
}
export default App;

