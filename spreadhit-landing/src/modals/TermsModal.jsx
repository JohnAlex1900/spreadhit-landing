import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";

const TermsModal = ({ show, handleClose }) => {
  const [agree, setAgree] = useState(false);

  const handleAgreeChange = (e) => {
    setAgree(e.target.checked);
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" centered>
      <Modal.Header>
        <Modal.Title>Terms and Conditions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          These terms and conditions outline the rules and regulations for the
          use of SpreadHit&apos;s Website.
          <br />
          <br />
          <h4>1. Acceptance of Terms</h4>
          By accessing or using SpreadHit, you agree to be bound by these Terms
          of Service. <br />
          <br />
          <h4>2. User Account</h4>To use SpreadHit, you must create an account.
          You are responsible for maintaining the confidentiality of your
          account credentials. <br />
          <br />
          <h4>3. Content Creation and Ownership</h4>You retain ownership of the
          content you create using SpreadHit. However, by using the platform,
          you grant SpreadHit a non-exclusive, worldwide, royalty-free license
          to use, reproduce, distribute, and display your content for the
          purpose of operating the platform. <br />
          <br />
          <h4>4. Intellectual Property</h4>SpreadHit and its logo are trademarks
          of [Your Company Name]. All intellectual property rights in the
          platform and its content belong to [Your Company Name] or its
          licensors. <br />
          <br />
          <h4>5. User Conduct</h4>You agree not to use SpreadHit for any
          unlawful or prohibited purpose. You are responsible for all content
          you upload or share. <br />
          <br />
          <h4>6. Account Termination</h4>SpreadHit may terminate your account at
          any time without notice for any reason. <br />
          <br />
          <h4>7. Disclaimer of Warranties</h4>SpreadHit is provided &apos;as
          is&apos; without warranties of any kind. <br />
          <br />
          <h4>8. Limitation of Liability</h4>[Your Company Name] shall not be
          liable for any damages arising from the use of SpreadHit. <br />
          <br />
          <h4>9. Indemnification</h4>You agree to indemnify and hold harmless
          [Your Company Name] from any claims arising from your use of the
          platform. <br />
          <br />
          <h4>10. Governing Law</h4>These Terms of Service shall be governed by
          the laws of [Jurisdiction].
          <br />
          <br />
        </p>
        <Form.Check
          type="checkbox"
          label="I agree to the terms and conditions"
          onChange={handleAgreeChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose} disabled={!agree}>
          Agree
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

TermsModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default TermsModal;
