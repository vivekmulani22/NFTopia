import { assets1 } from "../assets/Explorepageimg/Explore";


    import React, { useState } from 'react';
    import { Swiper, SwiperSlide } from 'swiper/react';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import { Navigation } from 'swiper/modules';
    import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

    const Page2 = () => {
      const [swiper, setSwiper] = useState(null);

      const slides = [
        { image: assets1.Group, text: 'Artworks' },
        { image: assets1.Group141, text: 'Videos' },
        { image: assets1.Group143, text: 'Music' },
        { image: assets1.Group1, text: 'Games' },
        { image: assets1.Operating_System, text: 'Software' },
        { image: assets1.Group143, text: 'Music' },
        { image: assets1.Group1, text: 'Games' },
        { image: assets1.Operating_System, text: 'Software' },
      ];

      const goNext = () => {
        if (swiper) swiper.slideNext();
      };

      const goPrev = () => {
        if (swiper) swiper.slidePrev();
      };

      return (
        <div className="flex items-center justify-center w-full px-[10vw] py-[5vw]">
          <button
            onClick={goPrev}
            className="w-[3.5vw] h-[4.5vw] flex justify-center items-center text-[3vw] text-[#00000070] shadow-[rgba(0,0,0,0.35)_0px_5px_7px] z-10"
          >
            <GoChevronLeft />
          </button>
          <Swiper
            onSwiper={setSwiper}
            slidesPerView={5}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            modules={[Navigation]}
            className="w-full h-20 flex  px-10 items-center justify-center"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center cursor-pointer">
                <div className={`h-[4vw] w-[13VW] gap-[1vw] font-bold text-[1vw] flex justify-center items-center snap-start shadow-[rgba(0,0,0,0.35)_0px_0px_7px]`}>
                  <img src={slide.image} alt="" className="" />
                  <h3>{slide.text}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={goNext}
            className="w-[3.5vw] h-[4.5vw] flex justify-center items-center text-[3vw] text-[#00000070] shadow-[rgba(0,0,0,0.35)_0px_5px_7px] z-10"
          >
            <GoChevronRight />
          </button>
        </div>
      );
    };

    export default Page2;
//     </>
//   );
// };

// export default Page2;
