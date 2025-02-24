import React from "react";
import Img1 from "../../assets/hero/headphone.png";
import Img2 from "../../assets/category/vr.png";
import Img3 from "../../assets/category/macbook.png";
import Slider from "react-slick";
import Button from "../Button";

const HeroSlide = [
  {
    id: 1,
    img: Img1,
    subtitle: "Beats Solo",
    title1: "Wireless",
    title2: "Headphones",
  },
  {
    id: 2,
    img: Img2,
    subtitle: "Beats Solo",
    title1: "Wireless",
    title2: "Headphones",
  },
  {
    id: 1,
    img: Img3,
    subtitle: "Beats Solo",
    title1: "Branded",
    title2: "Laptop",
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoPlaySpeed: 400,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        {/* Hero section */}
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroSlide.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-12 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-delay="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                    >
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-delay="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title1}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-delay="true"
                      className="text-xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px font-bold]"
                    >
                      {data.title2}
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <Button
                        text="Shop Now"
                        bgColor="bg-primary"
                        textColor="text-white"
                      />
                    </div>
                  </div>
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-one="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        alt={data.title1}
                        className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contains mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-[999999]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
