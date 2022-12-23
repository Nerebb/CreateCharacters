import React from "react";

const Button = ({handleOnclick}) => {
  return (
    <button className="btn-create" onClick={() => handleOnclick()}>
      CREATE NOW
    </button>
  );
};

export default Button;
