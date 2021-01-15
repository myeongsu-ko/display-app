import Head from "./component/Head";

import { makeStyles } from '@material-ui/core/styles';
import Sidebar from "./component/Sidebar";
import Main from "./component/Main";
import {Route} from 'react-router-dom';
import Static from "./layouts/Static";
import Light from "./layouts/Light";
import Error1 from "./page/error/Error401";
import React, { useState } from "react";
import Login from "./page/authentication/Login";
import Forger from "./page/authentication/ForgetPassword";
import Sign from "./page/authentication/Register";
import Error404 from "./page/error/Error404";
import Error500 from "./page/error/Error500";
import Charts from "./Charts";
import Tables from "./Tables";




export const HandleSHowHeader = React.createContext(()=>{});
export const showHeaderContext = React.createContext({showHeader:true});


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor:'white',
    height:'800px'
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
      <Route exact path="/401" component={Error1}/>
      <Route exact path="/404" component={Error404}/>
      <Route exact path="/500" component={Error500}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/forget" component={Forger}/>
      <Route exact path="/sign" component={Sign}/>
      <Route exact path="/chart" component={Charts}/>
      <Route exact path="/table" component={Tables}/>
      {/* <Main/> */}
      </showHeaderContext.Provider>
      </HandleSHowHeader.Provider>
    </div>
  );
}

export default App;
