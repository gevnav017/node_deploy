import React, { useState, useEffect } from "react";
import Axios from "axios";

import { Container, Grid, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const ProjectSpecs = () => {
  const [projectLocations, setProjectLocations] = useState([]);
  const [projectSizes, setProjectSizes] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/api/project-locations")
      .then((res) => res)
      .then((data) => setProjectLocations(data.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:8080/api/project-sizes")
      .then((res) => res)
      .then((data) => setProjectSizes(data.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ p: 3 }}>
      <Grid container sx={{ mb: 2, py: 1 }}>
        <Grid item xs={12} md={4}>
          
        </Grid>
        <Grid item xs={12} md={4}>
          
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: { md: "right" } }}>
          <Button variant="outlined">Add User</Button>
        </Grid>
      </Grid>

      <Card sx={{ my: 3 }}>
        <Grid container>
          <Grid item md={4}>
            <CardContent>
              <Typography>House sq ft:</Typography>
            </CardContent>
          </Grid>
          <Grid item md={4}>
            <CardContent>
              <Typography>ADU sq ft:</Typography>
            </CardContent>
          </Grid>
          <Grid item md={4}>
            <CardContent>
              <Typography>Garage sq ft:</Typography>
            </CardContent>
          </Grid>
          <Grid item md={4}>
            <CardContent>
              <Typography>Total sq ft:</Typography>
            </CardContent>
          </Grid>
          <Grid item md={4}>
            <CardContent>
              <Typography>Total w/ Garage and ADU sq ft:</Typography>
            </CardContent>
          </Grid>
          <Grid item md={4}>
            <CardContent>
              <Typography>Lote sq ft:</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Locations</Typography>
        </AccordionSummary>
        <AccordionDetails
        // sx={{
        //   display: "flex",
        //   justifyContent: "space-between",
        //   flexWrap: "wrap",
        // }}
        >
          <Grid container spacing={4}>
            {projectLocations &&
              projectLocations.map((location) => (
                <Grid item key={location.id}>
                  <TextField
                    label={location.location}
                    type="text"
                    variant="standard"
                  />
                </Grid>
              ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
        >
          <Typography>Sizes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={4}>
            {projectSizes &&
              projectSizes.map((size) => (
                <Grid item key={size.id}>
                  <TextField
                    label={size.sizeLocation}
                    type="number"
                    variant="standard"
                  />
                </Grid>
              ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
        >
          <Typography>Additional Specs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={4}>
            <Grid item>hvac</Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default ProjectSpecs;
