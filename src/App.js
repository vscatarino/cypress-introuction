import React from 'react';
import Login from './views/login-view/Login'
import TaskList from './views/task-list-view/TaskList'
import './App.css'

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact={true} component={Login}/>
        <Route path={'/tasks'} component={TaskList}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
