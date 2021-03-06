import Card from "./card";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { useEffect } from "react";

const CardList = (props) => {
  useEffect = () => {
    const swiper = new Swiper(".swiper", {
      breakpoints: {
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 6,
          spaceBetween: 60,
        },
      },
      direction: getDirection(),
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        },
      },
    });

    function getDirection() {
      return "horizontal";
    }
  };

  return (
    <div className="w-full px-20 ">
      <div>
        <div className="swiper">
          <div className="swiper-wrapper">
            {props.listData.map((el) => {
              return (
                <div
                  key={el.title}
                  className="swiper-slide transform transition duration-500 hover:scale-105"
                >
                  <Card title={el.title} url={el.image?.fields?.file?.url} />
                </div>
              );
            })}
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
