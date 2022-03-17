import axios from "axios";

const BASE_URL = "/api";

const partsServices = {
  getParts() {
    return axios.get(BASE_URL + "/parts");
  },
  getLocations() {
    return axios.get(BASE_URL + "/locations");
  },
  getStatuses() {
    return axios.get(BASE_URL + "/statuses");
  },
  getCategories() {
    return axios.get(BASE_URL + "/categories");
  },
  deletePart(row) {
    return axios.post(BASE_URL + "/delete", row);
  },
  changeQuantity(row) {
    return axios.post(BASE_URL + "/changeQuantity", row);
  },
};

export default partsServices;
