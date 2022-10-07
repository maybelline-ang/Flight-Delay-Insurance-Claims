import React, { useState } from "react";
import Modal from "./Modal";

const Results = (props) => {
  const data = props.data.map((d) => {
    return {
      airline: d.airline,
      flightNumber: d.flightNumber,
      destination: d.destination,
      status: d.status,
    };
  });
  // console.log(data);

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {data.length > 0 && (
        <div className="results-container">
          <div className="airline-container">
            <label>Airline</label>
            <br />
            {data.length > 0 ? data[0].airline : ""}
          </div>

          <div className="flightnumber-container">
            <label>Flight Number</label>
            <br />
            {data.length > 0 ? data[0].flightNumber : ""}
          </div>

          <div className="destination-container">
            <label>Destination</label>
            <br />
            {data.length > 0 ? data[0].destination : ""}
          </div>

          <div className="status-container">
            <label>Status</label>
            <br /> {data.length > 0 ? data[0].status : ""}
          </div>

          <button
            className="openModalButton"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Submit
          </button>
          {openModal === true && <Modal closeModal={setOpenModal} />}
        </div>
      )}
    </>
  );
};

export default Results;
