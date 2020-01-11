import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useHistory, withRouter} from 'react-router-dom';
import Header from './header'
import Frontpage from './frontpage'
import Datapage from './datapage'
import Trippage from './trippage'
import Login from './login';
import Register from './register';


export default class App extends React.Component {
  render(){
    return(
      <div className="App">
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <div>
        <Switch>
            <Route exact component={withRouter(Frontpage)} path="/" />      
        </Switch>
      </div>
      </Router>
    </div>
  );
 }
}
