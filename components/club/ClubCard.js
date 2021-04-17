import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box, CardActionArea, CardMedia, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    backgroundColor: '#f5eacf',
    borderRadius: 5,
  },
  media: {
    width: '100%',
    height: '5rem',
    position: 'relative',
    borderRadius: 3,
  },
  mediawrapper: {
    padding: '0 0.5rem 0.5rem 0.5rem',
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 700,
    color: '#2A363B',
  },
});

export default function ClubCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={8} sm={4}>
      <Card className={classes.card}>
        <CardActionArea href={'/clubs/' + props.name}>
          <CardContent>
            <Typography className={classes.text}>{props.name}</Typography>
          </CardContent>
          <Box className={classes.mediawrapper}>
            <CardMedia className={classes.media} image={props.image} />
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  );
}