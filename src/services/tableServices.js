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
  addLocation(addLocationInfo) {
    return axios.post(BASE_URL + "/locations/add", addLocationInfo);
  },
  deleteLocation(deleteLocationInfo) {
    return axios.post(BASE_URL + "/locations/delete", deleteLocationInfo);
  },
  editLocation(editLocationInfo) {
    return axios.post(BASE_URL + "locations/edit", editLocationInfo);
  },
  addStatus(addStatusInfo) {
    return axios.post(BASE_URL + "/statuses/add", addStatusInfo);
  },
  deleteStatus(deleteStatusInfo) {
    return axios.post(BASE_URL + "/statuses/delete", deleteStatusInfo);
  },
  editStatus(editStatusInfo) {
    return axios.post(BASE_URL + "/statuses/edit", editStatusInfo);
  },
  addParts(addPartsInfo) {
    return axios.post(BASE_URL + "/parts/add", addPartsInfo);
  },
  deleteParts(internal_part_number) {
    return axios.post(BASE_URL + "/parts/delete", internal_part_number);
  },
  editParts(editPartsInfo) {
    return axios.post(BASE_URL + "/parts/edit", editPartsInfo);
  },
  addPartCategory(addPartCategoryInfo) {
    return axios.post(BASE_URL + "/categories/add", addPartCategoryInfo);
  },
  deletePartCategory(deletePartCategoryInfo) {
    return axios.post(BASE_URL + "/categories/delete", deletePartCategoryInfo);
  },
  editPartCategory(editPartCategoryInfo) {
    return axios.post(BASE_URL + "/categories/edit", editPartCategoryInfo);
  },
};

export default tableServices;
