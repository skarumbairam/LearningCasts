import { useState } from "react";

const Images = [
  "https://via.placeholder.com/600/56a8c2",
  "https://via.placeholder.com/600/771796",
  "https://via.placeholder.com/600/24f355",
];
const ImageCarousel = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const lastIndex = Images.length;
  console.log("lastIndex", lastIndex);

  const active = {
    backgroundColor: "blue",
  };
  const SliderStyle = {
    sliderContainer: {
      width: "50%",
      height: "auto",
      display: "flex",
      alignItems: "center",
      justfyContent: "center",
    },
    slider: {
      margin: "0 auto",
      width: "300px",
      height: "300px",
      backgroundColor: "red",
      borderRadius: "5px",
    },
    pointer: {
      height: "50px",
      cursor: "pointer",
      backgroundColor: "red",
      textAlign: "center",
      padding: "5px",
    },
    dotscontainer: {
      display: "flex",
    },
    dots: {
      width: "50px",
      height: "50px",
      borderRadius: "25px",
      backgroundColor: "red",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      margin: "5px",
      cursor: "pointer",
    },
  };

  const prevHandler = () => {
    if (currIndex < 1) return;
    setCurrIndex(currIndex - 1);
  };

  const nextHandler = () => {
    if (currIndex == lastIndex - 1) return;
    setCurrIndex(currIndex + 1);
  };

  const dotsHandler = (id) => {
    setCurrIndex(id);
  };

  return (
    <div
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={SliderStyle.sliderContainer}>
        <div style={SliderStyle.pointer} onClick={() => prevHandler()}>
          Prev{" "}
        </div>
        <div style={SliderStyle.slider}>
          <img style={{ width: "100%" }} src={Images[currIndex]} />
        </div>
        <div style={SliderStyle.pointer} onClick={() => nextHandler()}>
          Next{" "}
        </div>
      </div>
      <div>
        <div style={{ ...SliderStyle.dotscontainer, display: "inline-flex" }}>
          {Images.map((img, idx) => {
            return (
              <div
                onClick={() => dotsHandler(idx)}
                style={
                  currIndex === idx
                    ? { ...SliderStyle.dots, ...active }
                    : { ...SliderStyle.dots }
                }
              >
                {idx}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ImageCarousel;
