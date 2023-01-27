// import Swiper core and required modules
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BiznEX from "../../assets/BiznEX.jpg";
import biznex3 from "../../assets/biznex3.jpg";
import Dorra from "../../assets/Dorra.jpg";
import egyptRetailSummit from "../../assets/egypt-retail-summit.jpg";
import elkoubasy from "../../assets/elkoubasy.jpg";
import hayahDental from "../../assets/hayah-dental.jpg";
import misrPharmacies from "../../assets/misr-pharmacies.jpg";
import payTabs from "../../assets/payTabs.jpg";
import zizoSalon from "../../assets/zizo-salon.jpg";

import "./clientSlider.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ClientSlider() {
  return (
    <Swiper
      style={{ width: 1000 }}
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      pagination={{ clickable: false }}
      scrollbar={{ draggable: false }}
    >
      <SwiperSlide className="client-slider-swiper">
        <div className="img">
          <img src={BiznEX} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="client-slider-swiper">
        <div className="img">
          <img src={Dorra} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="client-slider-swiper">
        <div className="img">
          <img src={egyptRetailSummit} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="client-slider-swiper">
        <div className="img">
          <img src={elkoubasy} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="client-slider-swiper">
        <div className="img">
          <img src={hayahDental} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="client-slider-swiper">
        <div className="img">
          <img src={biznex3} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="client-slider-swiper">
        <div className="img">
          <img src={misrPharmacies} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="client-slider-swiper">
        <div className="img">
          <img src={payTabs} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="client-slider-swiper">
        <div className="img">
          <img src={zizoSalon} alt="" />
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
}
export default ClientSlider;
