import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface CarouselSliderProps {
    responsive: {},
    element: JSX.Element | JSX.Element[],
    dots: boolean | undefined,
    removeArrow: string | string[] | undefined
}

const CarouselSlider: React.SFC<CarouselSliderProps> = ({ responsive, element, dots, removeArrow }) => {
  return (
      <Carousel
            swipeable={false}
            draggable={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            showDots={dots}
            autoPlaySpeed={1000}
            transitionDuration={500}
            removeArrowOnDeviceType={removeArrow}
      >
          {element}
    </Carousel>
  );
};

export default CarouselSlider;