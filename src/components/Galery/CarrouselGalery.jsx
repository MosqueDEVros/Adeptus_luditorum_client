import { useEffect, useMemo, useState } from 'react';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Spiner from '../Spinner/Spiner';
import 'swiper/css';
import 'swiper/css/pagination';
import useInstagramStore from '../../store/useInstagramStore';

// Ensure Modal is properly initialized
Modal.setAppElement('#root'); // Adjust according to your app's root element

const CarrouselGalery = () => {
    const [initialPosition, setInitialPosition] = useState('bottom');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);


    const photos = useInstagramStore(state => state.photos);
    const fetchPhotos = useInstagramStore(state => state.fetchPhotos);




    const accessToken = import.meta.env.VITE_ACCESTOKENINSTAGRAM;

    useEffect(() => {

        if (photos.length === 0) {
            fetchPhotos(accessToken);
        }

    }, [accessToken, fetchPhotos, photos.length]);





    const toggleInitialPosition = () => {
        setInitialPosition(initialPosition === 'bottom' ? 'top' : 'bottom');
    };




    const openModal = (photo) => {
        setSelectedPhoto(photo);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedPhoto(null);
    };

    const isLoaderPhoto = useMemo(() => photos.length === 0, [photos]);

    return (
        <div className='componentCarrusel'>
            {isLoaderPhoto ? (
                <Spiner />
            ) : (
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
                    {photos.map((eachPhoto, index) => (
                        <SwiperSlide key={`${eachPhoto.id}-${index}`} style={{ order: index }}>
                            <div className='boxshadow' onClick={() => openModal(eachPhoto)}>
                                <img src={eachPhoto.media_url} className={`div-heaxgon ${index % 2 === 0 ? 'div-heaxgon-top' : 'div-heaxgon-bottom'}`} style={{ width: '100%', height: '100%' }} alt={`Slide ${index}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            {selectedPhoto && (
                <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Image Modal">
                    <button onClick={closeModal}>
                        <p className='closeButtonModal'>X</p>
                    </button>
                    <img src={selectedPhoto.media_url} style={{ width: '100%' }} alt="Selected" />
                </Modal>
            )}
        </div>
    );
};

export default CarrouselGalery;
