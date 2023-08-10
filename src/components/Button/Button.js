import React from "react";
import "./button.css";

const Button = ({title}) => {
  return (
    <div className="buykit">
      <button>
        <h1>{title}</h1>
      </button>
    </div>
  );
};

export default Button;
