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
  getWip() {
    return axios.get(BASE_URL + "/wip");
  },
  getCategories() {
    return axios.get(BASE_URL + "/categories");
  },
  deletePart(row) {
    return axios.post(BASE_URL + "/delete", row);
  },
  convert(convertInfo) {
    return axios.post(BASE_URL + "/convert", convertInfo);
  },
  unconvert(unconvertInfo) {
    return axios.post(BASE_URL + "/unconvert", unconvertInfo);
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
  checkPartExists(partNumber) {
    return axios.get(BASE_URL + "/checkPartExists", partNumber);
  },
};

export default tableServices;
