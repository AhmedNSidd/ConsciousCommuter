import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useHistory, withRouter} from 'react-router-dom';
import Header from './Frontpage/header'
import Frontpage from './Frontpage/frontpage'
import Datapage from './DataPage/datapage'
import Trips from './TripPage/trippage'
import Login from './Frontpage/login';
import Register from './Frontpage/register';
import Goals from './Frontpage/goals';


export default class App extends React.Component {
  render(){
    return(
      <div className="App">
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <div>
        <Header/>
        <Switch>
            <Route exact component={withRouter(Frontpage)} path="/" />
            <Route exact component={withRouter(Datapage)} path="/datapage" />
            <Route exact component={withRouter(Register)} path="/register" /> 
            <Route exact component={withRouter(Login)} path="/login" />  
            <Route exact component={withRouter(Goals)} path="/goals" /> 
            <Route exact component={withRouter(Trips)} path="/trippage" />     
        </Switch>
      </div>
      </Router>
    </div>
  );
 }
}
