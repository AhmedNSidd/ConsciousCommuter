import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { green } from '@material-ui/core/colors';
import '../styles.css'
import axios from 'axios';
import {TransitionsModal} from '../registermodal'

const API_URL = 'http://localhost:8000';
var store = ''

function Copyright() {
  const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));  
  const classes = useStyles();
  store = classes;
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Conscious Commute
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


  export default class login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }
  
    handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }
  
    //Submit email and password to backend
  handleSubmit = event => {
        event.preventDefault();
        const {email, username, password} = this.state;
        const url = `${API_URL}/api/register_user/`;
        console.log(url + " " + email)
        console.log(axios.post(url,{
            username: username,
            password: password
        }));
  }
    
  render(){

  return (
    <Container component="main" maxWidth="xs" className = "auth">
      <CssBaseline />
      <div className={store.paper} >
        <Avatar className={store.avatar} style = {{marginTop: '30px'}} >
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={store.form} onSubmit={this.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            className = 'submit' 
            children = 'Lets go!'
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={store.submit}
          >
              Log in
            <Link to= '/datapage' href="/datapage"></Link> 
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/register" variant="body2">
                <Link className = 'login-button' to='/register'> Don't have an account? Sign up here! </Link>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
  }
}