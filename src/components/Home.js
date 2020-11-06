import React from "react";
import { Container, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import Header from "./Header";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.png";
const Home = () => {
  return (
    <div className="home">
      <Header type={"home"} />
      <div className="containerPages">
        <div className="pageBody">
          <Container>
            <Card style={{ width: "18rem" }}>
              <Image variant="top" src={photo1} className="rounded-circle" />
              <Card.Body>
                <Card.Title>E-resources</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Link to="/Result">
                <Image variant="top" src={photo2} className="rounded-circle" />
              </Link>
              <Card.Body>
                <Card.Title>Students results</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Link to="/approvalResult">
                <Image variant="top" src={photo3} className="rounded-circle" />
              </Link>
              <Card.Body>
                <Card.Title>Approve results</Card.Title>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
