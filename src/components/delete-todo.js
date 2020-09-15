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