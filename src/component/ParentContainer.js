import React, { useState, useEffect } from "react";
import Search from "./Search";
import Results from "./Results";
import { useRef } from "react";

const ParentContainer = (props) => {
  const [input, setInput] = useState();
  const [data, setData] = useState([]); //API search result from flight number

  let isMounted = useRef(false);

  // prop down function from parent to change state at Search.js
  const handleInput = (search) => {
    setInput(search);
  };

  // =============  call API ==========================//
  useEffect(() => {
    if (isMounted.current) {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "***",
          "X-RapidAPI-Host": "toronto-pearson-airport.p.rapidapi.com",
        },
      };

      fetch(
        "https://toronto-pearson-airport.p.rapidapi.com/departures/" +
          input.airline +
          input.flightnumber,
        options
      )
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch((err) => console.error(err));
    } else {
      isMounted.current = true;
    }
  }, [input]);
  console.log(data);

  return (
    <>
      <div className="app-container">
        <Search handleInput={handleInput} />
        <p></p>
        <Results data={data} />
      </div>
    </>
  );
};

export default ParentContainer;

// {JSON.stringify(data)}
