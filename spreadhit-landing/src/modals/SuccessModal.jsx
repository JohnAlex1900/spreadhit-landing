import "react";
import { Modal, Button, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import excitedImage from "../assets/excited.png";

const SuccessModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Spreadhit is Coming Soon</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <p>Are You Excited?!</p>
          <Image src={excitedImage} fluid />
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button
          variant="info"
          className="w-50 text-white"
          onClick={handleClose}
        >
          Yes
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
