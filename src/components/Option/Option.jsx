import React, { useRef, useState } from "react";
import { TwitterPicker } from "react-color";
import "./option.scss";
const Option = ({
  mainTitle,
  setMainTitle,
  subTitle,
  setSubTitle,
  backgroundColor,
  colorChangeComplete,
  fontColor,
  fontColorChangeComplete,
  handleDownload,
  downBtnRef,
  handleFile,
}) => {
  const [bgPickerOpen, setBgPickerOpen] = useState(false);
  const [fontPickerOpen, setFontPickerOpen] = useState(false);
  const bgFileRef = useRef();
  return (
    <div className="option">
      <h1>Option</h1>
      <input
        type="text"
        className="mainTitle"
        value={mainTitle}
        onChange={(e) => setMainTitle(e.target.value)}
        placeholder="제목"
      />
      <input
        type="text"
        className="subTitle"
        value={subTitle}
        onChange={(e) => setSubTitle(e.target.value)}
        placeholder="부제목"
      />
      <div className="button-container">
        <div className="button-wrap">
          <button
            className="bg-color"
            onClick={() => setFontPickerOpen((prev) => !prev)}
          >
            글씨색
          </button>
          {fontPickerOpen ? (
            <div className="picker-wrap">
              <TwitterPicker
                color={fontColor}
                onChangeComplete={fontColorChangeComplete}
              />
            </div>
          ) : null}
        </div>
        <div className="button-wrap">
          <button
            className="bg-color"
            onClick={() => setBgPickerOpen((prev) => !prev)}
          >
            배경색
          </button>
          {bgPickerOpen ? (
            <div className="picker-wrap">
              <TwitterPicker
                color={backgroundColor}
                onChangeComplete={colorChangeComplete}
              />
            </div>
          ) : null}
        </div>

        <button className="bg-color" onClick={() => bgFileRef.current.click()}>
          배경이미지
        </button>
        <input
          type="file"
          ref={bgFileRef}
          className="bg-image"
          onChange={handleFile}
          accept="image/*"
          style={{ display: "none" }}
        />

        <a ref={downBtnRef} className="download-btn" onClick={handleDownload}>
          다운로드
        </a>
      </div>
    </div>
  );
};

export default Option;
