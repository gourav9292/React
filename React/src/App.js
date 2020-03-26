import { Box, Button, Container, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth } from './public/actions/userActions';
import Dashboard from './public/screens/Dashboard';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// App render
export default function App() {
  const isLogin = useSelector(state => state).user.loggedIn
  return isLogin ? <Dashboard /> : <Login />
}

// Login form
export const Login = () => {
  const classes = useStyles();
  const [values, setValues] = useState({ email: '', password: '' });
  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }
  const validUser = useSelector(state => state).user.validUser;
  const dispatch = useDispatch();
  const validate = () => {
    if (values.email === validUser.username && values.password === validUser.password) {
      dispatch(setAuth(true))
    } else {
      alert("Error")
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            onChange={handleInputChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={validate}
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Default : hruday@gmail.com hruday123 '}
        </Typography>
      </Box>
    </Container>
  );
}
