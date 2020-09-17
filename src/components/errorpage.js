import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";

class ErrorPage extends Component {

  render() {

    return (
      <div className="input-fields">
        <Container className='text-center'>
        <h1>I am sorry the Page you looking for does not exist</h1>
        <h3>Please go back to the <Link to='/todoapp/'>Landingpage</Link></h3>
        </Container>
      </div>
    );
  }
}

export default ErrorPage;