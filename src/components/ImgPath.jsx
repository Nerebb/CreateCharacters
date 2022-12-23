import React, { useState } from "react";

const BasePath = "/character";
export const bodyParts = {
  body: { depth: 0, total: 17 },
  eyebrows: { depth: 4, total: 15 },
  eyes: { depth: 1, total: 24 },
  facial_hair: { depth: 0, total: 17 },
  hair: { depth: 6, total: 73 },
  mouths: { depth: 4, total: 24 },
};

export const decorParts = {
  accessories: {
    earings: { depth: 5, total: 32 },
    glasses: { depth: 5, total: 17 },
    hats: { depth: 6, total: 28 },
    neckwear: { depth: 7, total: 18 },
  },
  clothes: {
    layer_1: { depth: 2, total: 5 },
    layer_2: { depth: 3, total: 5 },
    layer_3: { depth: 4, total: 9 },
  },
};

const ImgPath = ({ part, ImgWidth, isFrame = false, handleMouseOver }) => {
  const curPart = bodyParts[part];
  const genPath = Array.from(Array(curPart.total)).map((_, i) => i + 1);

  const imgStyles = {
    zIndex: curPart.depth,
    position: "absolute",
    left: "0px",
    top: "0px",
  };

  return (
    <section className="Custom-part">
      <div className="title">{part}</div>
      <div className="Img-wrapper">
        {genPath.map((i) => (
          <div className="btn-img">
            <img
              src={`${BasePath}/${part}/${i}.png`}
              alt=""
              width={ImgWidth}
              style={isFrame ? imgStyles : {}}
              onMouseOver={() => handleMouseOver()}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImgPath;
