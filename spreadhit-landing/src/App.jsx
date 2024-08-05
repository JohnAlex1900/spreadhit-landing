import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "./assets/favicon.png";
import TermsModal from "./modals/TermsModal";
import PrivacyModal from "./modals/PrivacyModal";
import WaitlistFormModal from "./modals/WaitlistFormModal";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Features from "./features/Features";
import "./App.css";

const App = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);

  const handleShowTerms = () => setShowTerms(true);
  const handleCloseTerms = () => setShowTerms(false);

  const handleShowPrivacy = () => setShowPrivacy(true);
  const handleClosePrivacy = () => setShowPrivacy(false);

  const handleShowWaitlistForm = () => setShowWaitlistForm(true);
  const handleCloseWaitlistForm = () => setShowWaitlistForm(false);

  const handleFormSubmit = (formData) => {
    console.log("Form submitted:", formData);
  };

  return (
    <Router>
      <div className="App">
        <Container fluid>
          {/* Header */}
          <Row className="py-4 bg-light text-black border-bottom shadow-sm">
            <Col className="ms-3">
              <Link
                to="/"
                className="d-flex align-items-center text-black text-decoration-none"
              >
                <img
                  src={logo}
                  alt="SpreadHit Logo"
                  style={{ height: "32px" }}
                />
                <span className="ms-2 h4 mt-3">SpreadHit</span>
              </Link>
            </Col>
            <Col className="d-flex justify-content-end">
              <Button
                variant="info"
                className="text-white me-3"
                onClick={handleShowWaitlistForm}
              >
                Join Waitlist
              </Button>
            </Col>
          </Row>

          {/* Main Content */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header onJoinWaitlist={handleShowWaitlistForm} />
                  <Hero onJoinWaitlist={handleShowWaitlistForm} />
                  <Features onJoinWaitlist={handleShowWaitlistForm} />

                  {/* Socials */}
                  <Row className="my-5">
                    <Col>
                      <h2 className="text-center mb-4">Our Socials</h2>
                      <div className="text-center mt-4">
                        <a
                          href="https://facebook.com/profile.php?id=61559895127125"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mx-4"
                        >
                          <i className="fab fa-facebook-f fa-2x"></i>
                        </a>
                        <a
                          href="https://x.com/spreadhit_"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mx-4"
                        >
                          <i className="fab fa-twitter fa-2x text-info"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/company/spreadhit"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mx-4"
                        >
                          <i className="fab fa-linkedin fa-2x text-primary"></i>
                        </a>
                        <a
                          href="https://www.instagram.com/spreadhit/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mx-4"
                        >
                          <i className="fab fa-instagram fa-2x text-danger"></i>
                        </a>
                      </div>
                    </Col>
                  </Row>
                </>
              }
            />
          </Routes>

          {/* Footer */}
          <Row className="py-3 bg-light text-center">
            <Col className="text-center">
              <p>&copy; 2024 SpreadHit. All rights reserved.</p>
              <Button
                variant="link"
                className="text-decoration-none"
                onClick={handleShowTerms}
              >
                Terms of Service
              </Button>
              <Button
                variant="link"
                className="text-decoration-none"
                onClick={handleShowPrivacy}
              >
                Privacy Policy
              </Button>
            </Col>
          </Row>

          <TermsModal show={showTerms} handleClose={handleCloseTerms} />
          <PrivacyModal show={showPrivacy} handleClose={handleClosePrivacy} />
          <WaitlistFormModal
            show={showWaitlistForm}
            handleClose={handleCloseWaitlistForm}
            handleSubmit={handleFormSubmit}
          />
        </Container>
      </div>
    </Router>
  );
};

export default App;
