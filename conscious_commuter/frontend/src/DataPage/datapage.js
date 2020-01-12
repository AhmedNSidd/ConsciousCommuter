import React from 'react'
import '../styles.css'
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link, Switch, useHistory, withRouter } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import Piechart from '../Viz/piechart'
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
              <h3 className="frontSub">super fun!</h3>
            </div>
            <Progresschart />
            <Piechart />
            <VictoryPie
            animate={{
                duration: 2000
              }}
                colorScale={["#008f68", "#6DB65B", "#4AAE9B", "#EFBB35"]}
                innerRadius={70}
                data={[
                    { x: "bike", y: 40 },
                    { x: "walk", y: 20 },
                    { x: "bus", y: 100 },
                    { x: "car", y: 70 },
                    ]}
            />

<VictoryChart scale={{ x: "time" }} width={400} height={400}>
          <VictoryStack colorScale="warm">
            <VictoryGroup
              data={[
                { x: new Date(1986, 1, 1), y: 2 },
                { x: new Date(1996, 1, 1), y: 3 },
                { x: new Date(2006, 1, 1), y: 5 },
                { x: new Date(2016, 1, 1), y: 4 }
              ]}
            >
              <VictoryArea/>
            </VictoryGroup>
            <VictoryGroup
              data={[
                { x: new Date(1986, 1, 1), y: 4 },
                { x: new Date(1996, 1, 1), y: 3 },
                { x: new Date(2006, 1, 1), y: 2 },
                { x: new Date(2016, 1, 1), y: 5 }
              ]}
            >
              <VictoryArea/>
            </VictoryGroup>
            <VictoryGroup
              data={[
                { x: new Date(1986, 1, 1), y: 3 },
                { x: new Date(1996, 1, 1), y: 1 },
                { x: new Date(2006, 1, 1), y: 4 },
                { x: new Date(2016, 1, 1), y: 2 }
              ]}
            >
              <VictoryArea/>
            </VictoryGroup>
          </VictoryStack>
        </VictoryChart>
    </div>
    )
    }
}