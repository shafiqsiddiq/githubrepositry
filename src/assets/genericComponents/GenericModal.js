import React from "react";
import { Modal } from "react-bootstrap";

const GenericModal = ({ children, ...props }) => {
  return (
    <Modal
      size="lg"
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="GenericModal"
    >
      <Modal.Header closeButton>
        <Modal.Title className="h5" id="contained-modal-title-vcenter">
          {props.headerName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {props.showFooter === "false" ? (
        ""
      ) : props.footerContent === undefined ? (
        <Modal.Footer>
          <button className="footerbtn btn btn-default" type="submit">
            Save
          </button>
          <button onClick={props.onHide} className="footerbtn1 btn btn-default">
            Cancel
          </button>
        </Modal.Footer>
      ) : (
        <Modal.Footer>{props.footerContent}</Modal.Footer>
      )}
    </Modal>
  );
};
export { GenericModal };
