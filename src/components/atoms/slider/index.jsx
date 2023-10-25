import React, { forwardRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export const nextSlide = (ref) => (e) => {
  e?.preventDefault();

  if (ref.current) {
    ref.current.slideNext();
  }
};

export const prevSlide = (ref) => (e) => {
  e?.preventDefault();

  if (ref.current) {
    ref.current.slidePrev();
  }
};

export const slideTo = (ref) => (index) => {
  if (ref.current) {
    ref.current.slideToLoop(index);
  }
};

const Slider = forwardRef((props, ref) => {
  const {
    direction,
    spaceBetween,
    slidesPerView,
    mousewheel,
    simulateTouch,
    loop,
    autoplay,
    navigation,
    centeredSlides,
    initialSlide = 0,
    //
    width,
    height,
    //
    setActiveIndex,
    //
    children,
  } = props;

  useEffect(() => {
    if (setActiveIndex)
      if (ref.current) {
        const swiperInstance = ref.current;
        swiperInstance.on("slideChange", () => {
          let realIndex = swiperInstance.realIndex;
          setActiveIndex(realIndex);
        });
      }

    // Clean up effect
    return () => {
      if (setActiveIndex) {
        if (ref.current) {
          ref.current.off("slideChange");
        }
      }
    };
  }, [setActiveIndex, ref]);

  return (
    <Swiper
      modules={[Autoplay]}
      direction={direction}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      mousewheel={mousewheel}
      simulateTouch={simulateTouch}
      centeredSlides={centeredSlides}
      loop={loop}
      autoplay={autoplay}
      navigation={navigation}
      initialSlide={initialSlide}
      speed={1000}
      onSwiper={(swiper) => {
        if (ref) ref.current = swiper;
      }}
      style={{ width, height }}
    >
      {children}
    </Swiper>
  );
});

Slider.Slide = SwiperSlide;

export default Slider;
