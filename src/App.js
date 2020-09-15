import React, { Component } from 'react';
import AddTask from './components/add-todo';
import TodoUI from './components/todo-ui';
import CompletedTodoUI from './components/completed-todos';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      completedTodos: []
      // checked: false,
      // allUncheckedUnchecked: false
    };
  }

  addTodo = (newTask) => {
    newTask.id = Math.floor(Math.random() * 1000);
    newTask.isChecked = false;
    if (newTask.id !== this.state.todos.id) {
      // console.log(newTask.id);
      // const todos = this.state.todos.map(item => {

      // })
      // const check = this.state.checked;
      let newTodos = [...this.state.todos, newTask];
      this.setState({
        // state.todos.isChecked = !state.todos.isChecked;
        todos: newTodos 
      })
      // console.log(newTodos);
    }
    
    else {
      return null;
    }
  };
  

  deleteTask = () => {
    // console.log(id)
    // const taskLeft = this.state.todos.filter((todo) => {
    //   if (todo.isChecked === false) {
    //     todo.isChecked = true
    //   }
    //   else {
    //     todo.isChecked = false;
    //   }
    //   // todo.isChecked = this.handleCheckUncheck
    //   return todo.isChecked !== true;
    // });
    // this.setState({
    //   todos: taskLeft,
    // });
    // console.log(taskLeft);
    const taskLeft = this.state.todos.filter(todo => {
      return todo.isChecked !== true;
    });
    this.setState({
      todos: taskLeft
    })
  };

  toggleCheckbox = (delTask,event) => {
    console.log(event);
    if (delTask.isChecked === false) {
      delTask.isChecked = true;
      // this.state.todos.pop(delTask);
      // this.state.completedTodos.push(delTask);
      const taskLeft = this.state.todos.filter(todo => {
        return todo.isChecked !== true;
      });
      this.setState({
        todos: taskLeft
      })

      let newCompletedTodos = [...this.state.completedTodos, delTask];
      this.setState({
        // state.todos.isChecked = !state.todos.isChecked;
        completedTodos: newCompletedTodos 
      })

      // console.log(this.state.todos);
      // console.log(this.state.completedTodos);

    } else {
      delTask.isChecked = false;

      // const completedTaskLeft = this.state.completedTodos.filter(todo => {
      //   return todo.isChecked === true;
      // });
      // this.setState({
      //   completedTodos: completedTaskLeft
      // })
    }
  };

  completedToggleCheckbox = (delTask) => {
    if (delTask.isChecked === true) {
      delTask.isChecked = false;
      // this.state.todos.pop(delTask);
      // this.state.completedTodos.push(delTask);
      // const taskLeft = this.state.todos.filter(todo => {
      //   return todo.isChecked !== true;
      // });
      // this.setState({
      //   todos: taskLeft
      // })
      const completedTaskLeft = this.state.completedTodos.filter(todo => {
        return todo.isChecked === true;
      });
      this.setState({
        completedTodos: completedTaskLeft
      })

      let todoLeft = [...this.state.todos, delTask];
      this.setState({
        // state.todos.isChecked = !state.todos.isChecked;
        todos: todoLeft 
      })

      // console.log(this.state.todos);
      // console.log(this.state.completedTodos);

    } else {
      delTask.isChecked = true;
      // let todoLeft = [...this.state.todos, delTask];
      // this.setState({
      //   // state.todos.isChecked = !state.todos.isChecked;
      //   todos: todoLeft 
      // })

      // const completedTaskLeft = this.state.completedTodos.filter(todo => {
      //   return todo.isChecked === true;
      // });
      // this.setState({
      //   completedTodos: completedTaskLeft
      // })
    }

  }

  handleCheckUncheck = (e, id) => {
    
    let itemId = e.target.id;
    let checked = e.target.checked;
    // this.setState((prevState) => {
    //   let { todos, allUnchecked } = prevState;
    //   if (itemId === "check-uncheck-all") {
    //     allUnchecked = checked;
    //     todos = todos.map((item) => ({ ...item, isChecked: checked }));
    //     console.log(todos)
    //   } else {
    //     todos = todos.map((item) =>
    //       item.id === itemId ? { ...item, isChecked: checked } : item
    //     );
    //     allUnchecked = todos.every((item) => item.isChecked);
    //     console.log(todos);
    //   }
    //   return { todos, allUnchecked };
    this.setState({ checked: !this.state.checked });
    const todoChecks = this.state.todos.map((itemChecks) => {
      // this.setState({ checked: !this.state.checked });
      // if (itemChecks.id === id) {
        return { ...itemChecks, isChecked: e.target.checked };  
      // }
      
      // return itemChecks.isChecked = e.target.checked;
    });
    console.log(e.target.checked);
    console.log(todoChecks)
    
  }

  checkUncheckAll = (e) => {
    // let checked = e.target.checked;
    let checkboxName = e.target.name;
    if (checkboxName === 'check-uncheck-all') {
      // let todosChecked = this.state.todos.map(todo => {
      //   return todo.isChecked = checked;
      // })
      this.setState({ allUncheckedUnchecked: !this.state.allUncheckedUnchecked});
      // console.log(checked);
    }
 
      // this.setState({ allUncheckedUnchecked: !this.state.allUncheckedUnchecked });
   
    
    // 
    // const checkUncheck = this.state.todos.map((todo) => {
    //   if (todo.isChecked === false) {
    //     return (todo.isChecked = true);
    //   } else {
    //     return (todo.isChecked = false);
    //   }
    // });
    // this.setState({ todos: checkUncheck });
  };


  render() {
    return (
      <div className="App">
        <h2 className="" id="task-header">
          Task Scheduler
        </h2>
        <AddTask addTodo={this.addTodo} />
        <TodoUI
          todos={this.state.todos}
          deleteTask={this.deleteTask}
          toggleCheckbox={this.toggleCheckbox}
          handleCheckUncheck={this.handleCheckUncheck}
          checked={this.state.checked}
          allUncheckedUnchecked={this.state.allUncheckedUnchecked}
          checkUncheckAll={this.checkUncheckAll}
        />
        <CompletedTodoUI
          completedTodos={this.state.completedTodos}
          completedToggleCheckbox={this.completedToggleCheckbox}
        />
      </div>
    );
  }
}


export default App;
