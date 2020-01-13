import React, { useState, useEffect } from 'react';
import { View } from 'react';
import Cards from '../DataPage/cards'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slide from 'react-reveal/Slide';

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


const graphicColor = ["#008f68", "#6DB65B", "#4AAE9B", "#EFBB35"]; // Colors
const wantedGraphicData = [{ y: 10 }, { y: 50 }, { y: 40 }]; // Data that we want to display
const defaultGraphicData = [{ y: 0 }, { y: 0 }, { y: 100 }]; // Data used to make the animate prop work

export default function Stacked() {
  const [graphicData, setGraphicData] = useState(defaultGraphicData);

  useEffect(() => {
    setGraphicData(wantedGraphicData);
  }, []);

  const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  const classes = useStyles();

  return (
    <div style = {{left: '-20px'}}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <Slide bottom>
        <VictoryChart scale={{ x: "time" }} width={1050} height={350} style = {{left: '300px'}}>
          <VictoryStack colorScale={["#008f68", "#6DB65B", "#4AAE9B", "#EFBB35"]}>
            <VictoryGroup
              data={[
                { x: new Date(2019, 12, 1), y: 2 },
                { x: new Date(2019, 11, 1), y: 3 },
                { x: new Date(2019, 10, 1), y: 5 },
                { x: new Date(2019, 9, 1), y: 4 }
              ]}
            >
              <VictoryArea/>
            </VictoryGroup>
            <VictoryGroup
              data={[
                { x: new Date(2019, 12, 1), y: 4 },
                { x: new Date(2019, 11, 1), y: 3 },
                { x: new Date(2019, 10, 1), y: 2 },
                { x: new Date(2019, 9, 1), y: 5 }
              ]}
            >
              <VictoryArea/>
            </VictoryGroup>
            <VictoryGroup
              data={[
                { x: new Date(2019, 12, 1), y: 3 },
                { x: new Date(2019, 11, 1), y: 1 },
                { x: new Date(2019, 10, 1), y: 4 },
                { x: new Date(2019, 9, 1), y: 2 }
              ]}
            >
              <VictoryArea/>
            </VictoryGroup>
          </VictoryStack>
        </VictoryChart>
        </Slide>
        </div>
  );
}