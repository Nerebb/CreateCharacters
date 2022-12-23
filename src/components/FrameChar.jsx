import React from 'react'

const FrameChar = ({ImgWidth}) => {
  return (
    <section className="character-frame">
        <img
          src="character/body/1.png"
          alt=""
          width={ImgWidth}
        />
        <img
          src="character/eyes/3.png"
          alt=""
          width={ImgWidth}
          style={{ zIndex: "1", position: "absolute", left: "0px", top: "0px" }}
        />
        <img
          src="character/hair/40.png"
          alt=""
          width={ImgWidth}
          style={{ zIndex: "6", position: "absolute", left: "0px", top: "0px" }}
        />
        <img
          src="character/clothes/layer_1/3.png"
          alt=""
          width={ImgWidth}
          style={{ zIndex: "2", position: "absolute", left: "0px", top: "0px" }}
        />
        <img
          src="character/clothes/layer_2/1.png"
          alt=""
          width={ImgWidth}
          style={{ zIndex: "3", position: "absolute", left: "0px", top: "0px" }}
        />
        <img
          src="character/clothes/layer_3/3.png"
          alt=""
          width={ImgWidth}
          style={{ zIndex: "4", position: "absolute", left: "0px", top: "0px" }}
        />
        <img
          src="character/mouths/23.png"
          alt=""
          width={ImgWidth}
          style={{ zIndex: "4", position: "absolute", left: "0px", top: "0px" }}
        />
        <img
          src="character/noses/1.png"
          alt=""
          width={ImgWidth}
          style={{ zIndex: "4", position: "absolute", left: "0px", top: "0px" }}
        />
        <img
          src="character/eyebrows/15.png"
          alt=""
          width={ImgWidth}
          style={{ zIndex: "4", position: "absolute", left: "0px", top: "0px" }}
        />
        <img
          src="character/accessories/glasses/8.png"
          alt=""
          width={ImgWidth}
          style={{ zIndex: "5", position: "absolute", left: "0px", top: "0px" }}
        />
      </section>
  )
}

export default FrameChar