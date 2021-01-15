import React,{useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import axios from 'axios';

const Xychart = () => {
    

useEffect(() => {

  let chart3 = am4core.create("chartdiv3", am4charts.XYChart);
  axios.get('/api/hansun').then(res =>{
  chart3.data = res.data;
})
  chart3.padding(40, 40, 40, 40);
  
  let categoryAxis = chart3.xAxes.push(new am4charts.CategoryAxis   ());
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.dataFields.category = "name";
  categoryAxis.renderer.minGridDistance = 50; //중간중간 값들이 왜 사라지지???
  categoryAxis.renderer.inversed = true; // 역순 바르게 놓기
  categoryAxis.renderer.grid.template.disabled = true; // 세로 구분선 없애기
  
  let valueAxis1 = chart3.yAxes.push(new am4charts.ValueAxis());
  valueAxis1.min = 0;
  valueAxis1.extraMax = 0.1;
  //valueAxis1.rangeChangeEasing = am4core.ease.linear; //범위 변경 애니메이션에 사용할 여유 함수입니다
  valueAxis1.rangeChangeDuration = 1500;
  
  let series1 = chart3.series.push(new am4charts.ColumnSeries());
  series1.dataFields.categoryX = "name";
  series1.dataFields.valueY = "age";
  series1.tooltipText = "{valueY.value}"
  series1.columns.template.strokeOpacity = 0;
  series1.columns.template.column.cornerRadiusTopRight = 10; //레디우스 편집(막대 둥글게 깍기)
  series1.columns.template.column.cornerRadiusTopLeft = 10;  //레디우스 편집(막대 둥글게 깍기)
  //series.interpolationDuration = 1500;
  //series.interpolationEasing = am4core.ease.linear;
  let labelBullet = series1.bullets.push(new am4charts.LabelBullet()); //텍스트 레이블(막대표시) 위에 글머리기호를 적는다
  labelBullet.label.verticalCenter = "bottom"; //글머리 기호 위치(보통 bottom으로 설정)
  labelBullet.label.dy = -10; //?????
  labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";
  //workingValue : 특정 데이터 필드에 대한 현재 작업 값을 반환합니다.
  //NumberFormatter는 해당 속성 numberFormat 에 설정된 형식을 사용 하여 숫자 값을 형식이 지정된 문자열로 변환합니다.


  chart3.cursor = new am4charts.XYCursor();
  chart3.cursor.snapToSeries = series1; //??????????????????????????????????
  chart3.cursor.xAxis = categoryAxis; // x축에 글머리 보여주게 설정

  chart3.zoomOutButton.disabled = true;
  
  // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
  //기본적으로 동일한 계열의 열은 동일한 색상이므로 chart.colors 색상 세트에서 색상을 가져 오는 어댑터를 추가합니다.
  series1.columns.template.adapter.add("fill", function (fill, target) {
   return chart3.colors.getIndex(target.dataItem.index);
  }); // 주석치니깐 색깔이 바뀌네???
  
  categoryAxis.sortBySeries = series1; //>>>>>>>>>>>??? 주석해도 아무이상없는데..??
//차트에 대한 범주 기반 축을 만드는 데 사용됩니다

chart3.scrollbarX = new am4core.Scrollbar(); //스크롤 생성

}, []);
    return (
        <div>
            <h3>kms 테이블에서이름/나이 그래프</h3>
          <div id="chartdiv3" style={{ width: "600px", height: "500px" }}></div>
        </div>
    );
};

export default Xychart;









