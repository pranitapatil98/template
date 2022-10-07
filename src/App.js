import './App.css';
import { Cards } from './components/cards';
import ModalData from './components/ModalData';
import { useState } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Search from './components/search';

function App() {
  const [item,setItem]=useState([
    
    {
    name:"rahul",
    email:'jshfia@joei.vjdo',
    empCount:2,  
   },

   {
    name:"pranita",
    email:'jshfia@joei.vjdo',
    empCount:2,  
   },

   {
    name:"panchi",
    email:'jshfia@joei.vjdo',
    empCount:2,  
   },
  ]
  );

  const [list,setList]=useState([...item]);
  const [text,setText]= useState("") ;

 const serchHandler=(serch)=>{

       setText(serch);
        console.log(text);

 }
 console.log(text);

  const saveDataHandler=(enteredData)=>{
     const Data={
        ...enteredData
      };
      item.push(Data);

      setItem((item)=>{
        return(
          [...item]
        )
    });
    setList(item);
    
        
    }
  console.log(item);
  return (
    <>
      
      <Row>
        <Col sm={{ span:9, offset:1 }}>
        <Cards  data={item} item={item} text={text}/> 
        </Col>
     
      
      <Col sm={{ span:1, offset:0 }} >
      <ModalData  onSaveChange={saveDataHandler} />
      
      <Search onserch={serchHandler} />   
      </Col>
      </Row> 
    </>
  );
}

export default App;
