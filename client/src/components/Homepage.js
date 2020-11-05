import React, { Component } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, id, gender, age, caseStatus, plan) {
  return {
    name,
    id,
    gender,
    age,
    caseStatus,
    plan,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.id}</TableCell>
          <TableCell align="right">{row.gender}</TableCell>
          <TableCell align="right">{row.age}</TableCell>
          <TableCell align="right">{row.caseStatus}</TableCell>

        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Customer</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell align="right">Total plan ($)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                        <TableRow key={historyRow.date}>
                          <TableCell component="th" scope="row">
                            {historyRow.date}
                          </TableCell>
                          <TableCell>{historyRow.customerId}</TableCell>
                          <TableCell align="right">{historyRow.amount}</TableCell>
                          <TableCell align="right">
                            {Math.round(historyRow.amount * row.plan * 100) / 100}
                          </TableCell>
                        </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
        PropTypes.shape({
          amount: PropTypes.number.isRequired,
          customerId: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    plan: PropTypes.number.isRequired,
    caseStatus: PropTypes.number.isRequired,
  }).isRequired,
};

// const rawData =
//
//       `{
//         "id":"OHVB17801",
//         "name":"Katlyn Merriman",
//         "gender":"Female",
//         "age":"33",
//         "status history":{
//           "W":"2020/01/24 14:50:22",
//           "BAT":"2020/01/24 16:10:10",
//           "BAR":"2020/01/26 10:23:11",
//           "AMC":"2020/02/22 13:51:12"
//         },
//         "case status":"inactive",
//         "plan":"OHVB"
//       },
//       {
//         "id":"OHVB17802",
//         "name":"Gabriel King",
//         "gender":"Male",
//         "age":"54",
//         "status history":{
//           "W":"2020/02/01 10:11:21",
//           "BAT":"2020/02/01 15:02:58",
//           "BAR":"2020/02/04 11:11:11",
//           "DSS/G":"2020/02/15 09:20:22"
//         },
//         "case status":"inactive",
//         "plan":"OHVB"
//       },
//       {
//         "id":"OHVB17803",
//         "name":"Patricia Devries",
//         "gender":"Female",
//         "age":"62",
//         "status history":{
//           "W":"2020/08/17 16:17:22",
//           "BAT":"2020/08/19 15:45:22",
//           "BAR":"2020/08/22 12:33:10"
//         },
//         "case status":"active",
//         "plan":"OHVB"
//       },
//       {
//         "id":"OHVB17804",
//         "name":"Mauro Price",
//         "gender":"Male",
//         "age":"41",
//         "status history":{
//           "W":"2020/09/24 14:50:22",
//           "WAM":"2020/09/24 16:10:10",
//           "WPCF":"2020/09/26 10:23:11",
//           "BAT":"2020/09/26 16:10:10",
//           "BAR":"2020/09/27 10:23:11",
//           "AMC":"2020/10/22 13:51:12"
//         },
//         "case status":"inactive",
//         "plan":"OHVB"
//       },
//       {
//         "id":"OHVB17805",
//         "name":"Joseph C. Mahoney",
//         "gender":"Male",
//         "age":"45",
//         "status history":{
//           "W":"2020/09/24 14:53:12",
//           "WAM":"2020/09/24 16:52:20",
//           "WS":"2020/09/26 09:24:09",
//           "F":"2020/10/18 10:50:49"
//         },
//         "case status":"inactive",
//         "plan":"OHVB"
//       },
//       {
//         "id":"OHVB17806",
//         "name":"Lois A. Taylor",
//         "gender":"Female",
//         "age":"29",
//         "status history":{
//           "W":"2020/10/24 14:51:31",
//           "WAM":"2020/10/24 15:22:47",
//           "WPCF":"2020/10/25 09:07:36",
//           "WS":"2020/10/26 14:11:42",
//           "BAT":"2020/10/26 16:13:09"
//         },
//         "case status":"active",
//         "plan":"OHVB"
//       }`
//
// const data = JSON.parse(rawData);

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

class Homepage extends Component {
  render() {
    return (
      <div id="content" className="p-4 p-md-5 pt-5">
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">id</TableCell>
                <TableCell align="right">gender&nbsp;(g)</TableCell>
                <TableCell align="right">age&nbsp;(g)</TableCell>
                <TableCell align="right">caseStatus&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                  <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default Homepage;
