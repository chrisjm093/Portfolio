import React from "react";
import{Container, Row, Col} from "react-bootstrap";
import PortfolioCard from "../components/PortfolioCard";
import "./style.css";
import projects from "../projects.json"

function Portfolio(){
 const evenArray = [];
 const oddArray = [];

 for(var i = 0; i< projects.length; i++){
    if(i % 2){
      evenArray.push( projects[i])
    } else {
      oddArray.push(projects[i])
    }
 }
  return(
      <Container className="fade-in">
        <Row>
          <Col>
            <header>
              <h1>Portfolio</h1>
            </header>
            </Col>
        </Row>
        <div id="horizontal-line"></div>
        <Row>
        {evenArray.map((project) => (
          <PortfolioCard
            id={Math.random()}
            name={project.name}
            link={project.link}
            image={require("../images"+ project.image)}
          >
          </PortfolioCard>
        ))}
        {oddArray.map((project) => (
          <PortfolioCard
            id={Math.random}
            name={project.name}
            link={project.link}
            image={require("../images"+ project.image)}
          >
          </PortfolioCard>
        ))}
        </Row>
      </Container>
  )
} 

export default Portfolio;