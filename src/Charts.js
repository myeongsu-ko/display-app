import React, { useRef, useEffect } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Xychart from './chartdata/Xychart';
import Linech from './chartdata/Linech';
import Piech from './chartdata/Piech';



const Charts = () => {


    return (
        <div>
          <Toolbar/>
          <h2>amChart 적용</h2>
          <div  style={{display:'flex'}}>
          <Linech/>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <Xychart/>
          </div>
          <Piech/>
          
        </div>
    );
}

export default Charts;