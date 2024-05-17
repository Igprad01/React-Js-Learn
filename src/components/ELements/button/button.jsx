import React from "react";

const ButtonA = (props) => {
  return (
    <a
      href= {props.link}
      className={`px-8 py-3 rounded-lg ${props.color} ${props.textColor}`}
    >
      submit
    </a>
  );
};

export default ButtonA;
