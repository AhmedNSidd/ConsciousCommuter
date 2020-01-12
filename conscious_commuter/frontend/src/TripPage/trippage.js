import React from 'react'
import '../styles.css'
import Table from './table';
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import TripModal from './tripmodal'
import { BrowserRouter as Router, Route, Link, Switch, useHistory, withRouter } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const API_URL = 'http://localhost:8000';

const cookies = new Cookies();
const user_id = cookies.get('user');
const url = `${API_URL}/api/trips/${user_id}/`;

export default class trippage extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            trips: []
        }
    }

    render() {
        // fetch data from a url endpoint
        axios.get(url).then((response) => {
            this.setState({trips:response['data']['user_trips']});
        });
        if (this.state.trips.length == 0) {
            return <h1>Loading</h1>
        }
    return(
    <div className="Trip" style={{paddingTop:"100px"}}>
            <Table trips={this.state.trips}/>
    </div>
    )
    }
}