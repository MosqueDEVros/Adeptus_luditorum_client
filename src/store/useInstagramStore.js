import create from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

const useInstagramStore = create(
    persist(
        (set) => ({
            photos: [],
            events: [],


            fetchPhotos: async (accessToken) => {
                let url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=4&access_token=${accessToken}`;
                let allPhotos = [];
                const maxPhotos = 50;
                while (url && allPhotos.length < maxPhotos) {
                    try {
                        const response = await axios.get(url);
                        const data = response.data;
                        allPhotos = [...allPhotos, ...data.data];
                        url = data.paging?.next || null;
                    } catch (error) {
                        console.error('Error fetching photos from Instagram', error);
                        break;
                    }
                }


                // TODO aqui va el filtro para foto y eventos  debemos tocar esto
                const filterAllPhotos = allPhotos.filter(eachPhoto => eachPhoto.media_type !== "VIDEO");

                const filteredEvent = allPhotos.filter(eachPhoto => {
                    return eachPhoto.caption && (eachPhoto.caption.toLowerCase().includes("#evento") || eachPhoto.caption.toLowerCase().includes("#eventos")) && eachPhoto.caption.includes("🎲");
                });
                filteredEvent.slice(0, 3)




                const createEventDate = filteredEvent.map(eachEvent => {
                    const caption = eachEvent.caption;
                    const calendarIconIndex = caption.indexOf("🗓");

                    if (calendarIconIndex !== -1) {
                        // Buscar el salto de línea después del icono
                        const endOfDateIndex = caption.indexOf('\n', calendarIconIndex);
                        let eventDate;

                        if (endOfDateIndex !== -1) {
                            // Extraer el texto entre el icono 🗓 y el salto de línea
                            eventDate = caption.substring(calendarIconIndex + 1, endOfDateIndex).trim();
                        } else {
                            // Si no hay salto de línea, tomar el resto del texto después del icono 🗓
                            eventDate = caption.substring(calendarIconIndex + 1).trim();
                        }

                        return {
                            ...eachEvent,
                            date: eventDate
                        };
                    }

                    return eachEvent; // Retornar el evento sin modificaciones si no contiene el icono 🗓
                });




                set({ photos: filterAllPhotos.slice(0, maxPhotos) });
                set({ events: createEventDate });
            },

        }),
        {
            name: 'instagram-photos', // Nombre del almacenamiento en localStorage
            // getStorage: () => localStorage,Puedes cambiar a sessionStorage si prefieres
        }
    )
);

export default useInstagramStore;
