import React, { useEffect, useRef, useState } from "react";
import "./preview.scss";

const Preview = ({ img, setImg, mainTitle, subTitle, imgURL }) => {
  const canvasRef = useRef();

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = imgURL;

    image.onload = () => {
      setImg(image);
      setImageLoaded(true);
    };
    image.onerror = (e) => {
      setImageLoaded(false);
    };
  }, [imgURL]);

  useEffect(() => {
    // canvas 길이 가져오기
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;

    // 이미지가 불러와지면 ~

    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    if (imageLoaded) {
      ctx.drawImage(
        img,
        width / 2 - img.width / 2,
        height / 2 - img.height / 2
      );
      ctx.fillStyle = "#00000076";
      ctx.fillRect(0, 0, width, height);
    } else {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);
    }

    ctx.font = "200px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(mainTitle, width / 2, height / 2.2);

    ctx.font = "100px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(subTitle, width / 2, height / 1.5);
  }, [img, imageLoaded, mainTitle, subTitle]);

  return (
    <div className="preview">
      <h1>Preview</h1>
      <canvas ref={canvasRef} width={1280} height={720} />
    </div>
  );
};

export default Preview;
