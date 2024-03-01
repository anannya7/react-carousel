import { useEffect, useState } from "react";
import { data } from "./constant";

const ImageSlider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const handleNextClick = () => {
    setActiveImageIndex(activeImageIndex + 1);
  };
  const handlePrevClick = () => {
    setActiveImageIndex(activeImageIndex - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveImageIndex((activeImageIndex + 1) % data.length);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);

  return (
    <div className="img__slide">
      <button
        className="btn_cls prev_btn"
        onClick={handlePrevClick}
        disabled={activeImageIndex === 0}
      >
        Prev
      </button>
      {data.map((url, index) => (
        <img
          src={url}
          alt="img"
          className={
            "car__img " + (activeImageIndex === index ? "visible" : "hidden")
          }
          key={index}
        />
      ))}

      <button
        className="btn_cls next_btn"
        onClick={handleNextClick}
        disabled={activeImageIndex === data.length - 1}
      >
        Next
      </button>
    </div>
  );
};
export default ImageSlider;
