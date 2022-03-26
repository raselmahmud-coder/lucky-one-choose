import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ProductModal = (props) => {
    const { cart } = props;
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState(0);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        getRandomIndex()
    };
    const getRandomIndex = () => {
        let randomNumber;
        randomNumber = Math.floor(Math.random() * ((cart.length - 1) - 0 + 1) + 0);
        console.log("card index", randomNumber);
        setProduct(cart[randomNumber].name, "random number");
    };
    return (
        <>
      <Button variant="primary" onClick={handleShow}>
      Choose 1 for me
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>For you: {product}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Have a great day, enjoy the food!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    );
};

export default ProductModal;