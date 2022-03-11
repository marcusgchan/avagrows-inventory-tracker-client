import axios from "axios";

const BASE_URL = "/api/parts";

const partsServices = {
  getParts() {
    return axios.get(BASE_URL);
  },
};

export default partsServices;
