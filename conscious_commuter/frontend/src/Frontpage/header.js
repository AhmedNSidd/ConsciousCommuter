import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {BrowserRouter as Router, Route, Link, useHistory, withRouter} from 'react-router-dom';
import '../styles.css';
import Cookies from 'universal-cookie';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const cookies = new Cookies();
  let auth = cookies.get('user') === undefined ? false: true
  const [setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    cookies.remove('user');
    window.location.href = '/'
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#57ba98' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <Link to='/' className="nav-link" href="#"> <img src={ require('../Images/cc.png') } style ={{height: '70px', backgroundColor: '#57ba98'}}/> <span className="sr-only"></span></Link>
          </Typography>
          {auth && (<Link to='/datapage' className="nav-link" href="#"> Dashboard <span className="sr-only"></span></Link>)}
          {!auth && (<Link to='/login' className="nav-link" href="#"> Login <span className="sr-only"></span></Link>)}
          {auth && (<Link to='/trippage' className="nav-link" href="#"> My Trips <span className="sr-only"></span></Link>)}
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}