import React from "react";
import ImgPart from "./ImgPart";

const BodyParts = ({ part,handleImg }) => {
  const genPath = Array.from(Array(part.total)).map((_, i) => i + 1);

  return (
    <section className="Custom-part">
      <div className="title">
        {part.type !== "body" ? `${part.type}-${part.name}` : part.name}
      </div>
      <div className="Img-wrapper">
        {genPath.map((i, idx) => (
          <div className={`btn-img ${part.selectedPart === i ? 'active':""}`} onClick={() => handleImg(part, i)}>
            <ImgPart
              key={`${part}-${idx}`}
              part={part}
              i={i}
              ImgHeight={60}
              onChange={handleImg}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BodyParts;
