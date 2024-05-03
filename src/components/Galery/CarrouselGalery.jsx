
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import pruebaGalery from '../../json/pruebaGalery.json'

const CarrouselGalery = () => {
    return (

        // scroll para version mobile








        // carrusel para tablet y pc


        <Swiper
            slidesPerView={5}
            spaceBetween={30}

            modules={[Pagination]}
        >

            {pruebaGalery.map(eachPrueba =>

                <SwiperSlide
                    key={eachPrueba.id}
                >{eachPrueba.name}</SwiperSlide>
            )

            }


        </Swiper>
    )
}

export default CarrouselGalery