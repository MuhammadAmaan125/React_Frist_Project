import React from "react";
import "./About.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from "../Images/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.webp"
function About() {
    return (
        <>
        <Container>
      <Row>
     
        <Col>
        
         <section class="about-us">
<div class="about">
  <img src={img1} class="pic" />
  <div class="text">
    <h3>About FooDisTan</h3>
    <p>Foodistan group of restaurants first opened its doors in Riyadh in 1985. Since then we have strived time and time again to provide our customers with the freshest and tastiest dining experience possible. Focusing on bringing you succulent live barbecue, mouthwatering curry dishes, and pillow soft tandoor-made bread. All food products are sourced from a selection of premier local and international suppliers to provide our customer a one of kind meal.</p>
                </div>
</div>
</section> 

        
        </Col>
        </Row>
     </Container>

      
        
        </>
    )
}
export default About

