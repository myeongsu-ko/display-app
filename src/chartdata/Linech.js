import React,{useEffect} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import axios from 'axios';


const Linech = () => {
 
 useEffect(()=>{

 
 /* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end
 let data1 = [];
   let chart = am4core.create("chartdiv", am4charts.XYChart);
axios.get('/api/hansun').then(res =>{
  //console.log(res.data);
  
  data1 = res.data
  chart.data = data1;
})


// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  //categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.dataFields.category = "name";
  categoryAxis.renderer.minGridDistance = 60; // 사이 간격
  categoryAxis.renderer.inversed = true; // 역순 바르게 놓기
  categoryAxis.renderer.grid.template.disabled = true; // 세로 구분선 없애기

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.extraMax = 0.1;
valueAxis.min = 0;
valueAxis.strictMinMax = true;

// Create series
let series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "age";
series.dataFields.categoryX = "name";
series.tooltipText = "{age}" //위에 글머리 표시해주는거 

series.tooltip.pointerOrientation = "vertical";

chart.cursor = new am4charts.XYCursor();
chart.cursor.snapToSeries = series; //??????????????????????????????????
chart.cursor.xAxis = valueAxis; // x축에 글머리 보여주게 설정

//chart.scrollbarY = new am4core.Scrollbar();
chart.scrollbarX = new am4core.Scrollbar(); //스크롤 생성
  
});
    return (
        <div>
          <h3>kms 테이블에서 이름/나이 그래프(line)</h3>
            <div id="chartdiv"style={{ width: "600px", height: "500px" }}></div>
        </div>
    );
};

export default Linech;