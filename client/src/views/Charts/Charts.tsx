import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'
// import HomeStyle from './HomeStyle';

import { Typography } from '@material-ui/core';

const Charts = () => {
  // const classes = HomeStyle();

  const [chartData, setChartData] = useState([])
  const fetchData = async () => {
    const response = await fetch('http://localhost:4001/api/charts', {method: 'POST', body: JSON.stringify({days: 99})})
    if (!response.ok) {
      throw new Error('Data could not be fetched!')
    } else {
      return response.json()
    }
  }
  useEffect(() => {
    fetchData()
      .then((res) => {
        const values = res.result.data.datasets[0].data
        const labels = res.result.data.labels
        const preparedData = labels.map((label, index) => ({name: label, value: values[index]}))
        setChartData(preparedData)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [])

  return (
    <>
      {chartData &&
        <LineChart width={1000} height={600} data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 100]} />
          <Tooltip />
          <Legend />
        </LineChart>
      }
    </>
  );
};

export default Charts;
