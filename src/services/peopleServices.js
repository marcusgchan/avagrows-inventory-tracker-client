import axios from "axios";

const BASE_URL = "/api/people";

const peopleServices = {
  getUsers() {
    return axios.get(BASE_URL);
  },
};

export default peopleServices;
