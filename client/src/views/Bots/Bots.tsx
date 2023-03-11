import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useSocket } from 'socketio-hooks'
import { StyledTableRow } from './BotsStyle'
import { connect } from 'react-redux'
import addCoinPair from 'actions'

const Bots = (props) => {
  const { stateAll, addCoinPairAction, rows } = props

  useSocket('NEW_BIG_MOVE', (data) => {
    addCoinPairAction([{
      pair: data.tokenProp.pair,
      oldPrice: data.tokenProp.oldPrice,
      newPrice: data.tokenProp.newPrice,
      percentagePriceChange: data.tokenProp.percentagePriceChange,
      oldVolume: data.tokenProp.oldVolume,
      newVolume: data.tokenProp.newVolume,
      percentageVolumeChange: data.tokenProp.percentageVolumeChange,
      date: data.tokenProp.date,
    },
    ...rows])
  })

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 800 }}>
      <Table sx={{ minWidth: 1000 }} size="medium" stickyHeader aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Para</TableCell>
            <TableCell align="right">Stara cena</TableCell>
            <TableCell align="right">Nowa cena</TableCell>
            <TableCell align="right">Zmiana procentowa ceny</TableCell>
            <TableCell align="right">Stary wolumen</TableCell>
            <TableCell align="right">Nowy wolumen</TableCell>
            <TableCell align="right">Zmiana procentowa wolumenu</TableCell>
            <TableCell align="right">Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={`${row.pair}_${row.date}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.pair}</TableCell>
              <TableCell align="right">{row.oldPrice}</TableCell>
              <TableCell align="right">{row.newPrice}</TableCell>
              <TableCell align="right">{row.percentagePriceChange}</TableCell>
              <TableCell align="right">{row.oldVolume}</TableCell>
              <TableCell align="right">{row.newVolume}</TableCell>
              <TableCell align="right">{row.percentageVolumeChange}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const mapStateToProps = state => ({
  stateAll: state,
  rows: state?.coinPairs ?? [],
})

const mapDispatchToProps = dispatch => ({
  addCoinPairAction: (payload) => dispatch(addCoinPair(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Bots);
