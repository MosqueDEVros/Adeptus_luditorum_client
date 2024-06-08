import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import authService from "../service/auth.service";

// Defining the store
export const useAuthStore = create(
    devtools(
        persist(
            (set) => ({
                user: null,
                activeId: '',
                registerUser: async (data, navigate) => {
                    const user = {
                        name: data.name,
                        email: data.email,
                        password: data.password,
                    };
                    try {
                        await authService.signup(user);
                        set({ user });
                        navigate('/');
                    } catch (err) {
                        console.log('Error during signup:', err.response);
                        // TODO: Here you should handle the error, possibly by showing a modal with an error message
                        navigate('/auth/login');
                    }
                },
            }),
            {
                name: 'auth-storage', // Name of the item in the storage
            }
        )
    )
);
