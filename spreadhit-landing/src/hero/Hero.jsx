import "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import heroImage from "../assets/hero-image.png";
import PropTypes from "prop-types";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "./Hero.css";

const Hero = ({ onJoinWaitlist }) => {
  const [heroRef, isVisible] = useScrollAnimation();
  return (
    <div
      className={`hero-section hero ${isVisible ? "slide-up" : ""}`}
      ref={heroRef}
    >
      <Container>
        <Row className="text-center justify-content-center">
          <Col md={8}>
            <h1 className="hero-title text-primary">Welcome to SpreadHit</h1>
            <h2 className="hero-subtitle text-info">
              Maximize Your Content Production with AI
            </h2>
            <p className="hero-details text-secondary">
              SpreadHit is an AI-powered video creation and marketing platform
              designed to help content creators produce stunning, faceless
              videos, automate social media posting, save time and effort, and
              grow their audience.
            </p>
            <Button
              variant="info"
              className="mt-3 mb-3 text-white"
              onClick={onJoinWaitlist}
            >
              Join Waitlist
            </Button>
          </Col>
        </Row>
        <Row className="text-center justify-content-center">
          <Col md={4}>
            <img src={heroImage} alt="Hero" className="img-fluid hero-image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Hero.propTypes = {
  onJoinWaitlist: PropTypes.func.isRequired,
};

export default Hero;
