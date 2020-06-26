import React,{useState} from 'react';
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
import ButtonRating from '../components/button-rating/buttonRating.component'
import _ from 'lodash'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const data=

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
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
        <TableCell align="right">{row.checkout_code}</TableCell>
        <TableCell>
        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
          Adresler Bax {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </TableCell>
        <TableCell align="right">
         <p>{row.buyer_address.city_name}</p>
         <p>{row.buyer_address.region_name}</p>
         <p>{row.buyer_address.village_name}</p>
        </TableCell>
        <TableCell align="right">{row.payment_type}</TableCell>
        <TableCell align="right">{row.price}</TableCell>
        <TableCell align="right"><ButtonRating style={{'width':'100%'}} name={row.status}/></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Magaza Adi</TableCell>
                    <TableCell>Magaza Adresi</TableCell>
                    <TableCell align="center">Mehsul Adi</TableCell>
                    <TableCell align="center">Mehsul Sayi</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.order_adresses.map((hr,i) => (
                    <TableRow key={i}>
                      <TableCell component="th" scope="row">
                        {hr.shop_name}
                      </TableCell>
                      <TableCell>{hr.shop_address.city_name}</TableCell>
                      <TableCell>{hr.shop_address.region_name}</TableCell>
                      <TableCell>{hr.shop_address.village_name}</TableCell>
                      <TableCell>{hr.shop_address.product_name}</TableCell>
                      <TableCell>{hr.shop_address.village_name}</TableCell>
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
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

export default function CollapsibleTable() {

 const [state, setState] = useState({
  data:[
  {
   checkout_code: 44545,
   buyer_address: {
     city_name: 'baki',
     region_name: "sefse",
     village_name: "sfesf"
   },
   payment_type: 0,
   price: 24,
   status:'awdaw',
   order_adresses: [
     {
       shop_name: "efsefse",
       shop_address:{
         city_name: 'baki',
         region_name: "sefse",
         village_name: "sfesf"
       },
       product_name: "sefsefesf",
       product_count: 2
     },
     {
       shop_name: "efsefse",
       shop_address:{
         city_name: 'baki',
         region_name: "sefse",
         village_name: "sfesf"
       },
       product_name: "sefsefesf",
       product_count: 2
     }
   ]
 },
 {
  checkout_code: 54545,
  buyer_address: {
    city_name: 'baki',
    region_name: "sefse",
    village_name: "sfesf"
  },
  payment_type: 0,
  price: 24,
  status:'awdaw',
  order_adresses: [
    {
      shop_name: "efsefse",
      shop_address:{
        city_name: 'baki',
        region_name: "sefse",
        village_name: "sfesf"
      },
      product_name: "sefsefesf",
      product_count: 2
    },
    {
      shop_name: "efsefse",
      shop_address:{
        city_name: 'baki',
        region_name: "sefse",
        village_name: "sfesf"
      },
      product_name: "sefsefesf",
      product_count: 2
    }
  ]
}
 ],
 editIDX:-1,
 columToSort:'',
 sortDirection:'asc'
})

const InverDirection={
 asc:'asc',
 desc:'desc'
};

 let handleSort = (columnName) => {
  setState(state=>({
   ...state,
   columToSort:columnName,
   sortDirection:state.columToSort===columnName
   ?InverDirection[state.columToSort]
   :'asc'
  }))
 }

const sorts={
   def:list=>_.orderBy(list,'')
}
  return (
    <TableContainer component={Paper}>
      <Table
       handleSort={handleSort} aria-label="collapsible table"
       // data={orderBy(state.data,state.columToSort,state.sortDirection)}
       >
        <TableHead>
          <TableRow>
            <TableCell onClick={() => handleSort('checkout_code')} align="center">Sifaris Kodu</TableCell>
            <TableCell align="center">Magaza Addresleri</TableCell>
            <TableCell align="center">Alici Addresi</TableCell>
            <TableCell align="center">Odeme Novu</TableCell>
            <TableCell align="center">Qiymet</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.data.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
