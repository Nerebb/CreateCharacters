import React from "react";
const BasePath = "/character";

const ImgPart = ({
  part,
  ImgHeight = "fit-content",
  ImgWidth = "unset",
  i,
  isFrame = false,
}) => {
  return (
    <>
      {part.type !== "body" && !isFrame ? (
        <img
          className={part.name}
          src={`${BasePath}/body/8.png`}
          alt=""
          height={ImgHeight}
          style={
            isFrame
              ? {
                  zIndex: -1,
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                }
              : {}
          }
          // onMouseOver={() => handleMouseOver()}
        />
      ) : (
        <></>
      )}
      <img
        className={part.name}
        src={
          part.type !== "body"
            ? `${BasePath}/${part.type}/${part.name}/${i}.png`
            : `${BasePath}/${part.name}/${i}.png`
        }
        alt=""
        height={ImgHeight}
        width={ImgWidth}
        style={
          isFrame
            ? {
                zIndex: part.depth,
                position: part.name === "body" ? "" : "absolute",
                left: "0px",
                top: "0px",
              }
            : {}
        }
      />
    </>
  );
};

export default ImgPart;
