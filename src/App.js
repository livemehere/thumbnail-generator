import "./App.scss";
import Option from "./components/Option/Option";
import Preview from "./components/Preview/Preview";
import React, { useRef, useState } from "react";
function App() {
  const defaultFontColor = "white";
  const defaultBackgroundColor = "black";
  const canvasRef = useRef();
  const [mainTitle, setMainTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [img, setImg] = useState(null);
  const [fontColor, setFontColor] = useState(defaultFontColor);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(
    defaultBackgroundColor
  );
  const downBtnRef = useRef();

  const colorChangeComplete = (e) => {
    setImg(null);
    setBackgroundColor(e.hex);
  };
  const fontColorChangeComplete = (e) => {
    setFontColor(e.hex);
  };
  const handleDownload = () => {
    downBtnRef.current.href = canvasRef.current.toDataURL();
    downBtnRef.current.download = "썸네일.png";
  };
  const handleFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const image = new Image();
      image.src = reader.result;
      image.onload = () => {
        setImageLoaded(true);
        setImg(image);
      };
    };
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
          backgroundColor={backgroundColor}
          colorChangeComplete={colorChangeComplete}
          fontColor={fontColor}
          fontColorChangeComplete={fontColorChangeComplete}
          handleDownload={handleDownload}
          downBtnRef={downBtnRef}
          handleFile={handleFile}
        />
        <Preview
          img={img}
          setImg={setImg}
          mainTitle={mainTitle}
          subTitle={subTitle}
          backgroundColor={backgroundColor}
          fontColor={fontColor}
          canvasRef={canvasRef}
          imageLoaded={imageLoaded}
          setImageLoaded={setImageLoaded}
        />
      </div>
    </div>
  );
}

export default App;
