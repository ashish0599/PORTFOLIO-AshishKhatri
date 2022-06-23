import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashish Khatri</span>
            from <span className="purple"> Jodhpur, Rajasthan.</span>
            <br />I am a Graduate in Computer Application
             at Amity University, NOIDA. I'm{" "}
            <b className="purple"> Web developer</b> and
            <b className="purple"> Competitive Programming enthusiast.</b>
            <br />I am looking forward to gain competency and exposure in{" "}
            <b className="purple">
              Web development.
            </b>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Browsing Internet
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
           <li className="about-activity">
              <ImPointRight /> Playing Videogames
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#14FFEC", opacity: 0.7 }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ashish Khatri</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
