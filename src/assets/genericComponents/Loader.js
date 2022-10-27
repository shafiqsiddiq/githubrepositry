import React from "react";
import { Spinner } from "react-bootstrap";

export function Loader() {
  return (
    <div className="loaderDiv">
      <div className="spinner">
        <Spinner animation="grow" role="status" className="spinner-body">
          <span className="visually-hidden d-none">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
}
