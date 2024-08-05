import "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImage from "../assets/header-image.png"; // Update this path to your image file
import "./Header.css";
import PropTypes from "prop-types";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Header = ({ onJoinWaitlist }) => {
  const [headerRef, isVisible] = useScrollAnimation();
  return (
    <div
      className={`header-section header ${isVisible ? "slide-up" : ""}`}
      ref={headerRef}
    >
      <Container className="header-container">
        <Row className="align-items-center">
          <Col md={6} className="text-left">
            <h1 className="display-4 text-primary">
              SpreadHit: The AI-Powered Video Creation and Marketing Platform
            </h1>
            <Button
              variant="info"
              className="mt-3 text-white"
              onClick={onJoinWaitlist}
            >
              Join Waitlist
            </Button>
          </Col>
          <Col md={6} className="text-right">
            <img
              src={headerImage}
              alt="Header"
              className="img-fluid header-image border border-info rounded"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Header.propTypes = {
  onJoinWaitlist: PropTypes.func.isRequired,
};

export default Header;
