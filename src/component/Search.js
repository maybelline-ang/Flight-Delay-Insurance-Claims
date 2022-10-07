import React, { useState } from "react";
import InputProp from "./InputProp";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const Search = (props) => {
  const [airline, setAirline] = useState("");
  const [flightnumber, setFlightNumber] = useState("");
  const [depairport, setDepAirport] = useState(""); //dummy
  const [arrairport, setArrAirport] = useState(""); //dummy
  //   const [date, setDate] = useState(null);
  const [error, setError] = useState("");

  //handle form onsubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    //conditional rendering if no data input
    if (airline.length < 1 || flightnumber.length < 1) {
      setError("Error: Airline Code AND Flight Number required");
      return;
    }

    const searchInput = {
      airline: airline,
      flightnumber: flightnumber,
    };
    // console.log(searchInput);

    //** prop from Parent that's why it's same const handleInput
    props.handleInput(searchInput);

    //clear all inputs
    setAirline("");
    setFlightNumber("");
    setDepAirport("");
    setArrAirport("");
  };

  return (
    <div className="wrapper-container">
      <form onSubmit={handleSubmit} className="search">
        <div className="searchflight-container">
          <label htmlFor="airline-container">Airline</label>
          <InputProp
            type="text"
            id="airline"
            placeholder="2-letter airline code ie SQ"
            value={airline}
            onChange={(e) => setAirline(e.target.value)}
          />
          <p />
          <label htmlFor="flightnumber">Flight Number</label>
          <InputProp
            type="number"
            id="flightnumber"
            placeholder="if flight number is 423, do not input 0423. enter 423"
            value={flightnumber}
            onChange={(e) => setFlightNumber(e.target.value)}
          />
        </div>
        <br />
        <div className="deparr-container">
          <label htmlFor="depapt">Departure Airport</label>
          <InputProp
            type="text"
            id="depapt"
            placeholder="3 letter IATA code ie YVR"
          />

          <p />
          <label htmlFor="arrapt">Arrival Airport</label>
          <InputProp
            type="text"
            id="arrapt"
            placeholder="3 letter IATA code ie SIN"
          />
        </div>
        <p className="errorMessage">{error}</p>
        <button className="submitButton">Submit</button>
      </form>
    </div>
  );
};

export default Search;

{
}
// <label htmlFor="date">Date of Departure</label>
// <DatePicker
//   placeholder="click here to select date"
//   selected={date}
//   onChange={(date) => setDate(date)}
//   dateFormat="yyyy-MM-dd" //must be yyyy-MM-dd not yyyy-mm-dd nor YYYY-MM-DD
//   maxDate={new Date()}
//   showYearDropdown
//   showMonthDropdown

//isClearable    :shows cancel button to clear out date
