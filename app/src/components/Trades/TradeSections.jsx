import React, { useState, useEffect } from "react";
import Axios from "axios";

import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const TradeSections = ({ selectedTrade }) => {
  const [openItemsModal, setOpenItemsModal] = useState(false);
  const [value, setValue] = useState(0);
  const [laborFields, setLaborFields] = useState([]);
  const [materialFields, setMaterialFields] = useState([]);

  useEffect(() => {
    Axios.post(
      "http://localhost:8080/api/trade-labor",
      {
        tradeId: selectedTrade.id,
      },
      {
        headers: { "Content-Type": "application/JSON" },
      }
    )
      .then((res) => res)
      .then((data) => setLaborFields(data.data))
      .catch((err) => console.log(err));

    Axios.post(
      "http://localhost:8080/api/trade-material",
      {
        tradeId: selectedTrade.id,
      },
      {
        headers: { "Content-Type": "application/JSON" },
      }
    )
      .then((res) => res)
      .then((data) => setMaterialFields(data.data))
      .catch((err) => console.log(err));
  }, [selectedTrade]);

  const handleMoreInfo = (e) => {
    setOpenItemsModal(true);
  };

  const handleSelectedProduct = (item) => {
    console.log(item);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TAX_RATE = 0.07;

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  function priceRow(qty, unit) {
    return qty * unit;
  }

  function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }

  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }

  const rows = [
    createRow("Paperclips (Box)", 100, 1.15),
    createRow("Paper (Case)", 10, 45.99),
    createRow("Waste Basket", 2, 17.99),
  ];

  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Labor & Services" />
            <Tab label="Product & Materials" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={3}>
                    Details
                  </TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Desc</TableCell>
                  <TableCell align="right">Qty.</TableCell>
                  <TableCell align="right">Unit</TableCell>
                  <TableCell align="right">Sum</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {laborFields &&
                  laborFields.map((laborField) => (
                    <TableRow key={laborField.id}>
                      <TableCell>{laborField.tradeField}</TableCell>
                      <TableCell align="right">{laborField.qty}</TableCell>
                      <TableCell align="right">40</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  ))}
                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={2}>Subtotal</TableCell>
                  <TableCell align="right">
                    {ccyFormat(invoiceSubtotal)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tax</TableCell>
                  <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                    0
                  )} %`}</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={3}>
                    Details
                  </TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Desc</TableCell>
                  <TableCell align="right">Qty.</TableCell>
                  <TableCell align="right">Unit</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {materialFields &&
                  materialFields.map((materialField) => (
                    <TableRow key={materialField.id}>
                      <TableCell>{materialField.tradeField}</TableCell>
                      <TableCell align="right">{materialField.qty}</TableCell>
                      <TableCell align="right">40</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  ))}
                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={2}>Subtotal</TableCell>
                  <TableCell align="right">
                    {ccyFormat(invoiceSubtotal)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tax</TableCell>
                  <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                    0
                  )} %`}</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Grid container spacing={2} sx={{ py: 3 }}>
            {materialFields &&
              materialFields.map((materialField) => (
                <Grid
                  key={materialField.id}
                  item
                  xs={12}
                  md={4}
                  onClick={() => handleSelectedProduct(materialField)}
                >
                  <Card>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="data:image/jpeg;base64,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"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Miele
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" onClick={handleMoreInfo}>
                        Info
                      </Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </TabPanel>
      </Box>

      <Dialog
        open={openItemsModal}
        onClose={() => setOpenItemsModal(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Items</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpenItemsModal(false)}>
            Disagree
          </Button>
          <Button onClick={() => setOpenItemsModal(false)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TradeSections;
