import React from 'react'
import '../styles.css'
import Table from './table';
import Map from './table'
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import TripModal from './tripmodal'
import { BrowserRouter as Router, Route, Link, Switch, useHistory, withRouter } from 'react-router-dom';


export default class trippage extends React.Component{
    render(){
    return(
    <div className="Trip" style={{paddingTop:"100px"}}>
            <Table/>
            <Map/>
    </div>
    )
    }
}
