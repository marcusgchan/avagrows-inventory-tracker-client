import axios from "axios";

const BASE_URL = "/api/logs";

const logServices = {
  getLogs() {
    return axios.get(BASE_URL);
  },
};

export default logServices;
