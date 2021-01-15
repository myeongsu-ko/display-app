import React,{useEffect} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import axios from 'axios';

am4core.useTheme(am4themes_animated);

const Piech = () => {
    useEffect(() => {
        let chart2 = am4core.create("chartdiv2", am4charts.PieChart);
       
        axios.get('/api/hansun/aa').then(res=>{
            console.log('취미',res.data);
            chart2.data = res.data
        })

        
    
    // Add data
 
    
    // Add and configure Series 시리즈 추가 및 구성
    let pieSeries = chart2.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "취미갯수";
    pieSeries.dataFields.category = "hobby";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;
    
    // This creates initial animation 이것은 초기 애니메이션을 만듭니다.
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    
    chart2.hiddenState.properties.radius = am4core.percent(0);
    
      }, []);
    
    return (
        <div>
            <h3>kms 테이블에서 취미 평균 구하기</h3>
            <div id="chartdiv2"style={{ width: "600px", height: "500px" }}></div>
        </div>
    );
};

export default Piech;