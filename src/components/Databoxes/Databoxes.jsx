import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Databoxes.module.css';

const Databoxes = (props) => {
        
    // if (!confirmed) {
    //     return 'Loading...';
    //   }
    console.log(props)
    if (!props.data.confirmed) {
        return 'Loading...';
      }
        let confirmed = props.data.confirmed;
        let recovered = props.data.recovered;
        let deaths = props.data.deaths;
        let lastUpdate = props.data.lastupdated;
    return (
        <div className={styles.container}>
             <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
        <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Infected
        </Typography>
        <Typography variant="h5" component="h2">
          <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          Number of active cases of COVID-19.
        </Typography>
      </CardContent>
      </Grid>
      <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
        <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Recovered
        </Typography>
        <Typography variant="h5" component="h2">
          <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          Number of recovered cases of COVID-19.
        </Typography>
      </CardContent>
      </Grid>
      <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
        <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Deaths
        </Typography>
        <Typography variant="h5" component="h2">
          <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          Number of Deaths.
        </Typography>
      </CardContent>
      </Grid>
      </Grid>
      </div>
        // <h1> {props.data.confirmed.value}</h1>
        // <h1> {recovered} </h1>
        // <h1> {deaths} </h1>
        // <h1> {lastUpdate} </h1>
    )
}

export default Databoxes;