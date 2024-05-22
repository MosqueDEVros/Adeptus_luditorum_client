import React, { useState } from 'react';
import EventCard from "../../components/Events/EventCard";
import ModalEvent from '../../components/Events/EventModal';

const Events = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

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
                <EventCard openModal={openModal} />
            </div>
            <ModalEvent
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                imageUrl={selectedImage}
            />
        </div>
    );
}

export default Events;