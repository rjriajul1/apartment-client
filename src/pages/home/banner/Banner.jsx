import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import banner1 from '../../../assets/banner/banner_1.jpg'
import banner2 from '../../../assets/banner/banner_2.jpg'
import banner3 from '../../../assets/banner/banner_3.jpg'
import banner4 from '../../../assets/banner/banner_4.jpg'
const Banner = () => {
  return (
    <div className="bg-primary mt-6">
      <Carousel className="px-2 max-w-[1600px] mx-auto" showThumbs={false} infiniteLoop={true} autoPlay={true}>
        <div>
          <img className=" lg:h-[600px] rounded-2xl object-cover" src={banner1} />
        </div>
        <div>
          <img className="lg:h-[600px] rounded-2xl object-cover" src={banner2} />
         
        </div>
        <div>
          <img className="lg:h-[600px] rounded-2xl object-cover" src={banner3} />
         
        </div>
        <div>
          <img className="lg:h-[600px] rounded-2xl object-cover" src={banner4} />
        </div>
      </Carousel>
    </div>
  );
};
export default Banner;
