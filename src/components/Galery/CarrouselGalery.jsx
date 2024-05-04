import { useState } from 'react';
import pruebaGalery from '../../json/pruebaGalery.json';


// libreria de carrusel elementos html 
import { Swiper, SwiperSlide } from 'swiper/react';
// funcionalidades del carrusel
import { Autoplay, Navigation } from 'swiper/modules';

// css del carrusel
import 'swiper/css';
import 'swiper/css/pagination';
const CarrouselGalery = () => {
    const [initialPosition, setInitialPosition] = useState('bottom');


    // funcion para generar reactividad en cada imagen de SwiperSlide hace que se alterne cada div con una clase 
    const toggleInitialPosition = () => {
        setInitialPosition(initialPosition === 'bottom' ? 'top' : 'bottom');
    };

    return (
        <Swiper
            // imagenes que apareceran en el carrusel
            slidesPerView={5}
            // espacio entre ellas
            spaceBetween={-10}
            // funcion para generar clase dinamica y entre en el carrusel
            onInit={toggleInitialPosition}
            onSlideChange={toggleInitialPosition}
            // velocidad  a la que va el carrusel
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            // para poder desplazarte mediante el cursos por el carrusel sin necesidad de esperar el tiempo para que se active el desplazamiento
            navigation={true}
            // debe llamarse aqui las funcionalidades que le daremos al carrusel por la libreria que la requiere aqui y debemos importar
            modules={[Autoplay, Navigation]}
        >
            {pruebaGalery.map((eachPrueba, index) => (
                <SwiperSlide key={`${eachPrueba.id}-${index}`} style={{ order: index }}>
                    <div className='boxshadow'>
                        {/* 1 aqui llamaremos cada imagen de una base de dato de manera dinamica mientras tenemos una para comprobar */}
                        {/* 2 la clase esta creada una base y otra de manera dinamica para posicionar de manera par las imagenes */}
                        <img src='../../../public/bg-location.png' className={`div-heaxgon ${index % 2 === 0 ? 'div-heaxgon-top' : 'div-heaxgon-bottom'}`} style={{ width: '100%', height: '100%' }} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default CarrouselGalery;
