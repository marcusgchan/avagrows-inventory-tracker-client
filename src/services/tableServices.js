import axios from "axios";

const BASE_URL = "/api";

const tableServices = {
  getRows() {
    return axios.get(BASE_URL + "/inventory/");
  },
  getParts() {
    return axios.get(BASE_URL + "/parts/");
  },
  getLocations() {
    return axios.get(BASE_URL + "/locations/");
  },
  getStatuses() {
    return axios.get(BASE_URL + "/statuses/");
  },
  getWip() {
    return axios.get(BASE_URL + "/wip/");
  },
  getCategories() {
    return axios.get(BASE_URL + "/categories/");
  },
  deletePart(row) {
    return axios.post(BASE_URL + "/inventory/delete", row);
  },
  convert(convertInfo) {
    return axios.post(BASE_URL + "/inventory/convert", convertInfo);
  },
  unconvert(unconvertInfo) {
    return axios.post(BASE_URL + "/inventory/unconvert", unconvertInfo);
  },
  changeQuantity(row) {
    return axios.post(BASE_URL + "/inventory/changeQuantity", row);
  },
  moveLocation(row) {
    return axios.post(BASE_URL + "/inventory/moveLocation", row);
  },
  addPart(row) {
    return axios.post(BASE_URL + "/inventory/addParts", row);
  },
  checkPartExists(partInfo) {
    return axios.post(BASE_URL + "/parts/checkPartExists", partInfo);
  },
  addLocation(name, note, address, postalCode) {
    return axios.post(
      BASE_URL + "/locations/add",
      name,
      note,
      address,
      postalCode
    );
  },
  deleteLocation(id) {
    return axios.post(BASE_URL + "/locations/delete", id);
  },
  editLocation(name, note, address, postalCode) {
    return axios.post(
      BASE_URL + "locations/edit",
      name,
      note,
      address,
      postalCode
    );
  },
  addStatus(name, note) {
    return axios.post(BASE_URL + "/statuses/add", name, note);
  },
  deleteStatus(id) {
    return axios.post(BASE_URL + "/statuses/delete", id);
  },
  editStatus(id, name, note) {
    return axios.post(BASE_URL + "/statuses/edit", id, name, note);
  },
};

export default tableServices;
