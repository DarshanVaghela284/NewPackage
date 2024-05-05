import React from "react";

const Input = ({ type, placeholder, onChange }) => {
  return <input type="text" placeholder={placeholder} onChange={onChange} />;
};

export default Input;
