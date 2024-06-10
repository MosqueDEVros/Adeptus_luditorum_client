import React from 'react';
import Modal from 'react-modal';

const ModalComponent = ({ isOpen, onRequestClose, imageUrl }) => {

    const [imageSize, setImageSize] = React.useState({ width: 0, height: 0 });

    React.useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageSize({ width: img.width, height: img.height });
        };
        img.src = imageUrl;
    }, [imageUrl]);

    const customStyles = {
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
            overflow: 'hidden',
            width: `${imageSize.width}px`,
            height: `${imageSize.height}px`
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            shouldCloseOnOverlayClick={true}
            style={customStyles}
        >
            <div className="image-container">
                <img src={imageUrl} alt="Event" />

            </div>
        </Modal>
    );
};

export default ModalComponent;
