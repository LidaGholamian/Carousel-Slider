import "./slider.scss";
import pic1 from "../assets/05.jpg";
import pic2 from "../assets/06.jpg";
import pic3 from "../assets/07.jpg";
import pic4 from "../assets/08.jpg";
import ImageSlider from "../imageslider/imageslider";

const Images = [pic1, pic2, pic3, pic4];

function Slider() {
  return (
    <div className="slider-container">
      <h1>Carousel Slider</h1>
      <ImageSlider ImageURL={Images} />
    </div>
  );
}

export default Slider;
