import React, { useState } from 'react';
import Modal from '../ModalConfirm/ModalConfirm'; // Asegúrate de tener la ruta correcta al componente ModalConfirm

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        // Lógica para registrar los datos aquí
        console.log('Nombre:', name);
        console.log('Correo:', email);
        console.log('Contraseña:', password);
        // Lógica para registrar los datos aquí

        // Abrimos la ventana modal
        setModalOpen(true);

        // Limpiamos los campos y errores
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
    };

    const closeModal = () => {
        // Función para cerrar la ventana modal
        setModalOpen(false);
    };

    return (
        <div className="form-signUp">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Introduce tu nombre"
                    />
                </div>

                <div className="input-group">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Introduce una contraseña"
                    />
                </div>

                <div className="input-group">
                    <label>Repetir Contraseña</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder="Repite la contraseña elegida"
                    />
                </div>

                <div className="input-group">
                    <label>Correo</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Introduce un correo electrónico"
                    />
                </div>

                {error && <p className="error-message">{error}</p>}

                <div className='button-container'>
                    <button type="submit" className="submit-button">Aceptar</button>
                </div>
            </form>
            <Modal isOpen={modalOpen} onClose={closeModal} />
        </div>
    );
};

export default SignUp;
