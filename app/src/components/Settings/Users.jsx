import React, { useState, useEffect } from "react";
import Axios from "axios";

import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { Grid, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Menu from "@mui/material/Menu";

const Users = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserSettings = Boolean(anchorEl);

  const handleOpenSettings = (event) => {
    console.log(event.currentTarget);
  };

  const [users, setUsers] = useState([]);
  const [openNewUserModal, setOpenNewUserModal] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:8080/api/settings/users")
      .then((res) => res)
      .then((data) => setUsers(data.data))
      .catch((err) => {
        console.log(err);
      });
  }, [openNewUserModal]);

  const handleAddUser = (e) => {
    e.preventDefault();

    const newUserInfo = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      role: e.target.role.value,
    };

    Axios.post(
      "http://localhost:8080/api/settings/users",
      {
        newUser: newUserInfo,
      },
      {
        "content-type": "application/JSON",
      }
    )
      .then((res) => res)
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });

    setOpenNewUserModal(false);
  };

  const handleEditUser = (e) => {
    console.log(e)

    setAnchorEl(false)
  }

  const handleDeleteUser = (e) => {
    console.log(e)

    setAnchorEl(false)
  }

  return (
    <>
      <Grid container sx={{ mb: 2, py: 1 }}>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: "right" }}>
          <Button
            variant="outlined"
            onClick={() => {
              setOpenNewUserModal(true);
            }}
          >
            <AddIcon />
            &nbsp;Add User
          </Button>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell colSpan={2}>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <TableRow
                  key={user.id}
                  hover
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{user.firstName}</TableCell>
                  <TableCell align="left">{user.lastName}</TableCell>
                  <TableCell align="left">{user.email}</TableCell>
                  <TableCell align="left">{user.role}</TableCell>
                  <TableCell align="left">
                    <MoreHorizIcon
                      sx={{ cursor: "pointer" }}
                      aria-controls={openUserSettings ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={openUserSettings ? "true" : undefined}
                      onClick={handleOpenSettings}
                    />
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={openUserSettings}
                      onClose={() => {setAnchorEl(null)}}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={() => {handleEditUser(user.id)}}>Edit</MenuItem>
                      <MenuItem onClick={() => {handleDeleteUser(user.id)}}>Delete</MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={openNewUserModal}
        onClose={() => {
          setOpenNewUserModal(false);
        }}
      >
        <DialogTitle>Add User</DialogTitle>
        <form onSubmit={handleAddUser}>
          <DialogContent sx={{ display: "grid", gap: 2 }}>
            <DialogContentText>
              To add a user, enter their information below.
            </DialogContentText>
            <TextField
              autoFocus
              label="First Name"
              name="firstName"
              type="text"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              label="Last Name"
              name="lastName"
              type="text"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              label="Email Address"
              name="email"
              type="email"
              fullWidth
              variant="standard"
              required
            />
            <FormControl fullWidth variant="standard">
              <InputLabel id="demo-simple-select-standard-label">
                Role
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                defaultValue="User"
                label="Role"
                name="role"
                required
              >
                <MenuItem value="User" selected>
                  User
                </MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setOpenNewUserModal(false);
              }}
            >
              Cancel
            </Button>
            <Button type="submit">Add User</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default Users;
