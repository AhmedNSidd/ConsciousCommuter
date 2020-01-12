import React from 'react'
import './styles.css'
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
import Fade from 'react-reveal/Fade'

function goal() {
    return (
        <div className="Goals">
        <fade>
        <div className = 'frontText'>
          <h1 className="frontHead">Tell us a bit about yourself!</h1>
          <p className="frontSub">How people get to work is sometimes a matter of choice; they enjoy the walk, or they like to drive. In many other cases, however, financial circumstances, distance to work, reasonable access to public transit infrastructure, or the need for work-life balance can make certain modes of transportation to work almost a necessity over others. This app is meant only to encourage and inform :)</p>
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
    render() {
      const { selected } = this.state;
      return (
        <div className="Goals">
        <Fade>
        <div className = 'frontText'>
          <h1 className="frontHead">Tell us a bit about yourself!</h1>
          <p className="frontSub">How people get to work is sometimes a matter of choice; they enjoy the walk, or they like to drive. In many other cases, however, financial circumstances, distance to work, reasonable access to public transit infrastructure, or the need for work-life balance can make certain modes of transportation to work almost a necessity over others. This app is meant only to encourage and inform :)</p>
        </div>
        <FormControl component="fieldset" name="commute-goal">
          <RadioGroup onChange={this.handleChange} value={selected}>
            <FormControlLabel
              value="0"
              control={<Radio />}
              label="<0km/week"
            />
            <FormControlLabel 
              value="20" 
              control={<Radio />} 
              label="<20km/week" />

            <FormControlLabel
              value="50"
              control={<Radio />}
              label="<50km/week"
            />

<FormControlLabel
              value="100"
              control={<Radio />}
              label="<100km/week"
            />
          </RadioGroup>
        </FormControl>
        </Fade>
  </div>
      );
    }
  }