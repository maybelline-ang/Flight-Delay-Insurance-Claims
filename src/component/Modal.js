import React from "react";
import "./Modal.css";

const Modal = ({ closeModal }) => {
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="closeButton">
            <button onClick={() => closeModal(false)}> X </button>
          </div>
          <div className="title">
            <h1>You are entitled to</h1>
          </div>
          <div className="body">
            <p>SGD 500</p>
          </div>
          <div className="footer">
            <button onClick={() => closeModal(false)} id="cancelButton">
              Cancel
            </button>
            <button id="continueButton">Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
