import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";

const PrivacyModal = ({ show, handleClose }) => {
  const [agree, setAgree] = useState(false);

  const handleAgreeChange = (e) => {
    setAgree(e.target.checked);
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" centered>
      <Modal.Header>
        <Modal.Title>Privacy Policy</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          It is SpreadHit&apos;s policy to respect your privacy regarding any
          information we may collect while operating our website.
          <br />
          <br />
          <h4>1. Information Collection</h4>SpreadHit collects personal
          information, such as your name, email address, and phone number, when
          you create an account or contact us. We may also collect information
          about your device and usage. <br />
          <br />
          <h4>2. Use of Information</h4>We use your information to provide the
          SpreadHit service, communicate with you, and improve our platform. We
          may also use your information for marketing purposes with your
          consent. <br /> <br />
          <h4>3. Data Sharing</h4>We may share your information with third-party
          service providers who assist us in operating the platform.
          <br /> <br />
          <h4>4. Data Security</h4>We implement reasonable security measures to
          protect your information. However, no method of transmission over the
          internet or electronic storage is completely secure. <br /> <br />
          <h4>5. Your Rights</h4>You have the right to access, rectify, or
          delete your personal information. <br /> <br />
          <h4>6. Changes to Privacy</h4>Policy We may update this Privacy Policy
          from time to time. <br />
          <br />
          <h4>7. Contact Us</h4> If you have any questions about our Privacy
          Policy, please contact us at [email protected].
          <br />
        </p>
        <Form.Check
          type="checkbox"
          label="I agree to the privacy policy"
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

PrivacyModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default PrivacyModal;
