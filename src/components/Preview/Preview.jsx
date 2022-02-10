import React, { useEffect } from "react";
import "./preview.scss";

const Preview = ({
  img,
  mainTitle,
  subTitle,
  backgroundColor,
  fontColor,
  canvasRef,
  imageLoaded,
  setImageLoaded,
}) => {
  useEffect(() => {
    // canvas 길이 가져오기

    const width = canvasRef.current.width;
    const height = canvasRef.current.height;

    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, width, height);

    if (imageLoaded || img) {
      ctx.drawImage(
        img,
        width / 2 - img.width / 2,
        height / 2 - img.height / 2
      );
      ctx.fillStyle = "#00000076";
      ctx.fillRect(0, 0, width, height);
    } else {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);
    }

    ctx.font = "700 200px Noto Sans KR";
    ctx.fillStyle = fontColor;
    ctx.textAlign = "center";
    ctx.fillText(mainTitle, width / 2, height / 2.2);

    ctx.font = "300 100px Noto Sans KR";
    ctx.fillStyle = fontColor;
    ctx.textAlign = "center";
    ctx.fillText(subTitle, width / 2, height / 1.5);
    setImageLoaded(false);
  }, [img, mainTitle, subTitle, backgroundColor, fontColor]);

  return (
    <div className="preview">
      <h1>Preview</h1>
      <canvas ref={canvasRef} width={1280} height={720} />
    </div>
  );
};

export default Preview;
