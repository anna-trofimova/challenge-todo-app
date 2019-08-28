import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import TodoList from './pages/TodoList';

class App extends Component {
  render() {
    return (
      <Router>
       <div className="App">
         <Switch>
           <Route path="/todos" exact component={TodoList}/>
         </Switch>
       </div>
      </Router>
    );
  }
}

export default App;
