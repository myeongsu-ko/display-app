import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { HandleSHowHeader, showHeaderContext } from '../../App';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor:'#007bff',
        height: '800px',
      },
    }));

const Sign = () => {

    const classes = useStyles();
    const showhandle = useContext(showHeaderContext);
    const makehandle = useContext(HandleSHowHeader);

    useEffect(()=>{
        showhandle && makehandle();
        return ()=>{
            !showhandle && makehandle();
        }
    })

    return (
        <div className={classes.root}>
            <Container maxWidth="sm">
                <Typography component="div" style={{display:'flex', flexDirection:'column' ,backgroundColor: 'white', height: '500px', marginTop:50,borderRadius:'10px 10px 10px 10px'}} >
                    <Grid container spacing={2}>
                        <Grid style={{marginLeft:8,textAlign:'center',backgroundColor:'#f0f4fa',borderRadius:'10px 10px 0px 0px', width:'552px',height:'100px'}}><p style={{marginTop:30 ,fontSize:'30px'}}>Create Account</p></Grid>
                        <Grid item xs={6}>
                        <p style={{marginLeft:10, marginBottom:3, fontSize:'12px'}}>Frist Name</p>
                            <div style={{}}><TextField style={{marginLeft:10}} placeholder="Enter first name" variant="outlined"/></div>
                        </Grid>
                        <Grid item xs={6}>
                        <p style={{marginLeft:10, marginBottom:3, fontSize:'12px'}}>Last name</p>
                            <div style={{}}><TextField style={{marginLeft:10}} placeholder="Enter last name" variant="outlined"/></div>
                        </Grid>
                        <Grid item xs={12}>
                            <p style={{marginLeft:10, marginBottom:3, fontSize:'12px'}}>Email</p>
                            <div style={{}}><TextField style={{marginLeft:10,width:'500px'}} placeholder="Enter email address" variant="outlined"/></div>
                        </Grid>
                        <Grid item xs={6}>
                            <p style={{marginLeft:10, marginBottom:3, fontSize:'12px'}}>Password</p>
                            <div style={{}}><TextField style={{marginLeft:10}} type="password" placeholder="Password" variant="outlined"/></div>
                        </Grid>
                        <Grid item xs={6}>
                            <p style={{marginLeft:10, marginBottom:3, fontSize:'12px'}}>Confirm Password</p>
                            <div style={{}}><TextField style={{marginLeft:10}} type="password" placeholder="Confirm Password" variant="outlined"/></div>
                        </Grid>
                        <Grid style={{marginLeft:8,textAlign:'center', marginTop:63,backgroundColor:'#f0f4fa',width:'552px',height:'30px',borderRadius:'0px 0px 10px 10px',fontSize:'12px',paddingTop:5,color:'blue'}}><Link style={{textDecoration: 'none',color:'#007bff'}} to='/login'>Have an account? Go to login</Link></Grid>
                    </Grid>
                </Typography>
             </Container>
        </div>
    );
};

export default Sign;