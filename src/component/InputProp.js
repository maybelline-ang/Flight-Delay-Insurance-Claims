import React from "react";

const InputProp = (props) => {
  return (
    <input
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default InputProp;
