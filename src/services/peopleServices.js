import axios from "axios";

const BASE_URL = "/api/people";

const peopleServices = {
  getPeople() {
    return axios.get(BASE_URL, {credentials: true});
  },
};

export default peopleServices;
