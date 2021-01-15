import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { GridView, LocalDataProvider } from 'realgrid';
import './App.css';
import { columns, fields } from './realgrid-data';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import CropRotateOutlinedIcon from '@material-ui/icons/CropRotateOutlined';
import Swal from 'sweetalert2'



const Tables = () => {

  let provider = useRef(null);
  let gridView = useRef(null);
  const [check,setCheck]= useState(false); //저장 눌렀다면 리랜더링 되게끔 체크하기 위한 목적

  useEffect(()=>{
    (gridView.current === null) && (provider.current = new LocalDataProvider());
    (gridView.current === null) && (gridView.current = new GridView("realgrid"));
    gridView.current.setDataSource(provider.current);
    provider.current.setFields(fields); 
    gridView.current.setColumns(columns);
    
    gridView.current.setEditOptions({
      insertable: true,
      appendable: true
    }); 
    gridView.current.beginAppendRow();
    gridView.current.showEditor();
    gridView.current.setFocus();
    gridView.current.setEditOptions({
      insertable: true,
      appendable: true,
      updatable: true,
      deletable: true, //CRUD 하기 위한 작업들
      softDeleting: true,
    });
    setCheck(false);
    console.log("여기 들옴")
    gridView.current.commit();
    gridView.current.cancel();
    axios.get('/api/hansun')
    .then(res => {
      gridView.current.commit();
      gridView.current.cancel();
      provider.current.setRows(res.data);
    });
  },[check])
  

  //행추가하기
  function add (){
    gridView.current.beginAppendRow();
    gridView.current.showEditor();
    gridView.current.setFocus();
    Swal.fire('1행이 추가 되었습니다 값을 입력하세요')
  }


  //저장하기
  function save(){
    let rowStates = {
      "created": provider.current.getStateRows("created")
    }
    const value = gridView.current.getValues(rowStates.created);
    if(value === null){
      Swal.fire('값을 입력하세요')
    }else{
      gridView.current.commit();
    
      gridView.current.cancel();
      axios.post('/api/hansun',{
        data: value
      })
      Swal.fire({  position: 'center',
      icon: 'success',
      title: '값이 저장되었습니다',
      showConfirmButton: false,
      timer: 1500});
      setCheck(true);
    }

    
  }   


  //수정하기
  function update(){
    let rowStates = {
      "updated": provider.current.getStateRows("updated")
    }
    const value = gridView.current.getValues(rowStates.updated);
    if(value === null){
      Swal.fire(
        '수정한 값이 있습니까?',
        '수정한 후 클릭하십시오',
        'question'
      )
    }else{
      axios.put('/api/hansun',{
        data: value
      })
      Swal.fire({  
        position: 'center',
        icon: 'success',
        title: '수정완료되었습니다',
        showConfirmButton: false,
        timer: 1500});
      setCheck(true);
    }

  }


  //삭제하기
  function remove(){

    let focusCell = gridView.current.getCurrent(); //현재 클릭한 rowid 값
    if(focusCell.dataRow === -1){
      Swal.fire('삭제할 행을 클릭하십시오')
    }else{
      provider.current.setOptions({
        softDeleting:true //데이터를 바로 삭제하지 않고 상태만 변경
      })
      gridView.current.deleteSelection();
      let rowStates = {
        "deleted": provider.current.getStateRows("deleted")
      }
      const value = gridView.current.getValues(rowStates.deleted);
      console.log(value);
      axios.delete('/api/hansun',{
        data: value
      })
      Swal.fire({  
      position: 'center',
      icon: 'success',
      title: '처리완료',
      showConfirmButton: false,
      timer: 1500});
      setCheck(true);
    }
  }

    return (
      <div>
      <Toolbar />
      <h2>리얼그리드 테이블 적용</h2>
      <Button  variant="contained" color="secondary" onClick={add} startIcon={<NoteAddOutlinedIcon/>} style={{marginBottom:5}}>
        행추가
      </Button>
      <div id="realgrid" style={{width: "1600px"}}></div>
      <div style={{display:'flex', marginRight:5,justifyContent:"space-between",marginTop:5}}>
        <div>
            <Button variant="contained" color="secondary" startIcon={<SaveIcon />} onClick={save}>
              저장
            </Button>
        </div>
        <div>
            <Button  variant="contained" color="secondary" onClick={remove} startIcon={<DeleteIcon/>}>
              삭제
          </Button>
          <Button  variant="contained" color="secondary" onClick={update} startIcon={<CropRotateOutlinedIcon/>} style={{marginLeft:5, marginRight:-5}}>
              수정
          </Button>
        </div>
      </div>
</div>
    );
};

export default Tables;