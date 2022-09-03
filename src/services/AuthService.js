import axios from 'axios';

const AUTH_REST_API_URL = 'http://localhost:8081/api/authenticate';

class AuthService {
    async loginUser(credentials) {
        /*return fetch('http://localhost:8081/api/authenticate', {
         method: 'POST',
         headers: {
         'Content-Type': 'application/json'
         },
         body: JSON.stringify(credentials)
        });*/
        return axios.post(AUTH_REST_API_URL, credentials);
    }
}

export default new AuthService();