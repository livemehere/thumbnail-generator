import React from "react";
import "./option.scss";
const Option = ({
  mainTitle,
  subTitle,
  setMainTitle,
  setSubTitle,
  imgURL,
  setImgURL,
}) => {
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
        placeholder="이미지 URL"
      />
      <div className="button-wrap">
        <button className="font-color">글씨색</button>
        <button className="bg-color">배경색</button>
        <button className="download-btn">다운로드</button>
      </div>
    </div>
  );
};

export default Option;
