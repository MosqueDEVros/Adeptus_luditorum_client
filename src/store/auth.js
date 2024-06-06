import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import authService from "../service/auth.service";
// Defining the store
export const useAuthStore = create(
    devtools(
        persist((set) => ({
            user: null,
            activeId: '',
            //TODO iundagar mas en zustand para js esta pàrte funciona pero quiero implementarle un navigate pero no me deja recoger el hook
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
                    //TODO aqui tendria que ser la forma de mandar el mensaje del componente MODAL 
                    alert(err.response.data.message)
                } finally {
                }
            },
        }), {
            name: 'auth-storage',
        })
    )
);
