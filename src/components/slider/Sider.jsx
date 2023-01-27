// import Swiper core and required modules
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import blogOne from "../../assets/blog-01.jpeg";
import blogTwo from "../../assets/blog-02.jpeg";
import "./slider.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slider() {
  return (
    <div className="slider">
      <div className="slider-title">
        <h4>recent blogs</h4>
      </div>
      <Swiper
        style={{ width: 1000 }}
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: false }}
        scrollbar={{ draggable: false }}
      >
        <SwiperSlide className="slide">
          <div className="img">
            <img src={blogOne} alt="" />
          </div>
          <div className="info">
            <h5>How to Make Better User Interface</h5>
            <p>
              Dolore officia sint incididunt non excepteur ea mollit commodo ut
              enim reprehenderit cupidatat labore ad laborum consectetur
              consequat...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="img">
            <img src={blogTwo} alt="" />
          </div>
          <div className="info">
            <h5>The Importance of Web Design</h5>
            <p>
              Dolore officia sint incididunt non excepteur ea mollit commodo ut
              enim reprehenderit cupidatat labore ad laborum consectetur
              consequat...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="img">
            <img src={blogOne} alt="" />
          </div>
          <div className="info">
            <h5>How to Make Better User Interface</h5>
            <p>
              Dolore officia sint incididunt non excepteur ea mollit commodo ut
              enim reprehenderit cupidatat labore ad laborum consectetur
              consequat...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="img">
            <img src={blogTwo} alt="" />
          </div>
          <div className="info">
            <h5>The Importance of Web Design</h5>
            <p>
              Dolore officia sint incididunt non excepteur ea mollit commodo ut
              enim reprehenderit cupidatat labore ad laborum consectetur
              consequat...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="img">
            <img src={blogOne} alt="" />
          </div>
          <div className="info">
            <h5>How to Make Better User Interface</h5>
            <p>
              Dolore officia sint incididunt non excepteur ea mollit commodo ut
              enim reprehenderit cupidatat labore ad laborum consectetur
              consequat...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="img">
            <img src={blogTwo} alt="" />
          </div>
          <div className="info">
            <h5>The Importance of Web Design</h5>
            <p>
              Dolore officia sint incididunt non excepteur ea mollit commodo ut
              enim reprehenderit cupidatat labore ad laborum consectetur
              consequat...
            </p>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}
export default Slider;
