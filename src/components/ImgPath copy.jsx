import React, { useState } from "react";

const BasePath = "/character";
const CharPath = [
  {
    accessories: [
      { earings: "32" },
      { glasses: "17" },
      { hats: "28" },
      { neckwear: "18" },
    ],
  },
  {
    body: "17",
  },
  {
    clothes: {
      layer_1: "5",
      layer_2: "5",
      layer_3: "9",
    },
  },
  { eyebrows: "15" },
  { eyes: "24" },
  { facial_hair: "17" },
  { hair: "73" },
  { mouths: "24" },
  { noses: "1" },
];
const ImgPath = ({ bodyPart, zIdx, ImgWidth, isStyle = false }) => {
  const temp = CharPath.find((i) => i[bodyPart]);
  const CusPath = Array.from(Array(Number(temp[bodyPart]))).map(
    (_, i) => i + 1
  );
  const imgStyles = {
    zIndex: zIdx,
    position: "absolute",
    left: "0px",
    top: "0px",
  };
  return (
    <section className="Custom-bodypart">
      <div className="title">{bodyPart}</div>
      <div className="Img-wrapper">
        {CusPath.map((i) => (
          <img
            src={`${BasePath}/${bodyPart}/${i}.png`}
            alt=""
            width={ImgWidth}
            style={isStyle ? imgStyles : {}}
          />
        ))}
      </div>
    </section>
  );
};

export default ImgPath;
