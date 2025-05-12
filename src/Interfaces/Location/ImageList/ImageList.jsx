import React from "react";
import Slider from "react-slick";
import "./imageList.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = ({ data }) => {
  if (data) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        {React.Children.toArray(
          data.map((d) => (
            <div className="bgLocation">
              <img
                src={d}
                className="avaLocation"
                alt="avaLocation"
                loading="lazy"
              />
            </div>
          ))
        )}
      </Slider>
    );
  }
};

export default ImageList;
