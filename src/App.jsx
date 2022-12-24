import React, { useEffect, useState } from "react";
import "./reset.css";
import "./App.scss";
import PageTitle from "./components/PageTitle";
import FrameChar from "./components/FrameChar";
import CustomPart from "./components/CustomPart";

const CustomParts = [
  { type: "body", name: "body", depth: 0, total: 17, selectedPart: 1 },
  { type: "body", name: "eyebrows", depth: 4, total: 15, selectedPart: 1 },
  { type: "body", name: "eyes", depth: 1, total: 24, selectedPart: 1 },
  { type: "body", name: "facial_hair", depth: 0, total: 17, selectedPart: 1 },
  { type: "body", name: "hair", depth: 6, total: 73, selectedPart: 1 },
  { type: "body", name: "mouths", depth: 4, total: 24, selectedPart: 1 },
  {
    type: "accessories",
    name: "earings",
    depth: 5,
    total: 32,
    selectedPart: 1,
  },
  {
    type: "accessories",
    name: "glasses",
    depth: 5,
    total: 17,
    selectedPart: 1,
  },
  { type: "accessories", name: "hats", depth: 6, total: 28, selectedPart: 1 },
  { type: "clothes", name: "neckwear", depth: 7, total: 18, selectedPart: 1 },
  { type: "clothes", name: "layer_1", depth: 2, total: 5, selectedPart: 1 },
  { type: "clothes", name: "layer_2", depth: 3, total: 5, selectedPart: 1 },
  { type: "clothes", name: "layer_3", depth: 4, total: 9, selectedPart: 1 },
];

const App = () => {
  const [changeFrameParts, setChangeFrameParts] = useState(CustomParts);

  const handleImg = (part, partID) => {
    CustomParts.map((i) =>
      i.name === part.name ? (i.selectedPart = partID) : ""
    );

    setChangeFrameParts([...CustomParts]);
  };

  const randomParts = () => {
    CustomParts.map(
      (i) => (i.selectedPart = Math.floor(Math.random() * i.total) + 1)
    );
    setChangeFrameParts([...CustomParts]);
  };

  useEffect(() => {
    document.body.style.backgroundImage = "url(/hipsquare.png)";
  }, []);

  return (
    <main className="container">
      <PageTitle />
      <section className="PageContent">
        <FrameChar data={changeFrameParts} handleOnclick={randomParts}/>
        <CustomPart data={changeFrameParts} handleImg={handleImg} />
      </section>
    </main>
  );
};

export default App;
