import React from "react";
import BodyParts from "./BodyParts";

const CustomPart = ({data, handleImg }) => {
  return (
    <div className="Custom-char">
      {data.map((i, idx) => (
        <BodyParts key={idx} part={i} handleImg={handleImg} />
      ))}
    </div>
  );
};

export default CustomPart;
