import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Button, Grid, IconButton, Paper } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

import NFTcard from '../NFT/NFTcard';
import NFTcarousel from '../NFT/NFTcarousel';

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
    position: 'relative',
    width: '100%',
    height: '20rem',
    zIndex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: 'none',
    boxShadow: 'none',
  },
  media: {
    height: 500,
  },
  overlay: {
    position: 'center',
    paddingTop: '5rem',
    color: '#2A363B',
  },
  title: {
    fontSize: 70,
    fontFamily: 'Poppins',
    fontWeight: 700,
    lineHeight: 1.1,
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1,
  },
  linkStyle: {
    textDecoration: 'none',
    paddingRight: 10,
  },
  wrapper: {
    background:
      'linear-gradient(135deg, #99B898 0%, #FECEAB 70%, #FF847F 100%)',
  },
  buttonStyle: {
    color: '#2A363B',
    opacity: 0.7,
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 400,
    textTransform: 'none',
    boxShadow: 'none',
    backgroundColor: 0,
    borderColor: 0,
    padding: 0,
  },
  grid: {},
});

function Home() {
  const classes = useStyles();

  return (
    <Paper className={classes.wrapper}>
      <Paper className={classes.root}>
        <Typography className={classes.overlay}>
          <Typography className={classes.title}>NFTR.</Typography>
          <Typography className={classes.subtitle}>
            Create and collect NFTs for university and clubs
          </Typography>
          <Typography className={classes.subtitle}>
            <Link className={classes.linkStyle} to='clubs'>
              <Button className={classes.buttonStyle}>
                <KeyboardArrowRightIcon size='100px' />
                start checking out our clubs now...
              </Button>
            </Link>
          </Typography>
        </Typography>
      </Paper>
      <Grid item container className={classes.grid} direction='row' spacing={1}>
        <Grid container xs={false} sm={3} xl={4} />
        <Grid xs={12} sm={6} xl={4}>
          <NFTcarousel />
        </Grid>
        <Grid container xs={false} sm={3} xl={4} />
      </Grid>
    </Paper>
  );
}

export default Home;
