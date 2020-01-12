import React from 'react'
import '../styles.css'
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link, Switch, useHistory, withRouter } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import Cookies from 'universal-cookie';

const API_URL = 'http://localhost:8000';

function goal() {
    return (
        <div className="Goals">
        <fade>
        <div className = 'goalText'>
          <h3 className="goalHead">Tell us a biabout yourself!</h3>
          <p className="goalSub"> " How people get to work is sometimes a matter of choice; they enjoy the walk, or they like to drive. In many other cases, however, financial circumstances, distance to work, reasonable access to public transit infrastructure, or the need for work-life balance can make certain modes of transportation to work almost a necessity over others. This app is meant only to encourage and inform "</p>
        </div>
        </fade>
  </div>
    );
  }


export default class Goals extends React.Component {
    state = { selected: "credit" };
    handleChange = ev => {
      this.setState({ selected: ev.target.value });
    };

    //Submit email and password to backend
    handleSubmit = event => {
        event.preventDefault();
        const {selected} = this.state;
        const cookies = new Cookies();
        const user_id = cookies.get('user');
        const url = `${API_URL}/api/cf_goal/${user_id}/`;
        axios.post(url,{cf_goal: selected}).then(function(response) {
            window.location.href = "/datapage";
        });
    };
    render() {
      const { selected } = this.state;
      return (
        <div className="Goals">
        <Fade>
        <div className = 'goalText'>
          <h3 className="goalHead">Tell us a bit about yourself!</h3>
          <p className="goalSub"> " How people get to work is sometimes a matter of choice; they enjoy the walk, or they like to drive. In many other cases, however, financial circumstances, distance to work, reasonable access to public transit infrastructure, or the need for work-life balance can make certain modes of transportation to work almost a necessity over others. This app is meant only to encourage and inform "</p>
        </div>
        <form onSubmit={this.handleSubmit}>
            <FormControl component="fieldset" name="commute-goal">
              <RadioGroup onChange={this.handleChange} value={selected}>
                <FormControlLabel
                  value="0"
                  control={<Radio />}
                  label="The Conscious Consumer: 0kg of carbon emissions/week"
                />
                <FormControlLabel 
                  value="20" 
                  control={<Radio />} 
                  label="The Weary Consumer: 20kg of carbon emissions/week"/>

                <FormControlLabel
                  value="50"
                  control={<Radio />}
                  label="The Average Consumer: 50kg of carbon emissions/week"
                />

                <FormControlLabel
                  value="100"
                  control={<Radio />}
                  label="The Lax Consumer: 100kg of carbon emissions/week"
                />
              </RadioGroup>
            </FormControl>
            <Button
                className = 'submit' 
                children = 'Lets go!'
                type="submit"
                fullWidth
                variant="contained"
                color="primary">
                  Set Goal
              </Button>
        </form>

        </Fade>
  </div>
      );
    }
  }