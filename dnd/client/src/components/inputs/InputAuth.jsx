import React from "react";

const InputAuth = ({ value, method, type, placeholder }) => {
  return (
    <input
      className="input"
      onChange={(e) => method(e.target.value)}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputAuth;
