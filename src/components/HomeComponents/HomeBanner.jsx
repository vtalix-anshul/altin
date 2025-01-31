// const HomeBanner = ()=>{
//     return (<>
//         <div className="home__banner h-dvh -mt-24 relative">
//             <div className="pt-24 h-full container">
//                 <div className="banner__info px-4 lg:px-16 w-full md:w-fit text-center md:text-left font-semibold absolute bottom-[100px] text-white">
//                     <p className="text-lg mb-6"><span className="text-orange">/</span> &nbsp;&nbsp;&nbsp;&nbsp;  PORCELAIN TILES</p>
//                     <div className="headings text-6xl ">
//                         <h3>Tiles that suits</h3>
//                         <h3>your style!</h3>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>);
// }

// export default HomeBanner;

import home__banner__slide__1 from "../../assets/images/Slider.png";
import home__banner__slide__2 from "../../assets/images/home__banner__slide__2.png";
import home__banner__slide__3 from "../../assets/images/home__banner__slide__3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const HomeBanner = () => {
  return (
    <div className="h-dvh bg-red-900 -mt-24 relative">
      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: false }}
        speed={2000}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        className="h-full w-full"
      >
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-bottom bg-no-repeat"
            style={{ backgroundImage: `url(${home__banner__slide__1})`  }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-bottom bg-no-repeat"
            style={{ backgroundImage: `url(${home__banner__slide__2})`  }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-bottom bg-no-repeat"
            style={{ backgroundImage: `url(${home__banner__slide__3})`  }}
          />
        </SwiperSlide>
      </Swiper>

      {/* Banner Content */}
      <div className="h-full container absolute inset-0 z-50 flex items-center">
        <div className="banner__info px-4 lg:px-16 w-full md:w-fit text-center md:text-left absolute bottom-20 font-semibold text-white">
          <p className="text-lg mb-6">
            <span className="text-orange">/</span> &nbsp;&nbsp;&nbsp;&nbsp; PORCELAIN TILES
          </p>
          <div className="headings text-6xl">
            <h3>Tiles that suit</h3>
            <h3>your style!</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
