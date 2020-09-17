import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Input } from "reactstrap";
import auth from './auth';
import { Link } from 'react-router-dom';

class Navbar extends Component {
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
        <Row>
          <Col xs='6'>
            <Link to='/' className='text-white'>Back to Landingpage</Link>
          </Col>
          <Col xs='6' className='text-right'>

            <Form onSubmit={() => {
                    auth.logout(() => {
                        this.props.history.push('/');
                    })
                }}>

                <button className='btn btn-success'>Logout</button>

            </Form>
          </Col>
        </Row>        
        </Container>
      </div>
    );
  }
}

export default Navbar;