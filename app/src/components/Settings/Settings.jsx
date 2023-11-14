import React, { useState, useEffect } from "react";
import Projects from "./Projects";
import Trades from "./Trades";
import Users from "./Users";

import { Container } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Settings = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, idx) => {
    setValue(idx);
  };

  return (
    <Container maxWidth="lg" sx={{ p: 3 }}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Projects" />
            <Tab label="Trades" />
            <Tab label="Users" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Projects />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Trades />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Users />
        </TabPanel>
      </Box>
    </Container>
  );
};

export default Settings;
