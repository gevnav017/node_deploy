import React, { useState, useEffect } from "react";
import Axios from "axios";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Trades = () => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/api/settings/trades")
      .then((res) => res)
      .then((data) => setTrades(data.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Trade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trades &&
            trades.map((trade) => (
              <TableRow
                key={trade.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{trade.tradeName}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Trades;
