import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Modal.css";
import { GrAddCircle } from "react-icons/gr";

const ModalData = (props) => {
  const[email,setEmail]=useState("");
  const[name,setName]=useState("");
  const[empCount,setEmpCount]=useState("");
  
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data={
        name:name,
        email:email,
        empCount:empCount,
     };
     console.log(data);
    

  props.onSaveChange(data);
  };

  
   const nameHandler =(e)=>{
        e.preventDefault();
        setName(e.target.value);
   } 

    const emailHandler=(e)=>{
        e.preventDefault();
        setEmail(e.target.value);
      }
  
    const empCountHandler=(e)=>{
        e.preventDefault();
        setEmpCount(e.target.value);
    }
  
  return (
    <>
      
      <Button className="btn mt-3 mb-1" onClick={handleShow}>{GrAddCircle}Add</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Division</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="Form.ControlInput1">
              <Form.Label>Division Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={nameHandler}
                placeholder="Department Name"
                autoFocus
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Incharge</Form.Label>
                <Form.Select defaultValue="Department Lead">
                  <option>team lead</option>
                  <option>UI lead</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col}  className="mb-3">
                <Form.Label> Icharge Email ID</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={emailHandler}
                  placeholder="Enter Email ID"
                  autoFocus
                />
              </Form.Group>

              <Form.Group as={Col} controlId="emp">
                <Form.Label>Employees Working</Form.Label>
                <Form.Control 
                   type="number"
                   value={empCount}
                   onChange={empCountHandler}
                />
              </Form.Group>
            </Row>

            <Button type="submit" onClick={submitHandler}>
              Add
            </Button>
          
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" className="md-2" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalData;
