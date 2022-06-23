import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";

import Type from "./Type";

import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ASHISH KHATRI</strong>
              </h1>
               <div style={{ padding: 50,textAlign: "left" }}>
                <Type />
              </div>
         
          <Row style={{ justifyContent: "center", position: "relative"}}>
          <Button variant="primary" a href="https://drive.google.com/file/d/1La9bo4vLoDlxCyfLA2RV514Pb0Gqx50D/view?usp=sharing" target="_blank" ><AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row>
        

            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>


          </Row>
        </Container>
  
      </Container>
      
    </section>
  );
}

export default Home; 
