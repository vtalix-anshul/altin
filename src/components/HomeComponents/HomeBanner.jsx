// import home__banner__slide__1 from "../../assets/images/Slider.png";
// import home__banner__slide__2 from "../../assets/images/home__banner__slide__2.png";
// import home__banner__slide__3 from "../../assets/images/home__banner__slide__3.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Navigation, Autoplay } from "swiper/modules";
// import { Link } from "react-router-dom";

// const HomeBanner = () => {
//   return (
//     <div className="h-dvh bg-red-900 -mt-24 relative">
//       {/* Swiper Carousel */}
//       <Swiper
//         spaceBetween={0}
//         slidesPerView={1}
//         pagination={{ clickable: false }}
//         speed={2000}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         loop={true}
//         modules={[Autoplay]}
//         className="h-full w-full"
//       >
//         <SwiperSlide>
//           <div
//             className="h-full w-full bg-cover bg-bottom bg-no-repeat"
//             style={{ backgroundImage: `url(${home__banner__slide__1})`  }}
//           >
//             <div className="h-full container absolute inset-0 z-50 flex items-center">
//               <div className="banner__info px-4 lg:px-16 w-full md:w-fit text-center md:text-left absolute bottom-20 font-semibold text-white">
//                 <Link to="/tiles" className="text-lg mb-6">
//                   <span className="text-orange">/</span> &nbsp;&nbsp;&nbsp;&nbsp; PORCELAIN TILES
//                 </Link>
//                 <div className="headings text-6xl">
//                   <h3>Tiles that suit</h3>
//                   <h3>your style!</h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div
//             className="h-full w-full bg-cover bg-bottom bg-no-repeat"
//             style={{ backgroundImage: `url(${home__banner__slide__2})`  }}
//           >
//             <div className="h-full container absolute inset-0 z-50 flex items-center">
//               <div className="banner__info px-4 lg:px-16 w-full md:w-fit text-center md:text-left absolute bottom-20 font-semibold text-white">
//                 <Link to='/sanitary' className="text-lg mb-6">
//                   <span className="text-orange">/</span> &nbsp;&nbsp;&nbsp;&nbsp; SANITARY WARES
//                 </Link>
//                 <div className="headings text-6xl">
//                   <h3>Sanitary wares</h3>
//                   <h3>that feels classy!</h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div
//             className="h-full w-full bg-cover bg-bottom bg-no-repeat"
//             style={{ backgroundImage: `url(${home__banner__slide__3})`  }}
//           >
//             <div className="h-full container absolute inset-0 z-50 flex items-center">
//               <div className="banner__info px-4 lg:px-16 w-full md:w-fit text-center md:text-left absolute bottom-20 font-semibold text-white">
//                 <Link to="/bath-fittings" className="text-lg mb-6">
//                   <span className="text-orange">/</span> &nbsp;&nbsp;&nbsp;&nbsp; BATH FITTINGS
//                 </Link>
//                 <div className="headings text-6xl">
//                   <h3>Bath Fittings that</h3>
//                   <h3>ease your touch!</h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default HomeBanner;

import home__banner__slide__1 from "../../assets/images/Slider.png";
import home__banner__slide__2 from "../../assets/images/home__banner__slide__2.png";
import home__banner__slide__3 from "../../assets/images/home__banner__slide__3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import arrow__img from "../../assets/images/arrow__down.png";

const HomeBanner = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.params.navigation.prevEl = ".custom-prev";
      swiperRef.current.swiper.params.navigation.nextEl = ".custom-next";
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="h-dvh bg-red-900 -mt-24 relative">
      {/* Custom Navigation Buttons */}
      <div className="navigation__button w-full gap-10 absolute bottom-6 z-50 flex justify-end mx-auto pr-24">
        <button className="custom-prev rounded-full">
          <img src={arrow__img} alt="" className="scale-125 rotate-90 shadow-lg bg-black/20 rounded-full"/>
        </button>
        <button className="custom-next rounded-full">
          <img src={arrow__img} alt="" className="scale-125 -rotate-90 shadow-lg bg-black/20 rounded-full"/>
        </button>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        ref={swiperRef}
        spaceBetween={0}
        slidesPerView={1}
        speed={2000}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="h-full w-full"
      >
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-bottom bg-no-repeat"
            style={{ backgroundImage: `url(${home__banner__slide__1})` }}
          >
            <div className="h-full container absolute inset-0 z-50 flex items-center">
              <div className="banner__info px-4 lg:px-16 w-full md:w-fit text-center md:text-left absolute bottom-24 font-semibold text-white">
                <Link to="/tiles" className="text-lg mb-6">
                  <span className="text-orange">/</span> &nbsp;&nbsp;&nbsp;&nbsp; PORCELAIN TILES
                </Link>
                <div className="headings text-6xl">
                  <h3>Tiles that suit</h3>
                  <h3>your style!</h3>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-bottom bg-no-repeat"
            style={{ backgroundImage: `url(${home__banner__slide__2})` }}
          >
            <div className="h-full container absolute inset-0 z-50 flex items-center">
              <div className="banner__info px-4 lg:px-16 w-full md:w-fit text-center md:text-left absolute bottom-24 font-semibold text-white">
                <Link to="/sanitary" className="text-lg mb-6">
                  <span className="text-orange">/</span> &nbsp;&nbsp;&nbsp;&nbsp; SANITARY WARES
                </Link>
                <div className="headings text-6xl">
                  <h3>Sanitary wares</h3>
                  <h3>that feel classy!</h3>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-bottom bg-no-repeat"
            style={{ backgroundImage: `url(${home__banner__slide__3})` }}
          >
            <div className="h-full container absolute inset-0 z-50 flex items-center">
              <div className="banner__info px-4 lg:px-16 w-full md:w-fit text-center md:text-left absolute bottom-24 font-semibold text-white">
                <Link to="/bath-fittings" className="text-lg mb-6">
                  <span className="text-orange">/</span> &nbsp;&nbsp;&nbsp;&nbsp; BATH FITTINGS
                </Link>
                <div className="headings text-6xl">
                  <h3>Bath Fittings that</h3>
                  <h3>ease your touch!</h3>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
