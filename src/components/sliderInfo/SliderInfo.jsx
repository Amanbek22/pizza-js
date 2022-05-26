import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InfoCard from "../infoCard/InfoCard";

const PrevBtn = (props) => {
    return <div onClick={props.onClick}>Prev</div>
}
const NextBtn = (props) => {
    return <div onClick={props.onClick}>Next</div>
}
export default function SliderInfo() {
    
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // prevArrow: <PrevBtn />,
    // nextArrow: <NextBtn />
  };
  return (
    <div>
      <Slider {...settings}>
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </Slider>
    </div>
  );
}
