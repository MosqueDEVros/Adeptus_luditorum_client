import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

// Librería de carrusel elementos html 
import { Swiper, SwiperSlide } from 'swiper/react';
// Funcionalidades del carrusel
import { Autoplay, Navigation } from 'swiper/modules';

// CSS del carrusel
import 'swiper/css';
import 'swiper/css/pagination';

const CarrouselGalery = () => {
    const [initialPosition, setInitialPosition] = useState('bottom');
    const [photos, setPhotos] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    // aqui va el token de la empresa de instagram
    const accessToken = ''; // Reemplaza con tu Access Token

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`);
                setPhotos(response.data.data);
            } catch (error) {
                console.error('Error fetching photos from Instagram', error);
            }
        };
        fetchPhotos();
    }, []);

    // Función para generar reactividad en cada imagen de SwiperSlide
    const toggleInitialPosition = () => {
        setInitialPosition(initialPosition === 'bottom' ? 'top' : 'bottom');
    };

    // Función para abrir el modal
    const openModal = (photo) => {
        setSelectedPhoto(photo);
        setIsOpen(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setIsOpen(false);
        setSelectedPhoto(null);
    };

    return (
        <div className='componentCarrusel'>
            <Swiper
                slidesPerView={5}
                spaceBetween={-10}
                onInit={toggleInitialPosition}
                onSlideChange={toggleInitialPosition}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
            >
                {photos.map((eachPrueba, index) => (
                    <SwiperSlide key={`${eachPrueba.id}-${index}`} style={{ order: index }}>
                        <div className='boxshadow' onClick={() => openModal(eachPrueba)}>
                            <img src={eachPrueba.media_url} className={`div-heaxgon ${index % 2 === 0 ? 'div-heaxgon-top' : 'div-heaxgon-bottom'}`} style={{ width: '100%', height: '100%' }} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {selectedPhoto && (
                <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Image Modal">
                    <button onClick={closeModal}>
                        <p className='closeButtonModal' >X</p>
                    </button>
                    <img src={selectedPhoto.media_url} style={{ width: '100%' }} />
                </Modal>
            )}
        </div>
    );
}

export default CarrouselGalery;
