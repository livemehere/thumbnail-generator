import React, { useState } from "react";
import { TwitterPicker } from "react-color";
import "./option.scss";
const Option = ({
  mainTitle,
  setMainTitle,
  subTitle,
  setSubTitle,
  imgURL,
  setImgURL,
  backgroundColor,
  colorChangeComplete,
  fontColor,
  fontColorChangeComplete,
  handleDownload,
  downBtnRef,
}) => {
  const [bgPickerOpen, setBgPickerOpen] = useState(false);
  const [fontPickerOpen, setFontPickerOpen] = useState(false);
  return (
    <div className="option">
      <h1>Option</h1>
      <input
        type="text"
        className="mainTitle"
        value={mainTitle}
        onChange={(e) => setMainTitle(e.target.value)}
      />
      <input
        type="text"
        className="subTitle"
        value={subTitle}
        onChange={(e) => setSubTitle(e.target.value)}
      />
      <input
        type="text"
        className="imgURL"
        value={imgURL}
        onChange={(e) => setImgURL(e.target.value)}
        placeholder="배경 이미지 URL"
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

        <a ref={downBtnRef} className="download-btn" onClick={handleDownload}>
          다운로드
        </a>
      </div>
    </div>
  );
};

export default Option;
