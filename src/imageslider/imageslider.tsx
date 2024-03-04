import { useState } from "react";
import "./imageslider.scss";
import { Key } from "lucide-react";
export type ImageSliderProps = {
  ImageURL: string[];
};
function ImageSlider({ ImageURL }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === ImageURL.length - 1) return 0;
      return index + 1;
    });
  }
  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return ImageURL.length - 1;
      return index - 1;
    });
  }

  return (
    <div className="image-slider">
      <div className="image-slider-img">
        {ImageURL.map((url) => (
          <img
            key={url}
            src={url}
            className="slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <div className="navigation-buttons">
        <button className="next nav-btn" onClick={showNextImage}>
          {">"}
        </button>
        <button className="previous nav-btn" onClick={showPrevImage}>
          {"<"}
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
