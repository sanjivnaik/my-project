import axios from 'axios';

const USER_REST_API_URL = 'http://localhost:8081/api/employees';

class UserService {
    getUsers() {
        return axios.get(USER_REST_API_URL);
    }

    createUser(employee) {
        return axios.post(USER_REST_API_URL, employee);
    }

    getUserById(employeeId) {
        return axios.get(USER_REST_API_URL + '/' + employeeId);
    }

    updateUser(employee, employeeId) {
        return axios.put(USER_REST_API_URL + '/' + employeeId, employee);
    }

    deleteUser(employeeId) {
        return axios.delete(USER_REST_API_URL + '/' + employeeId);
    }
}

export default new UserService();