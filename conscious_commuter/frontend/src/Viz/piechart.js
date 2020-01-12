import React, { useState, useEffect } from 'react';
import { View } from 'react';
import { VictoryPie } from 'victory';

const graphicColor = ['#388087', '#6fb3b8', '#badfe7']; // Colors
const wantedGraphicData = [{ y: 10 }, { y: 50 }, { y: 40 }]; // Data that we want to display
const defaultGraphicData = [{ y: 0 }, { y: 0 }, { y: 100 }]; // Data used to make the animate prop work

export default function Piechart() {
  const [graphicData, setGraphicData] = useState(defaultGraphicData);

  useEffect(() => {
    setGraphicData(wantedGraphicData);
  }, []);

  return (
      <VictoryPie
        animate={{ easing: 'exp' }}
        data={graphicData}
        width={250}
        height={250}
        colorScale={graphicColor}
        innerRadius={50}
      />
  );
}