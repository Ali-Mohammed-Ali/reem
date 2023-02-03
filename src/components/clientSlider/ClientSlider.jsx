// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from "swiper";
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
import mamshaAhlMisr from "../../assets/mamsha-ahl-misr.jpg";

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
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: false }}
      scrollbar={{ draggable: false }}
    >
      <SwiperSlide className="client-slider-swiper">
        <div className="img">
          <img src={BiznEX} alt="biznEX" title="biznEX" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="client-slider-swiper">
        <div className="img">
          <img src={Dorra} alt="Dorra" title="Dorra" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="client-slider-swiper">
        <div className="img">
          <img
            src={egyptRetailSummit}
            alt="egypt retail summit"
            title="egypt retail summit"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="client-slider-swiper">
        <div className="img">
          <img src={elkoubasy} alt="elkoubasy" title="elkoubasy" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="client-slider-swiper">
        <div className="img">
          <img src={hayahDental} alt="hayahdental" title="hayahdental" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="client-slider-swiper">
        <div className="img">
          <img src={biznex3} alt="biznex3" title="biznex3" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="client-slider-swiper">
        <div className="img">
          <img
            src={misrPharmacies}
            alt="misr pharmacies"
            title="misr pharmacies"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="client-slider-swiper">
        <div className="img">
          <img src={payTabs} alt="paytabs" title="paytabs" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="client-slider-swiper">
        <div className="img">
          <img src={zizoSalon} alt="zizo salon" title="zizo salon" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="client-slider-swiper">
        <div className="img">
          <img
            src={mamshaAhlMisr}
            alt="mamsha ahl misr"
            title="mamsha ahl misr"
          />
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
}
export default ClientSlider;
