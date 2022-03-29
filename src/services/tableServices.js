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
  checkPartExists(partInfo) {
    return axios.post(BASE_URL + "/checkPartExists", partInfo);
  },
  addLocation(name, note, address, postalCode) {
    return axios.post(BASE_URL + "/addLocation", name, note, address, postalCode);
  },
  deleteLocation(id) {
    return axios.post(BASE_URL + "/deleteLocation", id);
  },
  editLocation(name, note, address, postalCode) {
    return axios.post(BASE_URL + "/editLocation", name, note, address, postalCode);
  },
  addStatus(name, note) {
    return axios.post(BASE_URL + "/addStatus", name, note);
  },
  deleteStatus(id) {
    return axios.post(BASE_URL + "/deletStatus", id);
  },
  editStatus(id, name, note) {
    return axios.post(BASE_URL + "/editStatus", id, name, note);
  },
};

export default tableServices;
