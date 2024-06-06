import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import authService from "../service/auth.service";

// Defining the store
export const useAuthStore = create(
    devtools(
        persist((set) => ({
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

                } catch (err) {
                    console.log('------> el errorrrrr', err.response)
                    alert(err.response.data.message)
                } finally {
                }
            },
        }), {
            name: 'auth-storage',
        })
    )
);
