import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        task: "",
        date: "",
        time: "",
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
    if (this.state.task === "" && this.state.time === "")
    {
      return null;
    }
    else
    {

      this.props.addTodo(this.state);
      this.setState({
        task: "",
        date: "",
        time: "",
      });
    }
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
        <h2 className='text-center'>Signup</h2>
          <Row>
            <Col xs="12" md={{ size: 6, offset: 3 }}>
            <Form onSubmit={() => {
                    this.props.history.push('/login');
              }}>
                <FormGroup row>
                  <Col xs="12" className="form-columns">
                    <Input
                      onChange={this.handleChange}
                      type="text"
                      id="firstname"
                      placeholder="Firstname"
                      value={this.state.firstname}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs="12" className="form-columns">
                    <Input
                      onChange={this.handleChange}
                      type="text"
                      id="lastname"
                      placeholder="Lastname"
                      value={this.state.lastname}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs="12" className="form-columns">
                    <Input
                      onChange={this.handleChange}
                      type="email"
                      id="email"
                      placeholder="Email"
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
                  <Col xs="4" md="2" className="form-columns">
                    <Button id="add-todo" color="success">
                      Signup
                    </Button>
                  </Col>
                  <Col xs="8" md="10" className="form-columns">
                    <span>Already have an account? <Link to='/login'> Login</Link></span>
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

export default Signup;