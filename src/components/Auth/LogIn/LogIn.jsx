import React, { useState } from 'react';
import Modal from '../ModalConfirm/ModalConfirm';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Lógica para enviar los datos aquí
        console.log('Correo:', email);
        console.log('Contraseña:', password);
        // Lógica para enviar los datos aquí


        setModalOpen(true);

        setEmail('');
        setPassword('');
        setError('');
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="form-logIn">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Correo</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Introduce tu correo electrónico"
                    />
                </div>

                <div className="input-group">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Introduce tu contraseña"
                    />
                </div>

                {error && <p className="error-message">{error}</p>}

                <div className="button-container">
                    <button type="submit" className="submit-button">Aceptar</button>
                </div>
            </form>
            <Modal isOpen={modalOpen} onClose={closeModal} />
        </div>
    );
};

export default LogIn;