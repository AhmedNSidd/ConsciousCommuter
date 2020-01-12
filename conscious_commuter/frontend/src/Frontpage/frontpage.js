import React from 'react'
import '../styles.css'
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link, Switch, useHistory, withRouter } from 'react-router-dom';
import { green } from '@material-ui/core/colors';

export default class frontpage extends React.Component {
    render(){
      return(
        <div className="Home">
            <div className = 'frontText'>
              <h1 className="frontHead"> Conscious Commute</h1>
              <h2 className="frontSub">Become aware of your commutes carbon footprint</h2>
              <Button variant="contained" color="secondary" style = {{marginTop: '20px', 'fontSize': '1.3em'}}>
              <Link to= '/register' id = 'Loginbutton' href="/register">Register</Link>
              </Button>
            </div>
      </div>
    );
   }
  }