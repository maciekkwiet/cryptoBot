import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'
// import HomeStyle from './HomeStyle';

import { TextField } from '@material-ui/core';
import Box from '@mui/material/Box';

const Charts = () => {
  // const classes = HomeStyle();

  const [chartData, setChartData] = useState([])
  const [numberOfDays, setNumberOfDays] = useState(30)
  const fetchData = async () => {
    const response = await fetch('http://localhost:4001/api/charts', {
      method: 'POST',
      body: JSON.stringify({days: numberOfDays}),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    if (!response.ok) {
      throw new Error('Data could not be fetched!')
    } else {
      return response.json()
    }
  }
  useEffect(() => {
    fetchData()
      .then((res) => {
        setChartData(res.result)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [numberOfDays])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number.isInteger(Number(event.target.value))) {
      setNumberOfDays(Number(event.target.value))
    }
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-name"
          label="Name"
          value={numberOfDays}
          onChange={handleChange}
        />
      </Box>
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
