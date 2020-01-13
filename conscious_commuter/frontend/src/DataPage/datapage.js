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
import axios from 'axios';
import Cookies from 'universal-cookie';
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

const API_URL = 'http://localhost:8000';
  
var tripdat = 'empty'

export default class trippage extends React.Component{
  state = { selected: "credit",
            datatrip: "empty"
           };
    handleChange = ev => {
      this.setState({ selected: ev.target.value });
    };

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
     tripdat = trips;
    })
    }


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

    render(){
    
  if(tripdat === "empty"){
    return(
      <h1>Loading</h1>
    )
  }else{
    var bikeCO = 0;
    var bikekm = 0;
    var busCO = 0;
    var buskm = 0;
    var carCO = 0;
    var carC0 = 0;
    var carkm = 0;

    for (let i = 0; i < tripdat.length; i++) {
      console.log(tripdat[i])
    if(tripdat[i].mode_of_travel === 'bike'){
      console.log("YES BIKE")
      bikeCO = bikeCO + tripdat[i].carbon_footprint;
      bikekm = bikekm + tripdat[i].distance
    }else if(tripdat[i].mode_of_travel === 'bus'){
      console.log("YES BUS")
     busCO = busCO + tripdat[i].carbon_footprint;
     buskm = buskm + tripdat[i].distance
    console.log(busCO + tripdat[i].carbon_footprint);
    }else if(tripdat[i].mode_of_travel === 'petrolCar' || tripdat[i].mode_of_travel === 'diesalCar'){
      carCO = carCO + tripdat[i].carbon_footprint
      carkm = carkm + tripdat[i].distance
      console.log(carCO)
    }else{
      console.log(tripdat[i].mode_of_travel)
    }
  }
    return(
    <div className="Trip" style = {{textAlign: 'center', alignContent: 'center'}}>
            <div className = 'dataText'>
              <h2 className="dataTitle">Your Data</h2>
            </div>
          <div class="parent-wrapper">
    <div class="parent">
            <Fade style = {{marginLeft: '100px', padding: '3em'}}>
            <div class="child">
            <img src = { require('../Images/bicycle.png')}></img>
            <p className = "miniTitle">Cycling</p>
            <h3 className = "miniTitlesub">10.3</h3>
            <figcaption>&nbsp;&nbsp;&nbsp;&nbsp; Kg of GHG Saved &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</figcaption> 
            </div></Fade>
            <Delay wait = {1500}>
            <Fade>
            <div class="child">
            <img src ={require('../Images/carpool.png')}></img>
            <p className = "miniTitle">Carpooling</p>
            <h3 className = "miniTitlesub">{0}</h3>
            <figcaption>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kg of GHG Saved &nbsp;&nbsp;&nbsp;&nbsp;</figcaption></div>
            </Fade>
            </Delay>
            <Delay wait = {2500}>
            <Fade>
            <div class="child">
            <img src={ require('../Images/car.png') }></img>
            <p className = "miniTitle">Driving</p>
            <h3 className = "miniTitlesub">{34.5}</h3>
            {/*<h3 className = "miniTitlesub">{carCO}</h3>*/}
            <figcaption>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kg of GHG Spent &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</figcaption></div>
            </Fade>
            </Delay>
            <Delay wait = {3500}>
            <Fade>
            <div class="child">
            <img src ={require('../Images/bus.png')}></img>
            <p className = "miniTitle">Bussing</p>
            <h3 className = "miniTitlesub">{busCO}</h3>
            <figcaption>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kg of GHG Saved &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</figcaption></div>
            </Fade>
            </Delay>
            <Delay wait = {4300}>
            <Fade>
            <div class="child">
            <img src ={require('../Images/walk.png')}></img>
            <p className = "miniTitle">Walking</p>
            <h3 className = "miniTitlesub">{3.6}</h3>
            <figcaption>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kg of GHG Saved &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</figcaption></div>
            </Fade>
            </Delay>
          </div>
          </div>
            <div className = 'col-list'>
              <section className ="module-module-module col-2">
              <Delay wait = {6300}>
            <Piechart data = {tripdat} style = {{top: '100px'}}/>
            </Delay>
            <Delay wait = {6800}>
            <Progresschart style = {{marginTop: '300px'}}/>
            </Delay>
            <Delay wait = {7300} style = {{marginBottom: '100px'}}>
            <Stacked />
            </Delay>
            
            </section>
            </div>
        <Button size="small" color="primary">
          Learn More
        </Button>
    </div>
    )
  }
    }
}