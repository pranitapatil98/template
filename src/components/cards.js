import React from 'react'
import "./cards.css";
import Card from 'react-bootstrap/Card';
import Search from './search';

export const Cards = (props) => {
  return (
    <>
   

    {props.data.map((det,i)=>(
      <Card style={{ width: '18rem' ,display:'inline-block' , }}  className=" mt-3 mb-3 mx-2 col-xl-4" key={i}>
      
        <Card.Body>
        <Card.Title>Cake Divison</Card.Title>
     <Card.Text>
                <>
                
                   <p>Incharge:{det.name}</p>
                   <p>E-mail ID:{det.email}</p>
                  <p>Total Employee:{det.empCount}</p> 
                
              
              </>
      </Card.Text>
      </Card.Body>
     
    </Card> 
    
    ))
      };

    </>

  );
};
