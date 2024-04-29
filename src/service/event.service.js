import axios from 'axios'

class EventsService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/events`,
        });
    }



}
const eventsService = new EventsService()
export default eventsService