import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { HandleSHowHeader, showHeaderContext } from '../../App';
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
        height: '800px',
      },
    }));


const Forger = () => {
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
                <Typography component="div" style={{display:'flex', flexDirection:'column' ,backgroundColor: 'white', height: '400px', marginTop:50,borderRadius:'10px 10px 10px 10px'}} >
                    <div style={{height:'50px',borderRadius:'10px 10px 0px 0px',backgroundColor:'#f0f4fa',fontSize:'30px',textAlign:'center',paddingTop:'30px'}}>Password Recovery</div>
                    <p style={{marginLeft:10, marginBottom:-5, marginTop:50,fontSize:'80%',color:'#6c757d'}}>Enter your email a`ddress and we will send you a link to reset your password.</p>
                    <p style={{marginLeft:10, marginBottom:-5,fontSize:'80%'}}>Email</p>
                    <div style={{}}><TextField style={{marginLeft:10,width:'500px',marginTop:5}} placeholder="Enter email address" variant="outlined"/></div>
                    <div style={{marginTop:50,display:'flex', marginRight:10,justifyContent:"space-between"}}><Link to="/login" style={{marginLeft:5,marginTop:5,fontSize:"80%",textDecoration: 'none',color:'#007bff'}}>Return to login</Link><Button variant="contained" color="primary">Rsset Password</Button></div>
                    <div style={{height:'20px' ,textAlign:'center', backgroundColor:'#f0f4fa',marginTop:72,borderRadius:'0px 0px 10px 10px'}}><Link to="/sign" style={{fontSize:"80%",textDecoration: 'none',color:'#007bff'}}>Need an account? Sign up!</Link></div>
                </Typography>
             </Container>
        </div>
    );
};

export default Forger;
