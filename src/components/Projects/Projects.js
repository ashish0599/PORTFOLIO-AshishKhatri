import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import unichat from "../../Assets/Projects/unichat.png";
import bookxchanger from "../../Assets/Projects/bookxchanger.png";
import igt from "../../Assets/Projects/igt.jpg";
import mysuru from "../../Assets/Projects/mysuru.png";
import pollution from "../../Assets/Projects/mobile.jpg"; 

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <p style={{ color: "white" }}>
          <strong className="purple">Demo credentials</strong> for Projects:
        </p>
        <p style={{ color: "white" }}>
        Email : <strong className="purple">demo9989test@gmail.com</strong>
        </p>
        <p style={{ color: "white" }}>
     Password : <strong className="purple">demo9989@test</strong>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
        

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mysuru}
              title="10RecipeS"
              description="A Web Application which provide recipes to cook various dishes built using Node.js where a user can add, remove, update, and veiw recepies on youtube.."
              link="https://10-recipes-frontend.vercel.app/"
              link1="https://github.com/ashish0599/10Recipes-frontend"
              link2="https://github.com/ashish0599/10Recipes-backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={igt}
              title="Online Music Player"
              description="Online Music Player is a real-time Web application  built with javascript , node.js and Bootstrap. A website where you can listen and enjoy songs, go through lyrics and create your own playlists and add your songs."
                  link="https://nervous-lalande-10dcb8.netlify.app/login"
                  link1="https://github.com/ashish0599/online-musicplayer-frontend"
                  link2="https://github.com/ashish0599/online-musicplayer-backend"
           />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unichat}
              title="Car Care"
              description="Car Care is a website developed with all neccessary features, as well as with authorization and authentication user can book an appointment for different types of car wash , as well as he can cancel his appointment if needed."
              link="https://taupe-daffodil-7e96dd.netlify.app"
              link1="https://github.com/ashish0599/CarCare-frontend"
              link2="https://github.com/ashish0599/CarCare-BackEnd"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pollution}
              title="shopEasy"
              description="shopEasy is a Online shopping website for Electronics where user can buy mobile Phones based on brands developed with all neccessary features, as well as with authorization and authentication"
              link1="https://github.com/ashish0599/Shop-Easy-Frontend-"
              link="https://shop-easy-frontend-p9xplsx13-ashish0599.vercel.app"
              link2="https://github.com/ashish0599/Shop-Easy-Backend"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookxchanger}
              title="Simple Blogger App"
              description="Simple Blogger App is app  where you can write and publish  your favorites as blogs and photos It is built using MERN stack and js . It has all the major features like userDashboard,"
              link="https://iridescent-melba-e407b4.netlify.app"
              link1="https://github.com/ashish0599/Blog-app-frontend"
              link2="https://github.com/ashish0599/-Blog-App-BackEnd"
             />
          </Col>

            

        

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
