import axios from "axios";

const BASE_URL = "/api";

const tableServices = {
  getRows() {
    return axios.get(BASE_URL + "/rows");
  },

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
  moveLocation(row) {
    return axios.post(BASE_URL + "/moveLocation", row);
  },
  addPart(row) {
    return axios.post(BASE_URL + "/addPart", row);
  },
};

export default tableServices;
