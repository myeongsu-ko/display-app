import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      paper: {
        padding: theme.spacing(2),
        //textAlign: 'center',
        color: 'white',
        height:'150px',
      },
    }));

const Main = () => {
    const classes = useStyles();

    return (
        <div style={{width:'100%'}}>
        <Toolbar />
        
        <h1>Dashboard</h1>
        <div style={{backgroundColor:'#e9ecef', height:'50px', marginBottom:10}}>Dashboard</div>
        <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper style={{backgroundColor:'blue'}} className={classes.paper}>
              <div style={{height:'55px', paddingTop:'45px'}}>
                  Primary Card
              </div>
              <hr/>
              <div style={{paddingTop:'10px'}}>view Detail</div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{backgroundColor:'orange'}} className={classes.paper}>
          <div style={{height:'55px', paddingTop:'45px'}}>
                  Warning Card
              </div>
              <hr/>
              <div style={{paddingTop:'10px'}}>view Detail</div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{backgroundColor:'green'}} className={classes.paper}>
          <div style={{height:'55px', paddingTop:'45px'}}>
                  Success Card
              </div>
              <hr/>
              <div style={{paddingTop:'10px'}}>view Detail</div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{backgroundColor:'red'}} className={classes.paper}>
          <div style={{height:'55px', paddingTop:'45px'}}>
                  Danger Card
              </div>
              <hr/>
              <div style={{paddingTop:'10px'}}>view Detail</div>
          </Paper>
        </Grid>
      </Grid>
        </div>
    );
};

export default Main;