import React from 'react'
import '../styles.css'
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link, Switch, useHistory, withRouter } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import Piechart from '../Viz/piechart'
import Stacked from '../Viz/stackedArea'
import Progresschart from '../Viz/progresschart'
import Card from './cards'

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
            <div className = 'frontText'>
              <h2 className="frontHead">Your Data</h2>
            </div>
            <div className = 'col-list'>
              <section className ="module-module-module col-2">
            <Piechart />
            <Stacked />
            </section>
            </div>
<Progresschart />
<VictoryPie
                colorScale={["#008f68", "#6DB65B", "#4AAE9B", "#EFBB35"]}
                innerRadius={70}
                data={[
                    { x: "bike", y: 40 },
                    { x: "walk", y: 20 },
                    { x: "bus", y: 100 },
                    { x: "car", y: 70 },
                    ]}
            />


    </div>
    )
    }
}