import React from "react";
import Card from 'react-bootstrap/Card';
import img4 from "../Images/im4.png"
import img5 from "../Images/img5.png"
import img6 from "../Images/img6.png"
import img7 from "../Images/img7.png"
import img8 from "../Images/img8.png"
import img9 from "../Images/img9.png"
import img10 from "../Images/img10.png"
import img11 from "../Images/img11.png"
import img12 from "../Images/img12.png"

function Gallery (){
    return(
        <>
        <div className="container" style={{marginTop:"60px"}}>
        <h1>Our Dishes</h1>
<div className="row" >
<div className="col" lg-3 md-4 sm-6 col-12 >
<div>  </div>
              <Card style={{ width: '18rem',border:"none",textAlign:"center" }}>
      <Card.Img variant="top" src={img4}  />
      <Card.Body>
      </Card.Body>
    </Card>       


    
              </div>
              <div className="col" lg-3 md-4 sm-6 col-12>
              <Card style={{ width: '18rem',border:"none" }}>
      <Card.Img variant="top" src={img5} />
      <Card.Body>
      </Card.Body>
    </Card>       


    
              </div>
              <div className="col" lg-3 md-4 sm-6 col-12>
              <Card style={{ width: '18rem',border:"none" }}>
      <Card.Img variant="top" src={img6} />
      <Card.Body>
      </Card.Body>
    </Card>       


    
              </div>
              <div className="col" lg-3 md-4 sm-6 col-12>
              <Card style={{ width: '18rem',border:"none" }}>
      <Card.Img variant="top" src={img7} />
      <Card.Body>
      </Card.Body>
    </Card>       


    
              </div>
              <div className="col" lg-3 md-4 sm-6 col-12>
              <Card style={{ width: '18rem',border:"none" }}>
      <Card.Img variant="top" src={img8} />
      <Card.Body>
      </Card.Body>
    </Card>       


    
              </div>
              <div className="col" lg-3 md-4 sm-6 col-12>
              <Card style={{ width: '18rem',border:"none" }}>
      <Card.Img variant="top" src={img9} />
      <Card.Body>
      </Card.Body>
    </Card>       


    
              </div>
              <div className="col" lg-3 md-4 sm-6 col-12>
              <Card style={{ width: '18rem',border:"none" }}>
      <Card.Img variant="top" src={img10} />
      <Card.Body>
      </Card.Body>
    </Card>       


    
              </div>
              <div className="col" lg-3 md-4 sm-6 col-12>
              <Card style={{ width: '18rem',border:"none" }}>
      <Card.Img variant="top" src={img11} />
      <Card.Body>
      </Card.Body>
    </Card>       


    
              </div>
              <div className="col" lg-3 md-4 sm-6 col-12>
              <Card style={{ width: '18rem',border:"none" }}>
      <Card.Img variant="top" src={img12} />
      <Card.Body>
      </Card.Body>
    </Card>       


    
              </div>


</div>

        </div>
        </>
    )
}
export default Gallery