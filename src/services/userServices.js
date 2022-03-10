import axios from "axios";

const BASE_URL = "http://localhost:3001/api";

const userServices = {
  login(user) {
    return axios.post(`${BASE_URL}/login`, user, { withCredentials: true });
  },
  logout() {
    return axios.get(`${BASE_URL}/logout`, { withCredentials: true });
  },
  getCurrentUser() {
    return axios.get(`${BASE_URL}/user`, { withCredentials: true });
  },
};

export default userServices;
