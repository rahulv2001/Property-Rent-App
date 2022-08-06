import * as React from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import { Typography, AppBar, CssBaseline, Toolbar } from "@mui/material";
// import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import useStyles from "./styles.js";

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <BusinessIcon className={classes.icon} />
          <Typography variant="h6">Estatery</Typography>
          <LogoutIcon className={classes.log} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
