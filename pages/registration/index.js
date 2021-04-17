import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, Paper, Typography } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';
import TextField from '@material-ui/core/TextField';
import { Field, Form } from 'react-final-form';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 25,
    zIndex: 1,
    height: '100%',
    backgroundColor: '#f5eacf',
    margin: '5rem',
  },
  form: {
    zIndex: 1,
    height: '100%',
    background: 'none',
    boxShadow: 'none',
    margin: '1rem',
  },
  background: {
    position: 'static',
    height: '100rem',
    zIndex: 0,
    background:
      'linear-gradient(135deg, #99B898 0%, #FECEAB 40%, #FF847F 100%)',
  },
  title: {
    fontSize: '2rem',
    fontFamily: 'Poppins',
    fontWeight: 700,
    lineHeight: 1.1,
    color: '#2A363B',
    margin: '3rem 3rem',
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1,
    margin: '0 0 1rem 0 ',
  },
  button: {
    color: '#FECEAB',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 600,
    textTransform: 'none',
    backgroundColor: '#FF847C',
    boxShadow: 'none',
    margin: '4rem 0 0 0',
    '&:hover': {
      backgroundColor: 'rgb(7, 177, 77, 0.42)',
    },
  },
  link: {
    textDecoration: 'none',
  },
}));

function LogInPage(props) {
  const classes = useStyles();

  const [StudentID, setStudentID] = useState('');
  const [DestinationAddress, setDestinationAddress] = useState('');

  const handleChangeStudentID = (e) => {
    setStudentID(e.target.value);
  };
  const handleChangeDestinationAddress = (e) => {
    setDestinationAddress(e.target.value);
  };

  const onLogin = async (e) => {
    const res = await fetch('/api/register', {
      body: JSON.stringify({
        StudentID,
        DestinationAddress,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
  };

  return (
    <Box className={classes.background}>
      <Grow in={true} timeout={1000}>
        <Grid container>
          <Grid item xs={false} sm={3} xl={4} />
          <Grid item xs={12} sm={6} xl={4}>
            <Card className={classes.root}>
              <Form
                onSubmit={onLogin}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <Paper className={classes.form}>
                      <Grid
                        container
                        justify='center'
                        alignContent='center'
                        direction='column'
                        spacing={1}
                      >
                        <Typography className={classes.title}>
                          Log in first!
                        </Typography>
                        <Typography className={classes.subtitle}>
                          To see your NFTs enter in...
                        </Typography>

                        <Grid item xs={10}>
                          <Field
                            fullWidth
                            required
                            name='StudentID'
                            value={StudentID}
                            onChange={handleChangeStudentID}
                            component={TextField}
                            type='text'
                            label='Student ID'
                            color='secondary'
                          />
                        </Grid>
                        <Grid item xs={10}>
                          <Field
                            fullWidth
                            required
                            name='DestinationAddress'
                            value={DestinationAddress}
                            onChange={handleChangeDestinationAddress}
                            component={TextField}
                            type='text'
                            label='Destination Address'
                            color='secondary'
                          />
                        </Grid>

                        <Grid item xs={10}>
                          <Grid container justify='center'>
                            <Link href='profile'>
                              <a className={classes.link}>
                                <Button
                                  className={classes.button}
                                  variant='contained'
                                  color='secondary'
                                  type='submit'
                                  onClick={props.setLogIn}
                                >
                                  Login
                                </Button>
                              </a>
                            </Link>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </form>
                )}
              />
            </Card>
          </Grid>
          <Grid xs={false} sm={3} xl={4} />
        </Grid>
      </Grow>
    </Box>
  );
}
export default LogInPage;