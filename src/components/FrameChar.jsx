import React from "react";
import Button from "./Button";
import ImgPart from "./ImgPart";

const FrameChar = ({data,handleOnclick}) => {
  return (
    <section className="character-frame">
      <div className="frame">
        {data.map((i, idx) => (
          <ImgPart
            part={i}
            i={i.selectedPart}
            ImgWidth={380}
            isFrame={true}
          />
        ))}
      </div>
      <Button handleOnclick={() => handleOnclick()} />
    </section>
  );
};

export default FrameChar;
