import React from "react";
import ParentContainer from "./component/ParentContainer";
import backgroundimage from "./Images/backgroundimage.jpg";

function App() {
  return (
    <div>
      <img
        src={backgroundimage}
        alt="background image"
        className="background-image"
      />
      <ParentContainer />
    </div>
  );
}

export default App;
