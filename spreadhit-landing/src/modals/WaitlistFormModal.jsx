import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import PropTypes from "prop-types";
import SuccessModal from "./SuccessModal";
import LoadingSpinner from "../components/LoadingSpinner";
import axios from "axios";

const WaitlistFormModal = ({ show, handleClose, handleSubmit }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShowSuccessModal = () => setShowSuccessModal(true);
  const handleCloseSuccessModal = () => setShowSuccessModal(false);

  const checkIfUserExists = async (email) => {
    const q = query(collection(db, "waitlist"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || email === "") {
      setError("Please fill out all fields.");
      return;
    }

    setLoading(true);

    try {
      const userExists = await checkIfUserExists(email);

      if (userExists) {
        setError("This email is already on the waitlist.");
        setLoading(false);
      } else {
        // Add user to Firestore
        const docRef = await addDoc(collection(db, "waitlist"), {
          name: name,
          email: email,
        });
        await setDoc(docRef, { name, email });

        // Call backend to send confirmation email
        const response = await axios.post(
          "https://spreadhit-landing-backend.onrender.com/send_confirmation_email",
          { name, email },
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status !== 200) {
          console.error("Backend error: ", response.data); // Log the exact error from the backend
          setError(
            `Error sending confirmation email: ${response.data.message}`
          );
          setLoading(false);
        } else {
          handleSubmit({ name, email });
          handleClose();
          setTimeout(() => {
            setLoading(false);
            handleShowSuccessModal();
          }, 500);
        }
      }
    } catch (err) {
      console.error("Error adding to waitlist: ", err);
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Join the Waitlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <p className="text-danger">{error}</p>}
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="mt-4"
              style={{ width: "100%" }}
            >
              Join Waitlist
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <SuccessModal
        show={showSuccessModal}
        handleClose={handleCloseSuccessModal}
      />

      {loading && <LoadingSpinner />}
    </>
  );
};

WaitlistFormModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default WaitlistFormModal;
