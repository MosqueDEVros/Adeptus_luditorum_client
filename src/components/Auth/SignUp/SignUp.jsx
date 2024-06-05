import React, { useState } from 'react';
import Modal from '../ModalConfirm/ModalConfirm';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useAuthStore } from "../../../store/auth"

const SignUp = () => {
    const { registerUser } = useAuthStore()

    const [modalOpen, setModalOpen] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        setModalOpen(true);
        registerUser(data)
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
        <div className="form-signUp">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        placeholder="Introduce tu nombre"
                        {...register("name", { required: 'El nombre es obligatorio', maxLength: { value: 15, message: 'El nombre debe tener menos de 15 caracteres' } })}
                    />
                    {errors.name && <p className="error-message">{errors.name.message}</p>}
                </div>

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
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Introduce una contraseña"
                            {...register("password", { required: 'La contraseña es obligatoria', minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres' } })}
                        />
                        <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="password-icon" />
                        </button>
                    </div>
                    {errors.password && <p className="error-message">{errors.password.message}</p>}
                </div>

                <div className="input-group">
                    <label>Repetir Contraseña</label>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Repite la contraseña elegida"
                            {...register("confirmPassword", { required: 'Debe confirmar la contraseña' })}
                        />
                        <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="password-icon" />
                        </button>
                    </div>
                    {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
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

export default SignUp;