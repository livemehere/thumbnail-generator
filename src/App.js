import "./App.scss";
import Option from "./components/Option/Option";
import Preview from "./components/Preview/Preview";
import React, { useRef, useState } from "react";
function App() {
  const defaultFontColor = "white";
  const defaultBackgroundColor = "black";
  const canvasRef = useRef();
  const [mainTitle, setMainTitle] = useState("제목");
  const [subTitle, setSubTitle] = useState("부제목");
  const [img, setImg] = useState(null);
  const [imgURL, setImgURL] = useState("");
  const [fontColor, setFontColor] = useState(defaultFontColor);
  const [backgroundColor, setBackgroundColor] = useState(
    defaultBackgroundColor
  );
  const downBtnRef = useRef();
  const [downloadURL, setDownloadURL] = useState("");
  const colorChangeComplete = (e) => {
    setBackgroundColor(e.hex);
  };
  const fontColorChangeComplete = (e) => {
    setFontColor(e.hex);
  };
  const handleDownload = () => {
    console.log(canvasRef.current.toDataURL());
    downBtnRef.current.href = canvasRef.current.toDataURL();
    downBtnRef.current.download = "test.png";
  };

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
          backgroundColor={backgroundColor}
          colorChangeComplete={colorChangeComplete}
          fontColor={fontColor}
          fontColorChangeComplete={fontColorChangeComplete}
          handleDownload={handleDownload}
          downBtnRef={downBtnRef}
        />
        <Preview
          img={img}
          setImg={setImg}
          mainTitle={mainTitle}
          subTitle={subTitle}
          imgURL={imgURL}
          backgroundColor={backgroundColor}
          fontColor={fontColor}
          setDownloadURL={setDownloadURL}
          canvasRef={canvasRef}
        />
      </div>
    </div>
  );
}

export default App;
