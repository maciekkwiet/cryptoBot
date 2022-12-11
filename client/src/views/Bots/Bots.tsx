import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useSocket } from 'socketio-hooks'
// import HomeStyle from './HomeStyle';

const Bots = () => {
  const [rows, setRows] = useState([])
  // const classes = HomeStyle();

  useSocket('NEW_BIG_MOVE', (data) => {
    setRows([...rows, {
      pair: data.tokenProp.pair,
      oldPrice: data.tokenProp.oldPrice,
      newPrice: data.tokenProp.newPrice,
      volume: data.tokenProp.volume,
      date: data.tokenProp.date,
      percentageChange: data.tokenProp.percentageChange,
    }])
  })

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Para</TableCell>
            <TableCell align="right">Stara cena</TableCell>
            <TableCell align="right">Nowa cena</TableCell>
            <TableCell align="right">Wolumen</TableCell>
            <TableCell align="right">Data</TableCell>
            <TableCell align="right">Zmiana procentowa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={`${row.pair}_${row.date}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.pair}</TableCell>
              <TableCell align="right">{row.oldPrice}</TableCell>
              <TableCell align="right">{row.newPrice}</TableCell>
              <TableCell align="right">{row.volume}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.percentageChange}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Bots
