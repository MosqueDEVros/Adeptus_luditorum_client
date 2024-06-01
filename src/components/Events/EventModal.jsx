import React from 'react';
import Modal from 'react-modal';

const ModalComponent = ({ isOpen, onRequestClose, imageUrl }) => (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={{
            overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                padding: '0',
                border: 'none',
                borderRadius: '0.80vw',
                width: 'auto',
                height: 'auto',
                overflow: 'hidden'
            }
        }}
    >
        <div className="image-container">
            <button className="closeButtonModal" onClick={onRequestClose}>
                <p>X</p>
            </button>
            <img src={imageUrl} alt="Event" />
        </div>
    </Modal>
);

export default ModalComponent;
