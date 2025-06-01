import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './CatsSlider.css';
import img1 from "@/assets/images/img1.jpg";
import img2 from "@/assets/images/img2.jpg";
import img3 from "@/assets/images/img3.jpg";
import img4 from "@/assets/images/img4.jpg";
import img5 from "@/assets/images/img5.jpeg";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [img1, img2, img3, img4, img5]

const CatsSlider = () => {
    return (
        <div>
            <div className = 'cats-text'>
                <p>Look at cats now bro</p>
            </div>
            <div className = 'catsphotos' >
                <Swiper
                    modules={[Navigation, Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop>
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>


    );
};

export default CatsSlider;