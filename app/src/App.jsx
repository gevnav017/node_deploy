import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import ProjectSpecs from "../components/ProjectSpecs";
import BudgetLineItems from "../components/BudgetLineItems";
import Trades from "../components/Trades/Trades";
import Settings from "../components/Settings";
import Movies from "../components/Movies";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

function App() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Budget
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Dashboard
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    to="/project-specs"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Project Specs
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    to="/budget-line-items"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Budget Line Items
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    to="/trades"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Trades
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    to="/settings"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Settings
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Budget
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Dashboard
                </Link>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                <Link
                  to="/project-specs"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Project Specs
                </Link>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                <Link
                  to="/budget-line-items"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Budget Line Items
                </Link>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                <Link
                  to="/trades"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Trades
                </Link>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                <Link
                  to="/movies"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Movies
                </Link>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                <Link
                  to="/settings"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Settings
                </Link>
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="G" src="" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-specs" element={<ProjectSpecs />} />
        <Route path="/budget-line-items" element={<BudgetLineItems />} />
        <Route path="/trades" element={<Trades />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
