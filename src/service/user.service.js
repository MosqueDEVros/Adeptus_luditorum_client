import axios from 'axios'

class UsersService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/user`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }


    getAllUser() {
        return this.api.get("/userlist");
    }
    getUserDetails(user_id) {
        return this.api.get(`/${user_id}`);
    }

    editUser(user_id, userData) {
        return this.api.post(`/edit/${user_id}`, { userData })
    }

    deleteUser(work_id) {
        return this.api.delete(`/delete/${work_id}`);
    }


}

const usersService = new UsersService()

export default usersService