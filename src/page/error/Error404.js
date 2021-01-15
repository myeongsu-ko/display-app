import React, { useContext, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { HandleSHowHeader, showHeaderContext } from '../../App';
import CssBaseline from '@material-ui/core/CssBaseline';
import error404 from '../../images/error404.jpg'
import { Link } from 'react-router-dom';


const Error404 = () => {
    
    const handleShowHeader = useContext(HandleSHowHeader);
    const showHeader = useContext(showHeaderContext);
    useEffect(()=> {
        showHeader && handleShowHeader();
        return () => {
            !showHeader && handleShowHeader();
        }
    })
    
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <img style={{height:'400px', width:'100%',marginTop:100}} src={error404}/>
          <p style={{textAlign:'center'}}>This requested URL was not found on this server</p>
         <p style={{textAlign:'center'}}> <Link to='/'>Return to Dashboard</Link></p>
          
        </Container>
      </React.Fragment>
    );
};

export default Error404;