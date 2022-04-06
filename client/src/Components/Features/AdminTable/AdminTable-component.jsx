import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { GetAll } from '../../../Services/User-Service';





export default function AdminTable() {
  const [users, setUsers] = useState({})
  useEffect(() => {
    GetAll()
      .then((data) => setUsers(data))
      .then((data) => console.log(users))
      .catch((err) => console.log(err))
  }, []);

  // function createData(Position, FirstName, Rank, Role) {
  //   return { Position, FirstName, Rank, Role };
  // }

  const rows = [];

  // users.forEach(user => {
  //   rows.push(createData(user.Position, user.FirstName, user.Rank, user.Role),)





    return (
      "mmm"
      // <TableContainer component={Paper}>
      //   <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      //     <TableHead>
      //       <TableRow>
      //         <TableCell>{users[0].Position} (100g serving)</TableCell>
      //         <TableCell align="right">Calories</TableCell>
      //         <TableCell align="right">Fat&nbsp;(g)</TableCell>
      //         <TableCell align="right">Carbs&nbsp;(g)</TableCell>
      //         <TableCell align="right">Protein&nbsp;(g)</TableCell>
      //       </TableRow>
      //     </TableHead>
      //     <TableBody>
      //       {rows.map((row) => (
      //         <TableRow
      //           key={row.name}
      //           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      //         >
      //           <TableCell component="th" scope="row">
      //             {row.name}
      //           </TableCell>
      //           <TableCell align="right">{row.Position}</TableCell>
      //           <TableCell align="right">{row.FirstName}</TableCell>
      //           <TableCell align="right">{row.Rank}</TableCell>
      //           <TableCell align="right">{row.Role}</TableCell>
      //         </TableRow>
      //       ))}
      //     </TableBody>
      //   </Table>
      // </TableContainer>
    );
  }


