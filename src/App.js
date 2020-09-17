import React, { Component } from 'react';
import Signup from './components/signup';
import Login from './components/login';
import LandingPage from './components/landingpage';
import MyTodos from './components/mytodos';
import ErrorPage from './components/errorpage';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/protectedroute';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        {/* <ProtectedRoute exact path='/MyTodos' component={Navbar} /> */}
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        {/* <Route exact path='/MyTodos' component={MyTodos} /> */}
        <ProtectedRoute exact path='/MyTodos' component={MyTodos} />
        <Route path='*' component={ErrorPage}/>
      </Switch>
      </div>
    );
  }
}


export default App;
