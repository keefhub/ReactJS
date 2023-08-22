import React from "react";
import Slider from "react-slick";
import Image from "./Images";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#2ecc71",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        position: "absolute",
        top: "50%",
        right: "-20px",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: "1",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#2ecc71",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        position: "absolute",
        top: "50%",
        right: "-20px",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: "1",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
      onClick={onClick}
    />
  );
};

const SlideExample = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div style={{ width: "70%", margin: "0 auto" }}>
      <h2> Basic Carousel Component</h2>
      <Slider {...settings}>
        {Image.map((item) => (
          <div key={item.id}>
            <img src={item.src} alt={item.alt} className="img" />
            <h2 className="title">{item.title}</h2>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideExample;
