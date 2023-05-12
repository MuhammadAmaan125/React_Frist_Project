import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from "../Images/08c818739e4b48ce96d319c16f4cc0ca.jpg"
import img1 from "../Images/140430115517-06-comfort-foods.jpg"
import img2 from "../Images/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.webp"


function Home(){
   
        return(
            <>
            {/* Start Slider  */}

<div style={{marginTop:"50px"}}>
  
<Carousel >
      <Carousel.Item style={{maxHeight:"500px"}}>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
          style={{height:"500px"}}
        />
     
      </Carousel.Item>
      <Carousel.Item  style={{maxHeight:"500px"}}>
        <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
          style={{height:"500px"}}
        />

        
      </Carousel.Item>
      <Carousel.Item style={{maxHeight:"500px"}}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Third slide"
          style={{height:"500px"}}
        />

        
      </Carousel.Item>
    </Carousel> 
   
  

            {/* Slider End  */}

            {/* Start Cards  */}


          <div className="container" style={{marginTop:"20px",marginLeft:"50px"}}>
            <div className="row">
              <div className="col" lg-3 md-4 sm-6 col-12>
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Zinger Buger</Card.Title>
        <Card.Title>
      RS:300
        </Card.Title>
        <Button variant="primary">Order Now</Button>
      </Card.Body>
    </Card>       


    
              </div>
              <div className="col" lg-3 md-4 sm-6 col-12>
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
      <Card.Title>Sandwiches</Card.Title>
        <Card.Title>
      RS:450
        </Card.Title>
        <Button variant="primary">Order Now</Button>
      </Card.Body>
    </Card>       


    
              </div>
              <div className="col" lg-3 md-4 sm-6 col-12>
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
      <Card.Title>Biryani</Card.Title>
        <Card.Title>
      RS:500</Card.Title>   
           <Button variant="primary">Order Now</Button>
      </Card.Body>
    </Card>       


    
              </div>
                          </div>
           </div>

           
</div>

            {/* End Card  */}
            </>
        )
    }

export default Home