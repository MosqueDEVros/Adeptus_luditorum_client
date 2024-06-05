import { create } from "zustand";
import { v4 as uuid } from 'uuid';
import { devtools, persist } from "zustand/middleware";
import authService from "../service/auth.service"

// Defining the store
export const useAuthStore = create(
    devtools(
        persist((set) => ({
            user: {},
            activeId: '',

            registerUser: (data) => {
                authService
                    .signup(data)
                    .then(() => {
                        emitMessage('welcome')
                        navigate('/')
                    })
                    .catch(err => {
                        setErrors(err.response.data.errorMessages)
                    })
                    .finally(() => {
                        setIsLoading(false);
                    });
            },

        }), {
            name: 'auth-storage',
        })
    )
);
