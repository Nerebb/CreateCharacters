import React from "react";
import "./reset.css";
import "./App.scss";
import ImgPath, { bodyParts } from "./components/ImgPath";
import PageTitle from "./components/PageTitle";
import FrameChar from "./components/FrameChar";
import Button from "./components/Button";

const styles = {
  alignItems: "unset",
};

const App = () => {
  return (
    <main className="container" style={styles}>
      <PageTitle />
      {/* <Button handleOnclick={()=>("a")}/> */}
      <section className="PageContent">
        <FrameChar ImgWidth={380} />
        <div className="Custom-char">
          {Object.keys(bodyParts).map((i, idx) => (
            <ImgPath key={idx} ImgWidth={60} part={i} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;
