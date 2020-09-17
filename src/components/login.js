import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Input } from "reactstrap";
import auth from './auth';
import { Link } from "react-router-dom";
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: ""
        // time: "",
        // isChecked: false
    };
  }

  handleChange = (e) => {
    this.setState({
      //set id for input field to be same as state properties above
      // grab the id of the target element and
      // update the state properties
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    const data = {
        [e.target.id]: e.target.value
    }
    // axios.post('http://localhost:7000/api/login', data)
    //     .then((res) => {
    //         console.log(res);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })

        // let options = {
        //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //     mode: 'no-cors', // no-cors, *cors, same-origin
        //     // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: 'include', // include, *same-origin, omit
        //     headers: {
        //       'Content-Type': 'application/json'
        //       // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     // redirect: 'follow', // manual, *follow, error
        //     referrerPolicy: 'origin-when-cross-origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //     body: JSON.stringify(data) // body data type must match "Content-Type" head
        // }

    // fetch('http://localhost:7000/api/login', options)
    // .then((response) => {response.json()})
    // .then((info) => {
    //     console.log(info);
    // }).catch((err) => {
    //     console.log(err);
    // })

    fetch('http://localhost:7000/api/login', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'include', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'origin-when-cross-origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" head

    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });

    // if (this.state.task === "" && this.state.time === "")
    // {
    //   return null;
    // }
    // else
    // {

    //   this.props.addTodo(this.state);
    //   this.setState({
    //     task: "",
    //     date: "",
    //     time: "",
    //   });
    // }
  };

  render() {
    // const { handleChange, handleSubmit, deleteTask } = this.props;
    // const deleteTodo = todos.map((todo) => {
    //   let todoDate = new Date(todo.date);
    //   todoDate = todoDate.getDate();
    //   return todoDate === curr_date ? "Today" : "Upcoming";
    // });

    return (
      <div className="input-fields">
        <Container>
        <h2 className='text-center'>Login</h2>
          <Row>
            <Col xs="12" md={{ size: 6, offset: 3 }}>
              <Form onSubmit={() => {
                  auth.login(() => {
                      this.props.history.push('/todoapp/mytodos')
                  });
              }}>
                <FormGroup row>
                  <Col xs="12" className="form-columns">
                    <Input
                      onChange={this.handleChange}
                      type="text"
                      id="email"
                      placeholder="Email address"
                      value={this.state.email}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs="12" className="form-columns">
                    <Input
                      onChange={this.handleChange}
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={this.state.password}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs="4" md='3' className="form-columns">
                    <Button id="add-todo" color="success">
                      Login
                    </Button>
                  </Col>
                  <Col xs="8" md='9' className="form-columns">
                    <span>Don't have an account? <Link to='/todoapp/signup'> Signup</Link></span>
                  </Col>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;