// TODO aqui deberia de usarse el modal de manera reactiva pasandole una props como texto y que pueda utilizarse en toda la web 

const Modal = ({ isOpen, onClose, text }) => {

    return (

        isOpen && (

            <div className="modal">

                <div className="modal-content">
                    <p>{text}</p>
                    <div className="button-container">
                        <button onClick={onClose}>Aceptar</button>
                    </div>
                </div>

            </div >
        )

    );
};

export default Modal;