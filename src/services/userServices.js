import axios from "axios";

const BASE_URL = "http://localhost:3001/api";

const userServices = {
  login(user) {
    return axios.post(`${BASE_URL}/login`, user, { withCredentials: true });
  },
};

export default userServices;
