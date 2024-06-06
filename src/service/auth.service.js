import axios from 'axios';

class AuthService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/auth`,
        });

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem('authToken');
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }
            return config;
        });

        this.api.interceptors.response.use(
            response => response,
            error => {
                console.error('API call error:', error.response);
                return Promise.reject(error);
            }
        );
    }

    signup(userData) {
        console.log('Sending signup request:', userData);
        return this.api.post('/signup', userData);
    }

    login(userData) {
        console.log('Sending login request:', userData);
        return this.api.post('/login', userData);
    }

    verify(authToken) {
        console.log('Sending verify request with token:', authToken);
        return this.api.get('/verify', {
            headers: { Authorization: `Bearer ${authToken}` },
        });
    }
}

const authService = new AuthService();

export default authService;
