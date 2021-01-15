import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
    }));

const Static = () => {
    const classes = useStyles();
    return (
        <div>
            <Toolbar />
           <h1>Dashboard Static</h1>
        </div>
    );
};

export default Static;