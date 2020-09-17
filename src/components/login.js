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
    axios.post('https://still-waters-85911.herokuapp.com/api/login', data)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })

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
              <Form onSubmit={this.handleSubmit}>
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
                    <span>Don't have an account? <Link to='/signup'> Signup</Link></span>
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