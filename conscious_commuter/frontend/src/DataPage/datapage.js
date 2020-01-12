import React from 'react'
import '../styles.css'
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link, Switch, useHistory, withRouter } from 'react-router-dom';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Piechart from '../Viz/piechart'
import Stacked from '../Viz/stackedArea'
import Progresschart from '../Viz/progresschart'
import Card from './cards'
import Fade from 'react-reveal/Fade';
import Delay from 'react-delay';

import {
    VictoryBar,
    VictoryChart,
    VictoryLine,
    VictoryPie,
    VictoryStack,
    VictoryGroup,
    VictoryArea,
    VictoryPortal,
    VictoryScatter
  } from "victory";
  

export default class trippage extends React.Component{
    render(){
    return(
    <div className="Trip">
            <div className = 'dataText'>
              <h2 className="dataTitle">Your Data</h2>
            </div>
          <div class="parent-wrapper">
    <div class="parent">
            <Fade>
            <div class="child">
            <img src = { require('../Images/bicycle.png')}></img> 
            <p className = "miniTitle">Cycling</p>
            <figcaption> Kg of GHG Saved </figcaption>
            </div></Fade>
            <Delay wait = {1500}>
            <Fade>
            <div class="child">
            <img src ={require('../Images/carpool.png')}></img>
            <p className = "miniTitle">Carpooling</p>
            <figcaption> Kg of GHG Saved </figcaption></div>
            </Fade>
            </Delay>
            <Delay wait = {2500}>
            <Fade>
            <div class="child">
            <img src={ require('../Images/car.png') }></img>
            <p className = "miniTitle">Driving</p>
            <figcaption> Kg of GHG Spent</figcaption></div>
            </Fade>
            </Delay>
            <Delay wait = {3500}>
            <Fade>
            <div class="child">
            <img src ={require('../Images/bus.png')}></img>
            <p className = "miniTitle">Bussing</p>
            <figcaption> Kg of GHG Saved </figcaption></div>
            </Fade>
            </Delay>
            <Delay wait = {4300}>
            <Fade>
            <div class="child">
            <img src ={require('../Images/walk.png')}></img>
            <p className = "miniTitle">Walking</p>
            <figcaption> Kg of GHG Saved </figcaption></div>
            </Fade>
            </Delay>
          </div>
          </div>
            <div className = 'col-list'>
              <section className ="module-module-module col-2">
            <Piechart />
            <Progresschart/>
            <Stacked />
            </section>
            </div>
    </div>
    )
    }
}
