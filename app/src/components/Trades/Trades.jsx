import React, { useState, useEffect } from "react";
import Axios from "axios";
import TradeSections from "./TradeSections";

import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Trades = () => {
  const [trades, setTrades] = useState([]);
  const [selectedTrade, setSelectedTrade] = useState([]);

  useEffect(() => {
    Axios.get("http://44.225.165.236:8080/api/trades")
      .then((res) => res)
      .then((data) => setTrades(data.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSelectedTrade = (trade) => {
    setSelectedTrade(trade);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", py: 4 }}>
        <Box sx={{ overflow: "auto", minWidth: 200 }}>
          <Typography sx={{ p: 2 }}>15/55</Typography>
          <Divider />
          <List>
            {trades &&
              trades.map((trade) => (
                <ListItem key={trade.id} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      handleSelectedTrade(trade);
                    }}
                    sx={{
                      backgroundColor:
                        selectedTrade.id === trade.id ? "#1976d2" : "",
                      color: selectedTrade.id === trade.id ? "white" : "",
                      "&:hover": { color: "black" },
                    }}
                  >
                    <ListItemText primary={trade.tradeName} />
                  </ListItemButton>
                </ListItem>
              ))}
          </List>
        </Box>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {selectedTrade.id ? (
            <TradeSections selectedTrade={selectedTrade} />
          ) : (
            <Box sx={{ textAlign: "center" }}>
              Select a trade from the side menu
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Trades;
