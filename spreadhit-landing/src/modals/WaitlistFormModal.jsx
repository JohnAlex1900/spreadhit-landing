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

    setLoading(true); // Start the loading spinner

    try {
      const userExists = await checkIfUserExists(email);

      if (userExists) {
        setError("This email is already on the waitlist.");
        setLoading(false); // Stop the loading spinner if there's an error
      } else {
        const docRef = await addDoc(collection(db, "waitlist"), {
          name: name,
          email: email,
        });
        await setDoc(docRef, { name, email });

        handleSubmit({ name, email });

        handleClose(); // Close the modal first

        // Introduce a delay before showing the success modal
        setTimeout(() => {
          setLoading(false); // Stop the loading spinner
          handleShowSuccessModal(); // Show the success modal
        }, 500); // Adjust the delay as needed (500ms in this example)
      }
    } catch (err) {
      console.error("Error adding to waitlist: ", err);
      setError("An error occurred. Please try again.");
      setLoading(false); // Stop the loading spinner in case of an error
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
