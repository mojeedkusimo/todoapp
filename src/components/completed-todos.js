import React from 'react'
import {
            Container, Row, Col, Button, Form, FormGroup, Input, Label,
            ListGroup, ListGroupItem,ListGroupItemHeading
        } from "reactstrap";

const completedTodoUI = ({
  completedTodos,
  deleteTask,
  completedToggleCheckbox,
  allCheckedUnchecked,
  checkUncheckAll,
  checked,
  handleCheckUncheck,
}) => {
    let completedArray = completedTodos.length;
  const taskCompleted = completedTodos.length ? (
    completedTodos.map((todo) => {
      let newTodoDate = new Date(todo.date);
      newTodoDate = newTodoDate.toDateString();
      // if (newTodoDate === curr_date) {
      return (
        //   todo.isChecked ? (
            <ListGroupItem className="my-tasks" key={todo.id}>
            <ListGroupItemHeading>{newTodoDate}</ListGroupItemHeading>
            <div>
              <Form className="todo-item">
                <FormGroup check>
                  <Input
                    type="checkbox"
                    id={todo.id}
                    onChange={() => completedToggleCheckbox(todo)}
                    // checked={todo.isChecked}
                  />{" "}
                </FormGroup>
                <p>{todo.task}</p>
                <p>{todo.time}</p>
              </Form>
              {/* <p>{todo.date}</p> */}
            </div>
          </ListGroupItem>
        //   ) : (
        //       "No task completed"
        //   )
        // <div className="list-groups">
        // </div>
      );
      // }
    })
  ) : (
""
  );

  return (
    <div className="task-list">
<Container>
  <Row>
    <Col xs="12" md={{ size: 6, offset: 3 }}>
      <div>
        <h3 id="schedule">{completedTodos.length ? "Completed Todos" : null}</h3>
      </div>
    </Col>
  </Row>
  <Row>
    <Col xs="12" md={{ size: 6, offset: 3 }}>
      <ListGroup>{taskCompleted}</ListGroup>
    </Col>
  </Row>
  {/* <Row>
    <Col xs="12" md={{ size: 6, offset: 3 }} className="select-all">
      {todos.length ? (
        <Form>
          <FormGroup row>
            <Col xs={8}>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    id="check-uncheck-all"
                    checked={allCheckedUnchecked}
                    onChange={checkUncheckAll}
                  />
                  <span value="selectUnselectAll">
                    Select/Unselect All
                  </span>
                </Label>
              </FormGroup>
            </Col>
            <Col xs={2}>
              <Button color="danger" onClick={deleteTask} id="delete">
                Delete
              </Button>
            </Col>
          </FormGroup>
        </Form>
      ) : null}
    </Col>
  </Row> */}
</Container>
</div>
  );
};

export default completedTodoUI;