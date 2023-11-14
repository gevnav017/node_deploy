import React, { useState, useEffect } from "react";
import Axios from "axios";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/api/settings/projects")
      .then((res) => res)
      .then((data) => setProjects(data.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Street</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Zipcode</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects &&
            projects.map((project) => (
              <TableRow
                key={project.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{project.street}</TableCell>
                <TableCell align="left">{project.city}</TableCell>
                <TableCell align="left">{project.zipcode}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Projects;
