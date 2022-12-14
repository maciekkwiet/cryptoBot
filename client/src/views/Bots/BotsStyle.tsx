import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

export const BotsStyles = makeStyles(theme => ({
  wrapper: { display: 'flex', flexDirection: 'column' },
  wrapperUserBox: { marginBottom: '2em' },
  wrapperItem: {
    display: 'flex',
    flexDirection: 'row',
    margin: '1em 3em',
    justifyContent: 'space-around',
  },

  wrapperItemColumn: {
    width: '40%',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  formWrapperInput: {
    width: '40%',
    marginRight: '1em',
    marginTop: '2em',
  },
  formWrapperText: {
    width: '60%',
    marginTop: '2em',
  },

  divider: {
    marginTop: '2em',
    backgroundColor: theme.palette.primary.main,
    height: '7em',
    [theme.breakpoints.down('sm')]: {
      height: '17em',
      marginLeft: '2em',
      marginRight: '2em',
    },
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

