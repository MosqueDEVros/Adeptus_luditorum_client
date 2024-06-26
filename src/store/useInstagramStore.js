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

                // Filtrar las fotos que no son videos
                const filterAllPhotos = allPhotos.filter(eachPhoto => eachPhoto.media_type !== "VIDEO");

                // Filtrar los eventos que cumplen con las condiciones de los hashtags y el icono 🎲
                const filteredEvent = allPhotos.filter(eachPhoto => {
                    return eachPhoto.caption &&
                        (eachPhoto.caption.toLowerCase().includes("#evento") ||
                            eachPhoto.caption.toLowerCase().includes("#eventos")) &&
                        eachPhoto.caption.includes("🎲");
                });

                // Extraer la fecha del evento después del icono 🗓
                const createEventDate = filteredEvent.map(eachEvent => {
                    const caption = eachEvent.caption;
                    const calendarIconIndex = caption.indexOf("🗓");

                    if (calendarIconIndex !== -1) {
                        // Buscar el salto de línea después del icono
                        const endOfDateIndex = caption.indexOf('\n', calendarIconIndex);
                        let eventDate;

                        if (endOfDateIndex !== -1) {
                            // Extraer el texto entre el icono 🗓 y el salto de línea
                            eventDate = caption.substring(calendarIconIndex + 2, endOfDateIndex).trim();
                        } else {
                            // Si no hay salto de línea, tomar el resto del texto después del icono 🗓
                            eventDate = caption.substring(calendarIconIndex + 2).trim();
                        }

                        return {
                            ...eachEvent,
                            eventDate: eventDate
                        };
                    }

                    // Retornar el evento original si no se encuentra el icono 🗓
                    return eachEvent;
                });


                set({ photos: filterAllPhotos.slice(0, maxPhotos) });
                set({ events: createEventDate.slice(0, 3) });
            },
        }),
        {
            name: 'instagram-photos', // Nombre del almacenamiento en localStorage
            getStorage: () => localStorage, // Puedes cambiar a sessionStorage si prefieres
        }
    )
);

export default useInstagramStore;
