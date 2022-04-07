import axios from "axios";

const BASE_URL = "/api";

const tableServices = {
  getWeather() {
    return axios.get(BASE_URL + "/dashboard/", {credentials: true});
  },
  getRows() {
    return axios.get(BASE_URL + "/inventory/", {credentials: true});
  },
  getParts() {
    return axios.get(BASE_URL + "/parts/", {credentials: true});
  },
  getLocations() {
    return axios.get(BASE_URL + "/locations/", {credentials: true});
  },
  getStatuses() {
    return axios.get(BASE_URL + "/statuses/", {credentials: true});
  },
  getWip() {
    return axios.get(BASE_URL + "/wip/", {credentials: true});
  },
  getDistinctCategories() {
    return axios.get(BASE_URL + "/categories/distinct", {credentials: true});
  },
  getCategories() {
    return axios.get(BASE_URL + "/categories/", {credentials: true});
  },
  getUsers() {
    return axios.get(BASE_URL + "/people/", {credentials: true});
  },
  getLogs() {
    return axios.get(BASE_URL + "/logs/", {credentials: true});
  },
  deletePart(row) {
    return axios.post(BASE_URL + "/inventory/delete", row, {credentials: true});
  },
  convert(convertInfo) {
    return axios.post(BASE_URL + "/inventory/convert", convertInfo, {credentials: true});
  },
  unconvert(unconvertInfo) {
    return axios.post(BASE_URL + "/inventory/unconvert", unconvertInfo, {credentials: true});
  },
  changeQuantity(row) {
    return axios.post(BASE_URL + "/inventory/changeQuantity", row, {credentials: true});
  },
  moveLocation(row) {
    return axios.post(BASE_URL + "/inventory/moveLocation", row, {credentials: true});
  },
  addPart(row) {
    return axios.post(BASE_URL + "/inventory/addParts", row, {credentials: true});
  },
  checkPartExists(partInfo) {
    return axios.post(BASE_URL + "/parts/checkPartExists", partInfo, {credentials: true});
  },
  addLocation(addLocationInfo) {
    return axios.post(BASE_URL + "/locations/add", addLocationInfo, {credentials: true});
  },
  deleteLocation(deleteLocationInfo) {
    return axios.post(BASE_URL + "/locations/delete", deleteLocationInfo, {credentials: true});
  },
  editLocation(editLocationInfo) {
    return axios.post(BASE_URL + "/locations/edit", editLocationInfo, {credentials: true});
  },
  addStatus(addStatusInfo) {
    return axios.post(BASE_URL + "/statuses/add", addStatusInfo, {credentials: true});
  },
  deleteStatus(deleteStatusInfo) {
    return axios.post(BASE_URL + "/statuses/delete", deleteStatusInfo, {credentials: true});
  },
  editStatus(editStatusInfo) {
    return axios.post(BASE_URL + "/statuses/edit", editStatusInfo, {credentials: true});
  },
  addParts(addPartsInfo) {
    return axios.post(BASE_URL + "/parts/add", addPartsInfo, {credentials: true});
  },
  deleteParts(internal_part_number) {
    return axios.post(BASE_URL + "/parts/delete", internal_part_number, {credentials: true});
  },
  editParts(editPartsInfo) {
    return axios.post(BASE_URL + "/parts/edit", editPartsInfo, {credentials: true});
  },
  addPartCategory(addPartCategoryInfo) {
    return axios.post(BASE_URL + "/categories/add", addPartCategoryInfo, {credentials: true});
  },
  deletePartCategory(deletePartCategoryInfo) {
    return axios.post(BASE_URL + "/categories/delete", deletePartCategoryInfo, {credentials: true});
  },
  editPartCategory(editPartCategoryInfo) {
    return axios.post(BASE_URL + "/categories/edit", editPartCategoryInfo, {credentials: true});
  },
  addUser(addInfo) {
    return axios.post(BASE_URL + "/people/add", addInfo, {credentials: true});
  },
  deleteUser(deleteInfo) {
    return axios.post(BASE_URL + "/people/delete", deleteInfo, {credentials: true});
  },
  editUser(editInfo) {
    return axios.post(BASE_URL + "/people/edit", editInfo, {credentials: true});
  },
};

export default tableServices;
