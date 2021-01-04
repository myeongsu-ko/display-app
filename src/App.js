import Head from "./component/Head";

import { makeStyles } from '@material-ui/core/styles';
import Sidebar from "./component/Sidebar";
import Main from "./component/Main";
import {Route} from 'react-router-dom';
import Static from "./page/Static";
import Light from "./page/Light";
import Error1 from "./page/Error1";
import React, { useState } from "react";
import Login from "./page/Login";
import Forger from "./page/Forger";
import Sign from "./page/Sign";

export const HandleSHowHeader = React.createContext(()=>{});
export const showHeaderContext = React.createContext({showHeader:true});


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [showHeader,setShowHeader] = useState(true);
  const handleShowHeader = () => {
    setShowHeader(!showHeader);
  }


  return (
    <div className={classes.root}>
      <HandleSHowHeader.Provider value={handleShowHeader}>
      <showHeaderContext.Provider value={showHeader}>
      {showHeader && <Head/>}
      {showHeader && <Sidebar/>}
      
      <Route exact path="/" component={Main}/>
      <Route exact path="/static" component={Static}/>
      <Route exact path="/light" component={Light}/>
      <Route exact path="/404" component={Error1}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/forget" component={Forger}/>
      <Route exact path="/sign" component={Sign}/>
      {/* <Main/> */}
      </showHeaderContext.Provider>
      </HandleSHowHeader.Provider>
    </div>
  );
}

export default App;
