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

                const filterEvent = allPhotos.filter(eachPhoto => {
                    if (!eachPhoto.caption) {
                        return false;
                    }
                    const captionLower = eachPhoto.caption.toLowerCase();
                    return (captionLower.includes("#evento") || captionLower.includes("#eventos")) && eachPhoto.caption.includes("🎲");
                });


                const filterEventDate = filterEvent.filter(eachEvent => {

                    if (captionLower.includes("")) {

                    }

                })



                set({ photos: filterAllPhotos.slice(0, maxPhotos) });
                set({ events: filterEvent.slice(0, 3) });
            },

        }),
        {
            name: 'instagram-photos', // Nombre del almacenamiento en localStorage
            // getStorage: () => localStorage,Puedes cambiar a sessionStorage si prefieres
        }
    )
);

export default useInstagramStore;
