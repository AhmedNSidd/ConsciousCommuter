import React, { useState, useEffect } from 'react';
import { View } from 'react';
import { VictoryPie } from 'victory';
import Cards from '../DataPage/cards'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const graphicColor = ['#388087', '#6fb3b8', '#badfe7']; // Colors
const wantedGraphicData = [
  { x: "bike", y: 40 },
  { x: "walk", y: 20 },
  { x: "bus", y: 100 },
  { x: "car", y: 70 },
  ] // Data that we want to display
const defaultGraphicData = [{ y: 0 }, { y: 0 },{ y: 0 }, { y: 100 }]; // Data used to make the animate prop work

export default function Piechart() {
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
    <div>
      <VictoryPie
        animate={{ easing: 'exp', duration: '4500' }}
        data={graphicData}
        width={250}
        height={250}
        colorScale={["#008f68", "#6DB65B", "#4AAE9B", "#EFBB35"]}
        innerRadius={50}/>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
  </div>
  );
}