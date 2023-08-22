import React from "react";
import Slider from "react-slick";

const SlideExample = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div>
      <h2> Basic Carousel Component</h2>
      <Slider {...settings}>
        <div>
          <h3>SLIDE 1</h3>
        </div>
        <div>
          <h3>SLIDE 2</h3>
        </div>
        <div>
          <h3>SLIDE 3</h3>
        </div>
        <div>
          <h3>SLIDE 4</h3>
        </div>
        <div>
          <h3>SLIDE 5</h3>
        </div>
        <div>
          <h3>SLIDE 6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SlideExample;
