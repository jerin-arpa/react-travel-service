import image1 from '../../assets/images/icons/Sajek.png';
import image2 from '../../assets/images/icons/Sreemongol.png';
import image3 from '../../assets/images/icons/sundorbon.png';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Swipers = () => {
    return (
        <div className='w-[250px] md:w-[500px] lg:w-[600px]'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={2}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide className='border-8 rounded-3xl border-yellow-500'>
                    <div className='absolute bottom-0 pl-5 pb-5'>
                        <p className='text-4xl'>Sajek</p>
                    </div>
                    <img src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide className='border-8 rounded-3xl border-yellow-500'>
                    <div className='absolute bottom-0 pl-5 pb-5'>
                        <p className='text-4xl'>Sreemongol</p>
                    </div>
                    <img src={image2} alt="" />
                </SwiperSlide>
                <SwiperSlide className='border-8 rounded-3xl border-yellow-500'>
                    <div className='absolute bottom-0 pl-5 pb-5'>
                        <p className='text-4xl'>sundorbon</p>
                    </div>
                    <img src={image3} alt="" />
                </SwiperSlide>
                <SwiperSlide className='border-8 rounded-3xl border-yellow-500'>
                    <div className='absolute bottom-0 pl-5 pb-5'>
                        <p className='text-4xl'>Sajek</p>
                    </div>
                    <img src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide className='border-8 rounded-3xl border-yellow-500'>
                    <div className='absolute bottom-0 pl-5 pb-5'>
                        <p className='text-4xl'>Sreemongol</p>
                    </div>
                    <img src={image2} alt="" />
                </SwiperSlide>
                <SwiperSlide className='border-8 rounded-3xl border-yellow-500'>
                    <div className='absolute bottom-0 pl-5 pb-5'>
                        <p className='text-4xl'>sundorbon</p>
                    </div>
                    <img src={image3} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Swipers;