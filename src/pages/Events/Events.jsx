import React, { useEffect, useState } from 'react';
import EventCard from "../../components/Events/EventCard";
import ModalEvent from '../../components/Events/EventModal';
import useInstagramStore from '../../store/useInstagramStore';

const Events = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const events = useInstagramStore(state => state.events);
    const fetchPhotos = useInstagramStore(state => state.fetchPhotos);



    const accessToken = import.meta.env.VITE_ACCESTOKENINSTAGRAM;

    useEffect(() => {

        if (events.length === 0) {
            fetchPhotos(accessToken);
        }

    }, [accessToken, fetchPhotos, events.length]);








    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setModalIsOpen(true);
    };




    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage('');
    };

    return (
        <div className="events-page" id='Events'>
            <div className="events-title">
                <div className="title">Eventos</div>
                <hr />
            </div>
            <div className="events-list">
                <EventCard
                    events={events}
                    openModal={openModal} />
            </div>
            <ModalEvent
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                imageUrl={events.media_url}
            />
        </div>
    );
}

export default Events;