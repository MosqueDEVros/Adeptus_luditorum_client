import React, { useEffect, useState } from 'react';
import EventCard from "../../components/Events/EventCard";
import ModalEvent from '../../components/Events/EventModal';
import useInstagramStore from '../../store/useInstagramStore';

const Events = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedImage, setSelectedImage] = useState('');

    const events = useInstagramStore(state => state.events);
    const fetchPhotos = useInstagramStore(state => state.fetchPhotos);

    const accessToken = import.meta.env.VITE_ACCESTOKENINSTAGRAM;

    useEffect(() => {
        if (events.length === 0) {
            fetchPhotos(accessToken);
        }
    }, [accessToken, fetchPhotos, events.length]);

    const openModal = (event, imageUrl) => {
        setSelectedEvent(event);
        setSelectedImage(imageUrl);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedEvent(null);
        setSelectedImage('');
    };

    return (
        <div className="events-page" id='Events'>
            <div className="events-title">
                <div className="title">Eventos</div>
                <hr />
            </div>
            <div className="events-list">
                {events.map((event, index) => (
                    <EventCard
                        key={index}
                        event={event}
                        openModal={(imageUrl) => openModal(event, imageUrl)}
                    />
                ))}
            </div>
            {selectedEvent && (
                <ModalEvent
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    event={selectedEvent}
                    selectedImage={selectedImage}
                />
            )}
        </div>
    );
}

export default Events;
