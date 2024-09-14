"use client";
import React, { useEffect, useRef, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./slider.module.css";
import LeftButton from "../UI/Buttons/LeftButton";
import RightButton from "../UI/Buttons/RightButton";
import Slider from "react-slick";

const ProductSlider = ({ imgs }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const handleNextSlide = () => {
    sliderRef1.slickNext();
  };

  const handlePrevSlide = () => {
    sliderRef1.slickPrev();
  };

  return (
    <div className={styles["product-slider"]}>
      <div className="slider-container">
        <Slider
          asNavFor={nav1}
          ref={(slider) => (sliderRef2 = slider)}
          slidesToShow={imgs.length >= 3 ? 3 : imgs.length}
          swipeToSlide={true}
          focusOnSelect={true}
          vertical={true}
          verticalSwiping={true}
          style={{ width: "183px" }}
          arrows={false}
        >
          {imgs.length > 0 ? (
            imgs.map((item, index) => (
              <div
                key={item.id}
                className={styles["product-slider__cover-wrapper"]}
              >
                <div className={styles["product-slider__cover-wrapper-inner"]}>
                  <img src={item.img_url} />
                </div>
              </div>
            ))
          ) : (
            <img src={"/images/noimage.jpg"} />
          )}
        </Slider>
      </div>
      <div className="slider-container">
        <div style={{ width: "100%", position: "relative" }}>
          <Slider
            asNavFor={nav2}
            ref={(slider) => (sliderRef1 = slider)}
            style={{ height: "100%" }}
            adaptiveHeight={false}
            arrows={false}
          >
            {imgs.length > 0 ? (
              imgs.map((item) => (
                <div key={item.id}>
                  <div
                    className={styles["product-slider__cover-wrapper-single"]}
                  >
                    <img src={item.img_url} />
                  </div>
                </div>
              ))
            ) : (
              <img src={"/images/noimage.jpg"} />
            )}
          </Slider>
          <button
            className={styles["product-slider__btn"]}
            onClick={handlePrevSlide}
          >
            <img
              src="/svgs/product-slider-left-arrow-icon.svg"
              alt="стрелка влево"
            />
          </button>
          <button
            className={styles["product-slider__btn"]}
            onClick={handleNextSlide}
          >
            <img
              src="/svgs/product-slider-right-arrow-icon.svg"
              alt="стрелка влево"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
