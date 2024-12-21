import React from "react";
import '../index.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react';
// import swiperList from "../assets/swipers.json";
import Swipers from "../assets/swipers.json";
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const Swiper = () => {
  return (
    <SwiperContainer 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
 
        {
      Swipers.map((movie, index)=>{
          return(
            <SwiperSlide >
            <div >
            <div class="relative w-full">
                      <img src={movie.image} alt="Attack on Titan" class="w-full h-auto md:h-96" />
                      <div class="absolute inset-0 bg-black/75 font-nato flex flex-col p-5 justify-start space-y-2">
                                <h1 class="text-right text-yellow-500 text-xl font-bold md:text-3xl">{movie.title}</h1>
                                <h5 class='text-right text-yellow-500 text-xs md:text-lg md:pt-12'>{movie.type}</h5>
                            <p class='text-right text-gray-400 text-xs md:text-lg md:pt-8 md:pb-7'>{movie.descreptions}</p>
                      <div class="text-yellow-500 self-end border-2 px-4 py-2 border-yellow-500 rounded-3xl cursor-pointer md:mt-12">بینینی زیاتر</div>
             </div>
            </div>
  
            </div>
            </SwiperSlide>          )
      })
    }
    </SwiperContainer>
  
    
    
  );
}

export default Swiper;
