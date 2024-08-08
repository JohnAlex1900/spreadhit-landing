import "react";
import { Modal, Button, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import listImage from "../assets/added-list.png";

const SuccessModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>You&apos;re now on our waitlist!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Thank you for joining the SpreadHit waitlist. You&apos;re one step
          closer to creating amazing AI-generated videos!
        </p>
        <div className="text-center">
          <Image src={listImage} fluid roundedCircle />
        </div>
        <p className="mt-4">
          Stay tuned! We&apos;ll notify you as soon as SpreadHit is ready to
          launch.
        </p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="success" onClick={handleClose}>
          Okay
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

SuccessModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default SuccessModal;
