import React from "react";
import "./Signup.css";
import { Formik, Form, Field } from "formik";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Contact (){
return(
    <>
   
   <Container>
      <Row>
        <Col>
        <Formik
initialValues={{
    Name:"",
    Email:"",
    Contact:"",
    Message:""

}}
onSub={(value)=>{
    console.log(value)

}}




>
    <Form style={{marginTop:"80px"}}>


       		<h1>Ask A Question</h1>
               <label for="Name"><b>Full Name</b></label> 
               <Field type="text" placeholder="Enter Your Name" name="Name" />

               <label for="Email"><b>Email</b></label> 
               <Field type="email" placeholder="Enter Your Email" name="Email" />
               <label for="Contact"><b>Contact Number</b></label> 
               <Field type="number" placeholder="Enter Your Number" name="Contact" />

        <label for="text"><b>Message</b></label>
        <Field type="text" name="Message" />


		<button type="submit" class="registerbutton" >Send</button>

        </Form>
        </Formik> 
        </Col>
        <Col style={{marginTop:"10px"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14468.722984774198!2d67.0641179!3d24.9599644!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb34130132ee279%3A0x7a16c4a9b2d8dac2!2sFoodistan%20(Love%20Of%20Foodies)!5e0!3m2!1sen!2s!4v1683838936486!5m2!1sen!2s" width="500" height="350" style={{textAlign:"center",marginBottom:"30px",marginTop:"70px",border:0, allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>

        </Col>
      </Row>
    </Container>
    
    </>
)
};




export default Contact;




 






















