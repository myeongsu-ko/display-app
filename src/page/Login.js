import { makeStyles } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { HandleSHowHeader, showHeaderContext } from '../App';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor:'#007bff',
        height: '700px',
      },
    paper: {
        display:'flex',
        alignItems:'center',
     
    }
    }));

const Login = () => {
    const classes = useStyles();
    const showHeader = useContext(showHeaderContext);
    const makeshow = useContext(HandleSHowHeader);
    
    useEffect(()=>{
        showHeader && makeshow();

        return () => {
            !showHeader && makeshow();
        }
    })
  
    return (
        <div className={classes.root}>
            <Container maxWidth="sm">
                <Typography component="div" style={{display:'flex', flexDirection:'column' ,backgroundColor: 'white', height: '400px', marginTop:50,borderRadius:'10px 10px 10px 10px'}} >
                    <div style={{borderRadius:'10px 10px 0px 0px',backgroundColor:'#f0f4fa',fontSize:'40px',textAlign:'center', marginBottom:20}}>Login</div>
                    <p style={{marginLeft:10, marginBottom:-5}}>Email</p>
                    <div style={{}}><TextField style={{marginLeft:10,width:'500px'}} defaultValue="Enter email address" variant="outlined"/></div>
                    <p style={{marginLeft:10,marginBottom:-5}}>Password</p>
                    <div><TextField style={{marginLeft:10,width:'500px'}} labal="Enter password" variant="outlined" type="password"/></div>
                    <div><FormControlLabel style={{marginLeft:10}} label="Remember password" control={<Checkbox color="primary" />} labelPlacement="end"/></div>
                    <div style={{display:'flex', marginRight:5,justifyContent:"space-between"}}><div><Link to="/forget" style={{color:'inherit' }}>Forgot Password?</Link></div><Button variant="contained" color="primary">Login</Button></div>
                    <div style={{height:'100%' ,textAlign:'center', backgroundColor:'f0f4fa',marginTop:5}}><Link to="/sign" style={{color:'inherit' }}>Need an account? Sign up!</Link></div>
                </Typography>
             </Container>
        </div>
    );
};

export default Login;