import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import MapIcon from '@material-ui/icons/Map';
import BookIcon from '@material-ui/icons/Book';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,

      },
      drawerPaper: {
        width: drawerWidth,
        backgroundColor:'#212529' //사이드바 배경
      },
      drawerContainer: {
        overflow: 'auto',
        color:'#6c757d', //사이드바 글자 색깔
      },
      content: {
        //color:'#212529',
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      //드롭박스
      aaa:{
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
      }
    }));

const Sidebar = () => {
    const classes = useStyles();
    const [showing, setShowing] = useState(false);
    const [showing1, setShowing1] = useState(false); 
    const toggleShowing = () => setShowing(!showing);
    const toggleShowing1 = () => {
      
        //setShowing(false);
        setShowing2(false);
        setShowing3(false);
      setShowing1(!showing1)
    };
    const [showing3, setShowing3] = useState(false);
    const [showing2, setShowing2] = useState(false);
    const toggleShowing2 = () => setShowing2(!showing2);
    const toggleShowing3 = () => setShowing3(!showing3); 

    return (
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
              <p style={{fontSize:'15px',marginLeft:20}}>CORE</p>
              <ListItem button>
                <ListItemIcon className={classes.drawerContainer}><HomeIcon/></ListItemIcon>
                <Link to="/" style={{ textDecoration: 'none', color:'inherit' }}><ListItemText primary="Dashboard" /></Link>
              </ListItem>
              <p style={{fontSize:'15px',marginLeft:20}}>INTERFACE</p>
              <ListItem button onClick={toggleShowing}>
                <ListItemIcon className={classes.drawerContainer}><MailIcon/></ListItemIcon>
                <ListItemText primary="Layouts" />
                <ExpandMoreIcon/>
              </ListItem>
              {showing && <Link to="/static" style={{ textDecoration: 'none', color:'inherit' }}><ListItem style={{textAlign:'center', marginLeft:0}} button><ListItemText  primary="Static Navigation" /></ListItem></Link>}
              {showing && <Link to="/light" style={{ textDecoration: 'none', color:'inherit' }}><ListItem style={{textAlign:'center'}} button ><ListItemText primary="Light Sidenav" /></ListItem></Link>}
              
              
              <ListItem button onClick={toggleShowing1}>
                <ListItemIcon className={classes.drawerContainer}><BookIcon/></ListItemIcon>
                <ListItemText primary="Page"/>
                <ExpandMoreIcon/>
              </ListItem>

              {showing1 && <ListItem style={{textAlign:'center'}}  button onClick={toggleShowing2}><ListItemText primary="Authentication" /><ExpandMoreIcon style={{marginLeft:-30}}/></ListItem>}

              {showing2 && <Link to="/login" style={{ textDecoration: 'none', color:'inherit' }}><ListItem style={{textAlign:'center', display:'inline-block'}} button><ListItemText primary="Login" /></ListItem></Link>}
              {showing2 && <Link to="/login" style={{ textDecoration: 'none', color:'inherit' }}><ListItem style={{textAlign:'center'}} button><ListItemText primary="Register" /></ListItem></Link>}
              {showing2 && <Link to="/forget" style={{ textDecoration: 'none', color:'inherit' }}><ListItem style={{textAlign:'center'}} button><ListItemText primary="Forgot Password" /></ListItem></Link>}

              {showing1 && <ListItem style={{textAlign:'center'}} button onClick={toggleShowing3}><ListItemText primary="Error" /><ExpandMoreIcon style={{marginLeft:35}}/></ListItem>}
              
              {showing3 && <Link to="/401" style={{ textDecoration: 'none', color:'inherit' }}><ListItem style={{textAlign:'center'}} button><ListItemText primary="401 Page" /></ListItem></Link>}
              {showing3 && <Link to="/404" style={{ textDecoration: 'none', color:'inherit' }}><ListItem style={{textAlign:'center'}} button><ListItemText primary="404 Page" /></ListItem></Link>}
              {showing3 && <Link to="/500" style={{ textDecoration: 'none', color:'inherit' }}><ListItem style={{textAlign:'center'}} button><ListItemText primary="500 Page" /></ListItem></Link>}             
              <p style={{fontSize:'15px',marginLeft:20}}>ADDONS</p>
              <ListItem button>
                <ListItemIcon className={classes.drawerContainer}><MapIcon/></ListItemIcon>
                <Link to="/chart" style={{ textDecoration: 'none', color:'inherit' }}><ListItemText primary="Chart" /></Link>
              </ListItem>
              <ListItem button>
                <ListItemIcon className={classes.drawerContainer}><InboxIcon/></ListItemIcon>
                <Link to="/table" style={{ textDecoration: 'none', color:'inherit' }}><ListItemText primary="Table" /></Link>
              </ListItem>
          </List>
        </div>
      </Drawer>
    );
};

export default Sidebar;