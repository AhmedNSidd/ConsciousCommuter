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

var tripl = ''


export default class trippage extends React.Component{
    componentDidMount() {
        const cookies = new Cookies();
      const user_id = cookies.get('user');
      const url = `${API_URL}/api/get_user_info/${user_id}/`;
      var trips = '';
      axios.get(url).then(function(response) {
        var trips = response.data.user_data.trips
        console.log(trips)
       console.log( Array.from(trips).map((item,i) => item))
       console.log(trips[0].name)
       tripl = trips;
      })
      }


    render(){
    return(
    <div className="Trip" style={{paddingTop:"100px"}}>
            <Table triptrip = {tripl}/>

    </div>
    )
    }
}