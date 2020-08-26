import React from "react";
import { Button, Col, Card }from "react-bootstrap";
import "./style.css"


function PortfolioCard(props) {
console.log(props)
  return( 
      <Col sm="6">
        <Card>
          <Card.Body> 
            <img src={props.image}className="card-img" alt={props.name} />
            <Button href={props.link} className="btn btn-block custom-btn">{props.name}</Button>
          </Card.Body>
        </Card>
      </Col>
    
  )
}

export default PortfolioCard;