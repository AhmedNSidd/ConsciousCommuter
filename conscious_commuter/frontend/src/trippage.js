import React from 'react'
import './styles.css'
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link, Switch, useHistory, withRouter } from 'react-router-dom';


export default class trippage extends React.Component{
    render(){
    return(
    <div className="Trip">
            <div className = 'frontText'>
              <h2 className="frontHead">Log a Trip</h2>
              <h3 className="frontSub">super fun!</h3>
            </div>
    </div>
    )
    }
}