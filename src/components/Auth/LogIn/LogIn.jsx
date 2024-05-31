import React, { useState } from 'react';
import Modal from '../ModalConfirm/ModalConfirm';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LogIn = () => {
    const [error, setError] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = (data) => {
        // Aquí puedes manejar la lógica de inicio de sesión
        console.log('Correo:', data.email);
        console.log('Contraseña:', data.password);

        setModalOpen(true);
        reset();
        setError('');
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="form-logIn">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                    <label>Correo</label>
                    <input
                        type="email"
                        placeholder="Introduce un correo electrónico"
                        {...register("email", { required: 'El correo es obligatorio', pattern: { value: /^\S+@\S+$/i, message: 'El formato del correo no es válido' } })}
                    />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                </div>
                <div className="input-group">
                    <label>Contraseña</label>
                    <div className="password-input-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Introduce una contraseña"
                            {...register("password", { required: 'La contraseña es obligatoria', minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres' } })}
                        />
                        <div className='posicion-error'>
                            <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="password-icon" />
                            </button>
                            {errors.password && <p className="error-message">{errors.password.message}</p>}
                        </div>
                    </div>
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
