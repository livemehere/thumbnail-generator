import "./App.scss";
import Option from "./components/Option/Option";
import Preview from "./components/Preview/Preview";
import React, { useState } from "react";
function App() {
  const defaultFontColor = "white";
  const defaultBackgroundColor = "black";

  const [mainTitle, setMainTitle] = useState("제목");
  const [subTitle, setSubTitle] = useState("부제목");
  const [img, setImg] = useState(null);
  const [imgURL, setImgURL] = useState("");
  const [fontColor, setFontColor] = useState(defaultFontColor);
  const [backgroundColor, setBackgroundColor] = useState(
    defaultBackgroundColor
  );

  return (
    <div className="App">
      <h1 className="title">썸네일 생성기</h1>
      <div className="container">
        <Option
          mainTitle={mainTitle}
          subTitle={subTitle}
          setMainTitle={setMainTitle}
          setSubTitle={setSubTitle}
          imgURL={imgURL}
          setImgURL={setImgURL}
        />
        <Preview
          img={img}
          setImg={setImg}
          mainTitle={mainTitle}
          subTitle={subTitle}
          imgURL={imgURL}
        />
      </div>
    </div>
  );
}

export default App;
