const Modal = ({ isOpen, onClose }) => {

    return (

        isOpen && (

            <div className="modal">

                <div className="modal-content">
                    <p>¡Tu registro se ha realizado satisfactoriamente!</p>
                    <div className="button-container">
                        <button onClick={onClose}>Aceptar</button>
                    </div>
                </div>

            </div >
        )

    );
};

export default Modal;