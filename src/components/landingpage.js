  import React, { Component } from 'react'
  import { Container, Row, Col, Button, Form, FormGroup, Input } from "reactstrap";

  class LandingPage extends Component {
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
          <h1 className='text-center'>Todo App</h1>
          <h3 className='text-center m-4'>Hi there! Please choose an option below</h3>
            <Row>
              <Col xs="12" md={{ size: 6, offset: 3 }}>
                <Form 
                // onSubmit={this.handleSubmit}
                >
                  <FormGroup row>
                      <Col xs="4" className="form-columns text-right">
                      <Button id="add-todo" color="success" onClick={() => {
                        this.props.history.push('/todoapp/login');
                      }}>
                          Login
                      </Button>
                      </Col>
                      <Col xs="4" className="form-columns">
                      <Button id="add-todo" color="success" onClick={() => {
                        this.props.history.push('/todoapp/signup');
                      }}>
                        Signup
                      </Button>
                      </Col>
                      <Col xs="4" className="form-columns">
                      <Button id="add-todo" color="danger" onClick={() => {
                        this.props.history.push('/todoapp/mytodos');
                      }}>
                       MyTodos
                      </Button>
                      </Col>
                  </FormGroup>
                  {/* <FormGroup row>
                    <Col xs="5" className="form-columns">
                      <Button id="add-todo" color="success">
                        Add Task
                      </Button>
                    </Col>
                  </FormGroup> */}
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }

  export default LandingPage;