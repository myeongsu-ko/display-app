import Head from "./component/Head";

import { makeStyles } from '@material-ui/core/styles';
import Sidebar from "./component/Sidebar";
import Main from "./component/Main";
import {Route} from 'react-router-dom';
import Static from "./page/Static";
import Light from "./page/Light";
import Error1 from "./page/Error1";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();


  return (
    <div className={classes.root}>

      <Head/>
      <Sidebar/>
      <Route exact path="/" component={Main}/>
      <Route exact path="/static" component={Static}/>
      <Route exact path="/light" component={Light}/>
      {/* <Main/> */}
    </div>
  );
}

export default App;
